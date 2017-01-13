/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    function usuario(){
        var usuario = localStorage.usuario;
        if(usuario == 'Convidado'){
            $('.msg').append('<p> Você está conectado como convidado,'+ '<br>' + 'algumas funcionalidades do jogo podem não funcionar corretamente.');
        } else{
            $('.msg').append('<p> Bem vindo, ' + usuario);
        }
        $('#user').html(usuario);
    };
    usuario();

    function pontos(){
        var pontosAtual = $('#ptnAtual'),
            pontosFeitos,
            Dot = function(){
                var positionTop = Math.floor(Math.random() * (500 - 1)) + 1,
                    positionLeft = Math.floor(Math.random() * (800 - 1)) + 1;
                    dot = $('<div class="dot">');

                $('.dot').remove();
                $('.snakeGame').append(dot);
                dot.css("left",positionLeft);
                dot.css("top",positionTop);
            };

        new Dot();
        setInterval(function(){
            new Dot();
        }, 5000);

        pontosAtual.html(pontosFeitos);
    };
    pontos();

    function snake(){
        var snake = $('.snake'),
            snakeHead = $('.snake #cabeca'),
            snakeBody = $('.snake .corpo'),
            snakeTail = $('.snake #rabo'),
            snakeLeft = 0;
            snakeTop = 0;

        setInterval(function(){
            // $('<div class="corpo">').insertAfter(snakeHead);

            snakeLeft += 10;
            snake.css("left",snakeLeft);
        }, 1000);

        $(window).keypress(function(event){

            switch(event.which){
                case 119:
                    snakeTop -= 10;
                    snake.css("top",snakeTop);
                    break;
                case 115:
                    snakeTop += 10;
                    snake.css("top",snakeTop);
                    break;
                case 100:
                    snakeLeft += 10;
                    snake.css("left",snakeLeft);
                    break;
                /*case 97:
                    snakeLeft -= 10;
                    snake.css("left",snakeLeft);
                    break;*/
            };

        });
    };
    snake();
});
