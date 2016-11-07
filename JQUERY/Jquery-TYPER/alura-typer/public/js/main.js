var tempoInicial = $('#tempo').text();
var campo = $('.campo-digit');

$(
  function() {
    atualizaFrase();
    contadores();
    cronometro();
    $('#btn-reiniciar').click(buttonReiniciar);
  }
);

function atualizaFrase(){
  var frase = $('.frase').text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $('#tm-frase');
  tamanhoFrase.text(numPalavras);
}

function contadores(){
  campo.on('input', function(){
    var conteudo = campo.val();
    var qntdPalavras = conteudo.split(" ").length;
    var qntdCaracteres = conteudo.length;
    $('#cont-palav').text(qntdPalavras);
    $('#cont-caract').text(qntdCaracteres);
  });
}

function cronometro(){
  var tempoRestante = $('#tempo').text();
  campo.one('focus',function(){
    var cronometroID = setInterval(function(){
      tempoRestante--;
      $('#tempo').text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr('disabled',true);
        clearInterval(cronometroID);
      }
    },1000)
  })
}

function buttonReiniciar() {
  campo.attr('disabled', false);
  campo.val('');
  $('#cont-palav').text('0');
  $('#cont-caract').text('0');
  $('#tempo').text(tempoInicial);
  cronometro();
}
