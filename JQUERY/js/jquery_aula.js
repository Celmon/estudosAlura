$('.listas').on('click', 'li', function(){
    var texto = $(this).text();
    alert(texto);
});
$('.btn-add').click(function(){
    var texto = $('.treino').val();
    $('<li>').text(texto).css({ 'color' : 'blue', 'background-color' : 'lightgrey'}).appendTo('.listas');
});
