var frase = $('.frase').text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tm-frase');
tamanhoFrase.text(numPalavras);

var campo = $('.campo-digit');
campo.on('input', function(){
  var conteudo = campo.val();
  var qntdPalavras = conteudo.split(" ").length;
  var qntdCaracteres = conteudo.length;
  $('#cont-palav').text(qntdPalavras);
  $('#cont-caract').text(qntdCaracteres);
});
