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










    var submit = document.getElementById('enviar');

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
            console.log('Acabaram seus pontos');
            ataqueInput.setAttribute('max', ataque);
            defesaInput.setAttribute('max', defesa);
            vidaInput.setAttribute('max', vida);
        } else {
            ataqueInput.setAttribute('max', '15');
            defesaInput.setAttribute('max', '15');
            vidaInput.setAttribute('max', '15');
        }

    });

    var rival = {
        ataque: 3,
        defesa: 5,
        vida: 3
    }

    submit.addEventListener('click', function(event){
        event.preventDefault();
        var valor1 = document.getElementById('ataque').value;
        var valor2 = document.getElementById('defesa').value;
        var valor3 = document.getElementById('vida').value;
        var robo = {
            ataque: valor1,
            defesa: valor2,
            vida: valor3
        }
        luta(robo,rival);
    });

    function luta(robo, rival){
        (robo.defesa >= rival.ataque)?robo.vida -= 1:robo.vida -= (rival.ataque -= robo.defesa);
        (rival.defesa >= robo.ataque)?rival.vida -= 1:rival.vida -= (robo.ataque -= rival.defesa);
        if(rival.vida <= 0){
            console.log('Você derrotou seu rival');
        } else { console.log('A vida de seu rival após a batalha : ' + rival.vida); }
        if(robo.vida <= 0){
            console.log('Você morreu');
        } else { console.log('Sua vida após a batalha : ' + robo.vida); }
    }













});

