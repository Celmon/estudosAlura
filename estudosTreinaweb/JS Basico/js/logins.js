var enviar = document.getElementById('enviar');
var cadastrar = document.getElementById('cadastrar');

// var logins = { login: 'admin', senha: '123456' };

var Logins = function(){
    this.login =  "admin";
    this.senha = "123456";
    this.novoLogin = function (login, senha){
        this.login = login;
        this.senha = senha;
    }
}

var verificacao = new Logins();

enviar.addEventListener('click', function(event){
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if (verificacao.login === nome){
        if(verificacao.senha === senha){
            console.log('Birrrlll');
        } else {
            console.log('Senha incorreta');
        }
    } else {
        console.log('Você não esta cadastrado no sistema, clique no botão de se cadastrar caso queira cadastrar este login e senha');
    }

});

cadastrar.addEventListener('click', function(event){
    event.preventDefault();

    var nomeNovo = document.getElementById('nome').value;
    var senhaNova = document.getElementById('senha').value;

    if (verificacao.login === nomeNovo){
        if(verificacao.senha === senhaNova){
            console.log('Você já está cadastrado, não precisa se cadastrar denovo');
        } else {
            console.log('Este login já existe em nosso sistema');
        }
    } else {
        console.log('Parabéns agora você está no sistema');
        verificacao.novoLogin(nomeNovo,senhaNova);
        console.log(verificacao.login, verificacao.senha)
    }

});