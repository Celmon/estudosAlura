/*!
 * @Nome do projeto
 * Desenvolvido por @nome em: 21/10/2016
 */

$(function(){
    var usuariosRegistrados = [
        { usuario: 'adm', senha: '123456' },
        { usuario: 'adversario', senha: '852346' },
        { usuario: 'jose', senha: 'abc156' },
        { usuario: 'adalberto', senha: '213498' }
    ]
    var usuario;
    var senha;

    var logica = false;

    $('#btnEnviar').click(function(e){
        e.preventDefault();
        usuario = $('#usuario').val();
        senha = $('#senha').val();
        for(i in usuariosRegistrados){
            if(usuariosRegistrados[i].usuario == usuario){
                if(usuariosRegistrados[i].senha == senha){
                    logica = true;
                    break;
                }
                break;
            }
        }
        if(logica){
            console.log('Correto');
        } else{
            console.log('Usuário ou senha incorretos');
        }
    });

    $('#convidado').click(function(e){
        e.preventDefault();
    });

});
