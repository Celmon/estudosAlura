(function() {

  var tempoInicial = $('#tempo').text();
  var campo = $('.campo-digit');

  $(
    function() {
      atualizaFrase();
      contadores();
      cronometro();
      inicializaMarcadores();
      $('#btn-reiniciar').click(buttonReiniciar);
      $('#btn-placar').click(mostraPlacar);
      $('#btn-frase').click(fraseAleatoria);
      $('#btn-frase-id').click(buscaFrase);
      $('#btn-sync').click(sincronizaPlacar);
      atualizaPlacar();
       $('.modal').modal();
    }
  );

  function atualizaTempo(tempo){
    tempoInicial = tempo;
    $("#tempo").text(tempo);
  }

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
    campo.one('focus',function(){
      var tempoRestante = $('#tempo').text();
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
      var frase = $('.frase').text();
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

  function mostraPlacar() {
    $('.placar').stop().slideToggle(600);
  }

  function inserePlacar(){
    var corpoTabela = $('.placar').find('tbody');
    var usuario = $('#login-name').val();
    var fimPalavras = $('#cont-palav').text();
    var fimCaracteres = $('#cont-caract').text();
    var linha = novalinha(usuario,fimPalavras,fimCaracteres);
    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.prepend(linha);
    $('.placar').slideDown(500);
    scrollPlacar();
  }

  function sincronizaPlacar(){
    var placar = [];
    var linha = $('tbody>tr');
    linha.each(function(){
      var usuario = $(this).find("td:nth-child(1)").text();
      var palavras = $(this).find("td:nth-child(2)").text();

      var score = {
        usuario: usuario,
        pontos: palavras
      };

      placar.push(score);
    });
    var dados = {
      placar: placar
    };
    $.post("http://localhost:3000/placar",dados, function(){
      console.log("foi");
    }).always(function(){
        $('.msg_sync').toggleClass('teste');
        setTimeout(
          function(){
             $('.msg_sync').toggleClass('teste');
          },
          1500
        )
    });
  }

  function atualizaPlacar(){
    $.get("http://localhost:3000/placar", function(data){
      console.log("voltei");
      $(data).each(function(){
        var linha = novalinha(this.usuario, this.pontos);
        linha.find('.botao-remover').click(removeLinha);
        $('tbody').append(linha);
      });
    });
  }

  function scrollPlacar(){
    var posicaoPlacar = $('.placar').offset().top;
    $('body').animate({
      scrollTop: posicaoPlacar+"px"
    },1000);
  }


  function novalinha(usuario,fimPalavras,fimCaracteres){
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(fimPalavras);
    var colunaRemover = $('<td>');

    var link = $('<a>').addClass('botao-remover').attr('href','#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

  };


  function removeLinha(){
    $('.botao-remover').click(function(event){
      event.preventDefault();
      var linha = $(this).closest('tr');
      linha.fadeOut(1000);
      setTimeout(function(){
        linha.remove();
      },1000);
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


  function fraseAleatoria(){
    $('#spinner').show();
    $.get("http://localhost:3000/frases",trocaFrase)
    .fail(function(){
        setTimeout(function(){
          $('#erro').toggle();
        }, 2500);
        $('#erro').show();
    })
    .always(function(){
        $('#spinner').toggle();
    });
  }
  function trocaFrase(data){
    var frase = $('.frase');
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaFrase();
    atualizaTempo(data[numeroAleatorio].tempo)
  }
  function buscaFrase(){
    $('#spinner').show();
    var fraseId = $('#frase-id').val();
    var dados = { id: fraseId };
    $.get("http://localhost:3000/frases",dados,trocaFraseId)
    .fail(function(){
        setTimeout(function(){
          $('#erro').toggle();
        }, 2500);
        $('#erro').show();
    })
    .always(function(){
        $('#spinner').toggle();
    });
  }
  function trocaFraseId(data){
    var frase = $('.frase');
    frase.text(data.texto);
    atualizaFrase();
    atualizaTempo(data.tempo)
  }
}()
);
