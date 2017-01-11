/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    var usuario = localStorage.usuario;
    if(usuario == 'Convidado'){
        $('.msg').append('<p> Você está conectado como convidado,'+ '<br>' + 'algumas funcionalidades do jogo podem não funcionar corretamente.');
    } else{
        $('.msg').append('<p> Bem vindo, ' + usuario);
    }
    $('#user').html(usuario);
});
