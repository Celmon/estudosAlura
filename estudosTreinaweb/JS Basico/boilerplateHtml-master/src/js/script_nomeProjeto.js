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
        // Validação dos campos de valores de atributo do Robô
        var pontos = 15;
        var pontosElemento = document.getElementById('pontos');

        var ataque = document.getElementById('ataque').value;
        var ataqueInput = document.getElementById('ataque');

        var defesa = document.getElementById('defesa').value;
        var defesaInput = document.getElementById('defesa');

        var vida = document.getElementById('vida').value;
        var vidaInput = document.getElementById('vida');

        while(ataque <= 15 || defesa <= 15 || vida <= 15){
            pontos = ((pontos -= ataque),(pontos -= defesa),(pontos -= vida));
            pontosElemento.innerHTML = pontos;
            break;
        }

        if(pontos == 0){
            ataqueInput.setAttribute('max', ataque);
            defesaInput.setAttribute('max', defesa);
            vidaInput.setAttribute('max', vida);
        } else {
            ataqueInput.setAttribute('max', '15');
            defesaInput.setAttribute('max', '15');
            vidaInput.setAttribute('max', '15');
        }

        // Validação dos campos de valores de atributo após passar de nível
        var pontosLvUp = 5;
        var pontosLvUpElemento = document.getElementById('pontos-lvup');

        var ataqueLvUp = document.getElementById('ataque-lvup').value;
        var ataqueLvUpInput = document.getElementById('ataque-lvup');

        var defesaLvUp = document.getElementById('defesa-lvup').value;
        var defesaLvUpInput = document.getElementById('defesa-lvup');

        var vidaLvUp = document.getElementById('vida-lvup').value;
        var vidaLvUpInput = document.getElementById('vida-lvup');

        while(ataqueLvUp <= 5 || defesaLvUp <= 5 || vidaLvUp <= 5){
            pontosLvUp = ((pontosLvUp -= ataqueLvUp),(pontosLvUp -= defesaLvUp),(pontosLvUp -= vidaLvUp));
            pontosLvUpElemento.innerHTML = pontosLvUp;
            break;
        }

        if(pontosLvUp == 0){
            ataqueLvUpInput.setAttribute('max', ataqueLvUp);
            defesaLvUpInput.setAttribute('max', defesaLvUp);
            vidaLvUpInput.setAttribute('max', vidaLvUp);
        } else {
            ataqueLvUpInput.setAttribute('max', '5');
            defesaLvUpInput.setAttribute('max', '5');
            vidaLvUpInput.setAttribute('max', '5');
        }

    });

    var RivalNv0 = function(){
        this.ataque = Math.floor(Math.random() * (5 - 2) + 2);
        this.defesa = Math.floor(Math.random() * (5 - 2) + 2);
        this.vida = Math.floor(Math.random() * (5 - 2) + 2);
    }

    var RivalNv1 = function(){
        this.ataque = Math.floor(Math.random() * (8 - 3) + 3);
        this.defesa = Math.floor(Math.random() * (8 - 3) + 3);
        this.vida = Math.floor(Math.random() * (8 - 3) + 3);
    }

    var RivalNv2 = function(){
        this.ataque = Math.floor(Math.random() * (9 - 5) + 5);
        this.defesa = Math.floor(Math.random() * (9 - 5) + 5);
        this.vida = Math.floor(Math.random() * (9 - 5) + 5);
    }

    var Boss = function(){
        this.ataque = Math.floor(Math.random() * (15 - 10) + 10);
        this.defesa = Math.floor(Math.random() * (10 - 7) + 7);
        this.vida = Math.floor(Math.random() * (9 - 5) + 5);
    }

    var Robo = function(){
        this.nv = 0;
        this.exp = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.vida = 0;
    }

    var robo = new Robo();

    function criaRobo(){
        var valor1 = document.getElementById('ataque').value;
        var valor2 = document.getElementById('defesa').value;
        var valor3 = document.getElementById('vida').value;

        robo.ataque = parseInt(valor1);
        robo.defesa = parseInt(valor2);
        robo.vida = parseInt(valor3);
        robo.vidaInicial = parseInt(valor3);
        console.log(robo);
    }

    submit.addEventListener('click', function(event){
        event.preventDefault();
        console.log(pontos);
        criaRobo();
        // if (pontos == 0) {
        //     criaRobo();
        // };
        // if (pontos > 0) {
        //     console.log('Você ainda possui pontos para distribuir.');
        // }
        // if (pontos < 0) {
        //     console.log('Você gastou mais pontos do que devia.');
        // };
    });

    function upaPontosRobo(){
        var v1LvUp = document.getElementById('ataque-lvup').value;
        var v2LvUp = document.getElementById('defesa-lvup').value;
        var v3LvUp = document.getElementById('vida-lvup').value;

        robo.ataque = robo.ataque += parseInt(v1LvUp);
        robo.defesa = robo.defesa += parseInt(v2LvUp);
        robo.vida = robo.vida += parseInt(v3LvUp);
        robo.vidaInicial = robo.vidaInicial += parseInt(v3LvUp);
        console.log(robo);
        $('.stats-lvup').toggleClass('stats-atv');
    }

    submitLvUp.addEventListener('click', function(event){
        event.preventDefault();
        upaPontosRobo();
    });

    lutar.addEventListener('click', function(event){
        if(robo.nv == 0){
            var rival = new RivalNv0();
        }
        if(robo.nv == 1){
            var rival = new RivalNv1();
        }
        if(robo.nv >= 2 && robo.nv < 4){
            var rival = new RivalNv2();
        }
        if(robo.nv == 4){
            var rival = new Boss();
            console.log('Este é um chefão');
        }
        luta(robo,rival);
    });

    function luta(robo, rival){
        console.log(rival);
        (robo.defesa >= rival.ataque)?robo.vida -= 1:robo.vida -= (rival.ataque - robo.defesa);
        (rival.defesa >= robo.ataque)?rival.vida -= 1:rival.vida -= (robo.ataque - rival.defesa);
        if(rival.vida <= 0){
            console.log('Você derrotou seu rival');
            lvUp(robo);
        } else { console.log('A vida de seu rival após a batalha : ' + rival.vida); }
        if(robo.vida <= 0){
            console.log('Você morreu');
        } else { console.log('Sua vida após a batalha : ' + robo.vida); }
    }

    function lvUp(robo){
        var xp = Math.floor(Math.random() * (500 - 100) + 100);
        robo.exp += xp;
        console.log(robo);
        if(robo.exp >= 500 && robo.exp < 1000 && robo.nv == 0){
            robo.nv ++;
            robo.vida = robo.vidaInicial;
            console.log(robo);
            console.log('Você passou de nível e possui 5 pontos para distribuir');
            $('.stats-lvup').toggleClass('stats-atv');
        }
        if(robo.exp >= 1000 && robo.exp < 2000 && robo.nv == 1){
            robo.nv ++;
            robo.vida = robo.vidaInicial;
            console.log(robo);
            console.log('Você passou de nível e possui 5 pontos para distribuir');
            $('.stats-lvup').toggleClass('stats-atv');
        }
        if(robo.exp >= 2000 && robo.exp < 3000 && robo.nv == 2){
            robo.nv ++;
            robo.vida = robo.vidaInicial;
            console.log(robo);
            console.log('Você passou de nível e possui 5 pontos para distribuir');
            $('.stats-lvup').toggleClass('stats-atv');
        }
        if(robo.exp >= 3000 && robo.exp < 4000 && robo.nv == 3){
            robo.nv ++;
            robo.vida = robo.vidaInicial;
            console.log(robo);
            console.log('Você passou de nível e possui 5 pontos para distribuir');
            $('.stats-lvup').toggleClass('stats-atv');
        }
    }



});

