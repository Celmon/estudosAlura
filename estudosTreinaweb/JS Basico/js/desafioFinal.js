// alert('Birl');

var form = document.getElementById('form');

var senha = '1G5n98)/';
var senhaSplitada = senha.split('');

var textoConversa = document.getElementById('texto');
var caracSenha = '<h2> A senha do servidor possui '+ senha.length +' dígitos.</h2>';
textoConversa.innerHTML = caracSenha;

form.addEventListener('submit', function(event){
    event.preventDefault();

    // Definindo valor da senha digitada pelo usuário
    var senhaDigitada = document.getElementById('senha').value;
    var senhaDigitadaSplitada = senhaDigitada.split('');

    // Digitando a senha na tela
    var textoSenha = '<p>'+ senhaDigitada +'</p>';
    textoConversa.innerHTML = caracSenha + textoSenha;

    for(i = 0; i < senhaDigitadaSplitada.length; i++){
        if(senhaDigitadaSplitada[i] === senhaSplitada[i]){
            console.log('O caracter da posição ' + (i + 1) + ' esta certo');
        } else {
            console.log('O caracter da posição ' + (i + 1) + ' esta errado');
        }
    }

});

// for(i = 0; i <= 20; i++){
//     console.log('tentativa ' + i);
//     if(i == 20){
//         console.log('Acaboooooou');
//     }
// }