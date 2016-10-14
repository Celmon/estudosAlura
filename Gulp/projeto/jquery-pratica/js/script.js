var $btn = $('.btn');

$btn.click(function(){
  event.preventDefault();
  var $nome = $('#nome').val();
  var $email = $('#email').val();
  if ($nome == '' && $email != '') {
    alert('Preencha o campo de nome');
  } else if ($nome == '' && $email == '') {
    alert('Preencha os campos de nome e de email');
  } else if ($nome !== '' && $email == '') {
    alert('Preencha o campo de email');
  }
  else {
    console.log('Olá,'+$nome+'.');
    console.log($email);
    var $form = $('#form');
    var $sucesso = $('.sucess');
    $form.css('display','none');
    $sucesso.css('display','block');
  }
});
