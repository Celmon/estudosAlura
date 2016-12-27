// alert('Birl');

var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var senhaDigitada = document.getElementById('senha').value;
    var textoConversa = document.getElementById('texto');
    var textoSenha = '<h1>'+ senhaDigitada +'</h1>';
    textoConversa.innerHTML = textoSenha;
    console.log(senhaDigitada);
});

for(i = 0; i <= 20; i++){
    console.log('tentativa ' + i);
    if(i == 20){
        console.log('Acaboooooou');
    }
}