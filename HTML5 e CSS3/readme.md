/*
  Cola
========

'tag'
'#id'
'.class'
ancestral descendente
irmão ~ irmão
irmão + irmão seguinte
pai > filho

"~" -= Todos os itens depois de outro :

    img ~ li ( todos os 'li's depois de uma img )

-

"+" -= O item imediatamente após um item :

    img + p ( apenas o primeiro 'p' após uma img )

-

">" -= pega todos os filhos daquele pai, mas não os 'netos' :

    div > p ( apenas os 'p's que sejam filhos da DIV, não afeta os 'p's filhos de outro elemento dentro desta DIV )

-

.Pseudo Classes Estruturais :
    :nth-child() [even(par), odd(ímpar), 7n+3(quantidadeDoPulo + pondoDePartida)]
    :first-child
    :last-child
    :nth-of-type() [ filtra por apenas um 'tipo' de elemento ]
-

.Pseudo Classes Dinâmicas :
    :hover
    :focus
    :active
    :checked
-

":first-child" e ":last-child" :

    p:first-child ( o primeiro 'p' que seja um filho )
    div :first-child ( o primeiro filho de uma 'div' )

    p:last-child ( o último 'p' que seja um filho )
    div :last-child ( o último filho de uma 'div' )

-

.Pseudo Elementos :
    :first-letter ou ::first-letter ( apareceu no CSS3 )
    :before
    :after
-

':before' e ':after' :

    p:before { content: '"' } ( antes do elemento 'p' terá este conteúdo )

    p:after { content: '"' } ( depois do elemento 'p' terá este conteúdo )

-
