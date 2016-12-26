/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){

    /* Teste 01
        var logins = [
            { usuario: 'admin', senha: '123' },
            { usuario: 'patati', senha: 'patata'}
        ];
        console.log(logins);

        var btnEnviar = document.getElementById('enviar');

        btnEnviar.addEventListener('click', function(event){

            var usuarioNovo = document.getElementById('usuario').value;
            var senhaNovo = document.getElementById('senha').value;
            var dados = { usuarioNovo, senhaNovo };

            event.preventDefault();
            logins.push(dados);
            console.log(logins);

        });
    */

    /* Desafio 08
        var corredor1 = { nome: 'gordo', metros: Math.floor(Math.random() * (50 - 20)) + 20 };
        var corredor2 = { nome: 'magro', metros: Math.floor(Math.random() * (50 - 20)) + 20 };

        for(i = 1; i <= 100; i++){

            if(i == 99){
                console.log('PENÚLTIMA VOLTA');
            } else if(i == 100){
                console.log('ÚLTIMA VOLTA');
            } else {
                console.log('Volta atual = ' + i);
            }

            corredor1.metros += 20;
            corredor2.metros += 20;

            console.log( 'O ' + corredor1.nome + ', correu ' + corredor1.metros + ' metros');
            console.log( 'O ' + corredor2.nome + ', correu ' + corredor2.metros + ' metros');

        }
    */

    /* Desafio 09
    function maioridade(idade){
        if(idade < 18){
            console.log('não pode ser preso');
        } else {
            console.log('já pode ser preso');
        }
        return idade;
    };
    console.log(maioridade(22));
    */

    // Desafio 10
    var submit = document.getElementById('enviar');
    var submitLvUp = document.getElementById('enviar-lvup');
    var lutar = document.getElementById('lutar');

    $(document).change(function(){
        var pontos = 15;
        var pontosElemento = document.getElementById('pontos');

        var ataque = document.getElementById('ataque').value;
        var ataqueInput = document.getElementById('ataque');

        var defesa = document.getElementById('defesa').value;
        var defesaInput = document.getElementById('defesa');

        var vida = document.getElementById('vida').value;
        var vidaInput = document.getElementById('vida');

        while(ataque <= 15 || defesa <= 15 || vida <= 15){
            var pontosFinal = ((pontos -= ataque),(pontos -= defesa),(pontos -= vida));
            // console.log(pontosFinal);
            pontosElemento.innerHTML = pontosFinal;
            break;
        }

        if(pontosFinal == 0){
            // console.log('Acabaram seus pontos');
            ataqueInput.setAttribute('max', ataque);
            defesaInput.setAttribute('max', defesa);
            vidaInput.setAttribute('max', vida);
        } else {
            ataqueInput.setAttribute('max', '15');
            defesaInput.setAttribute('max', '15');
            vidaInput.setAttribute('max', '15');
        }

        var pontosLvUp = 2;
        var pontosLvUpElemento = document.getElementById('pontos-lvup');

        var ataqueLvUp = document.getElementById('ataque-lvup').value;
        var ataqueLvUpInput = document.getElementById('ataque-lvup');

        var defesaLvUp = document.getElementById('defesa-lvup').value;
        var defesaLvUpInput = document.getElementById('defesa-lvup');

        var vidaLvUp = document.getElementById('vida-lvup').value;
        var vidaLvUpInput = document.getElementById('vida-lvup');

        while(ataqueLvUp <= 2 || defesaLvUp <= 2 || vidaLvUp <= 2){
            var pontosFinal = ((pontosLvUp -= ataqueLvUp),(pontosLvUp -= defesaLvUp),(pontosLvUp -= vidaLvUp));
            // console.log(pontosFinal);
            pontosLvUpElemento.innerHTML = pontosFinal;
            break;
        }

        if(pontosFinal == 0){
            // console.log('Acabaram seus pontos');
            ataqueLvUpInput.setAttribute('max', ataqueLvUp);
            defesaLvUpInput.setAttribute('max', defesaLvUp);
            vidaLvUpInput.setAttribute('max', vidaLvUp);
        } else {
            ataqueLvUpInput.setAttribute('max', '15');
            defesaLvUpInput.setAttribute('max', '15');
            vidaLvUpInput.setAttribute('max', '15');
        }

    });

    var rival = {
        ataque: 3,
        defesa: 5,
        vida: 3
    }

    // function roboUsuario(valor1, valor2, valor3){
    //     var robo = {
    //         ataque: valor1,
    //         defesa: valor2,
    //         vida: valor3
    //     }
    // }

    submit.addEventListener('click', function(event){
        event.preventDefault();
        var valor1 = document.getElementById('ataque').value;
        var valor2 = document.getElementById('defesa').value;
        var valor3 = document.getElementById('vida').value;
        roboUsuario(valor1, valor2, valor3);
        luta(robo,rival);
    });

    submitLvUp.addEventListener('click', function(event){
        event.preventDefault();
        var v1LvUp = document.getElementById('ataque').value;
        var v2LvUp = document.getElementById('defesa').value;
        var v3LvUp = document.getElementById('vida').value;
        robo.ataque = robo.ataque += v1LvUp;
        robo.defesa = robo.defesa += v2LvUp;
        robo.vida = robo.vida += v3LvUp;
        console.log(robo);
    });

    // lutar.addEventListener('click', function(event){
    //     luta(robo,rival);
    // });

    function luta(robo, rival){
        (robo.defesa >= rival.ataque)?robo.vida -= 1:robo.vida -= (rival.ataque -= robo.defesa);
        (rival.defesa >= robo.ataque)?rival.vida -= 1:rival.vida -= (robo.ataque -= rival.defesa);
        if(rival.vida <= 0){
            console.log('Você derrotou seu rival');
            console.log('Você passou de nível e possui 2 pontos para distribuir');
            $('.stats-lvup').toggleClass('stats-atv');
        } else { console.log('A vida de seu rival após a batalha : ' + rival.vida); }
        if(robo.vida <= 0){
            console.log('Você morreu');
        } else { console.log('Sua vida após a batalha : ' + robo.vida); }
    }



});

