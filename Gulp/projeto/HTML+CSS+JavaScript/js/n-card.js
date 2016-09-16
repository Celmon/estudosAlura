var $nCard = document.querySelector('.n-card');
var $nCardContent = document.querySelector('.n-card__content');
var $nCardAction = document.querySelector('.n-card__action');

$nCardContent.addEventListener('input', function(){
    var $error = document.querySelector('.error');
    if ($error !== null) {
        $error.remove();
    }

});

$nCard.addEventListener('submit', function(event){
    event.preventDefault();
    if ($nCardContent.value === '') {

        if (document.querySelector('.error') === null) {
            var $error = document.createElement('span');
            $error.classList.add('error');
            $error.textContent = 'Por favor, preencha o campo acima. Mula.';

            $nCard.insertBefore($error, $nCardAction);
        }
    } else {
        var $wrapCard = document.querySelector('.wrap-card');
        var $card = document.querySelector('.card');
        var $copyCard = $card.cloneNode(true);
        $copyCard.querySelector('.card__content').textContent = $nCardContent.value;
        $wrapCard.insertBefore($copyCard, $card);
    }

});
