# estudoBEM

Bloco vs Elemento :

    -Se a seção de código pode vir a ser reutilizada e não depende de um componente de outra página ser implementado, você deve usar um 'Bloco'.

    -Se a seção de código não pode ser utilizada sem o 'Bloco Pai', então se utiliza um elemento.

    -A exceção refere-se a elementos que precisem  se dividir em partes menores -subelements- em ordem de simplificar o desenvolvimento.

    -Na metodologia BEM, você não pode criar elementos de elementos (referênciado acima). Em casos como esse, ao invés de criar um elemento, você deve criar um bloco.

-

Bloco :

    Exemplo de usagem de Bloco:
        O nome do bloco deve descrever sua função
        {
            <div class="error"></div> <!-- usagem correta -->
            <div class="red-text"></div> <!-- usagem incorreta -->
        }
        Um bloco pode ser aninhado em outros
        {
            <header class="header">
                <div class="logo"></div>
                <form class="search-form"></form>
            </header>
        }
    -

-

Elemento:

    Exemplo de usagem de Elemento:
        O nome do elemento deve descrever sua função
        {
            <form class="search-form">
                <input class="search-form__input">
                <button class="search-form__button"></button>
            </form>
        }
        Um elemento pode ser aninhado em outros, porém deve manter a nomenclatura referênciada ao 'bloco pai'
        {

            <form class="search-form"> <!-- Utilização correta -->
                <div class="search-form__content">
                    <input class="search-form__input">
                    <button class="search-form__button">Search</button>
                </div>
            </form> <!-- Utilização correta -->

            <form class="search-form"> <!-- Utilização incorreta -->
                <div class="search-form__content">
                    <input class="search-form__content__input"><!-- Recomendado: `search-form__input` ou `search-form__content-input` -->

                    <button class="search-form__content__button">Search</button><!-- Recomendado: `search-form__button` ou `search-form__content-button` -->
                </div>
            </form> <!-- Utilização incorreta -->

        }
    -
-

Um elemento sempre será parte de um bloco e você não deve utiliza-lo separadamente.
Um elemento é uma parte opicional de um bloco e nem todo bloco terá um elemento.
Ou seja, um elemento sempre precisará ter um bloco mas nem todo bloco precisa ter um elemento.

Modificadores :
    Uma entidade que define a aparência, o estado, ou comportamento de um bloco ou elemento.
    Usagem:
        -O nome do modificador deve descrever sua aparência, estado ou comportamento. (size_small)
        -O nome do modificador é separado do nome do bloco ou elemento por um _
    -

-
