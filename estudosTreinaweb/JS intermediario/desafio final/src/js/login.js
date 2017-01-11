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
        ],
        usuario,
        senha,
        logica = false;

    // localStorage.usuariosRegistrados = usuariosRegistrados;

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
        try{
            if(logica){
                localStorage.usuario = usuario;
                usuario = $('#usuario').val('');
                senha = $('#senha').val('');
                window.location.href = "http://localhost:3000/index.html";
            } else{
                throw new Error;
            }
        }
        catch(e){
            $('.txtErro').html('Usuário ou senha incorretos');
            $('.txtErro').toggleClass('ativo');
            setTimeout(function(){
                $('.txtErro').toggleClass('ativo');
            }, 3000);
        }
    });

    $('#btnCadastrar').click(function(e){
        e.preventDefault();
        usuario = $('#usuario').val();
        senha = $('#senha').val();
        try{
            if(usuario && senha){
                for(i in usuariosRegistrados){
                    if(usuariosRegistrados[i].usuario == usuario){
                        logica = true;
                    }
                }
                try{
                    if(logica){
                        throw new Error;
                    } else{
                        var novoUsuario = {
                            usuario: usuario,
                            senha: senha
                        };
                        usuariosRegistrados.push(novoUsuario);
                        usuario = $('#usuario').val('');
                        senha = $('#senha').val('');
                    }
                }catch(e){
                    $('.txtErro').html('Este usuário já existe.');
                    $('.txtErro').toggleClass('ativo');
                    setTimeout(function(){
                        $('.txtErro').toggleClass('ativo');
                    }, 3000);
                }
            } else{
                throw new Error;
            }
        } catch(e){
            $('.txtErro').html('Você não pode registrar valores vazios.');
            $('.txtErro').toggleClass('ativo');
            setTimeout(function(){
                $('.txtErro').toggleClass('ativo');
            }, 3000);
        }
    });

    $('#convidado').click(function(e){
        e.preventDefault();
        localStorage.usuario = 'Convidado';
        window.location.href = "http://localhost:3000/index.html";
    });

});
