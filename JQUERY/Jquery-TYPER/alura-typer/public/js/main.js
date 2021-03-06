(function() {

  var tempoInicial = $('#tempo').text();
  var campo = $('.campo-digit');
  var frase = $('.frase').text();

  $(
    function() {
      atualizaFrase();
      contadores();
      cronometro();
      inicializaMarcadores();
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
          clearInterval(cronometroID);
          finalizaJogo()
        }
      },1000)
    })
  }

  function finalizaJogo(){
    campo.attr('disabled',true);
    campo.toggleClass('campo-desativado');
    inserePlacar();
  }

  function inicializaMarcadores() {
    campo.on('input', function(){
      var digitado = campo.val();
      var comparavel = frase.substr(0,digitado.length);
      if (digitado == comparavel) {
        campo.addClass('borda-verde');
        campo.removeClass('borda-vermelha');
      } else {
        campo.addClass('borda-vermelha');
        campo.removeClass('borda-verde');
      }
    });
  }

  function inserePlacar(){
    var corpoTabela = $('.placar').find('tbody');
    var usuario = "Sou eu bola de fogo"
    var fimPalavras = $('#cont-palav').text();
    var fimCaracteres = $('#cont-caract').text();
    var linha = novalinha(usuario,fimPalavras,fimCaracteres);
    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.prepend(linha);
  }

  function novalinha(usuario,fimPalavras,fimCaracteres){
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(fimPalavras);
    var colunaCaracteres = $('<td>').text(fimCaracteres);
    var colunaRemover = $('<td>');

    var link = $('<a>').addClass('botao-remover').attr('href','#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaCaracteres);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

  };

  function removeLinha(){
    $('.botao-remover').click(function(event){
      event.preventDefault();
      $(this).closest('tr').remove();
    });
  }

  function buttonReiniciar() {
    campo.attr('disabled', false);
    campo.val('');
    $('#cont-palav').text('0');
    $('#cont-caract').text('0');
    $('#tempo').text(tempoInicial);
    cronometro();
    campo.toggleClass('campo-desativado');
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
  }

}()
);
