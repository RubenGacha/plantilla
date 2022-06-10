<template>
    <div id="cuerpo">
        <h1>Expresiones Regulares</h1>
        <p>Son un conjunto de caracteres que generan un patron. que permite realizar busquedas de texto. validando si cumple el patron creado. cada expresion tiene un automata finito.</p>

        <h2>Automata finito</h2>

        <p>El Automata finito es un modelo computacional que tiene una entrada de datos y su correspondiente salida, pasando por varios estados dependiendo el patron al que deseamos encontrar ejemplo si se crea la expresion "abc" el automata finito sera el siguiente. donde solo se cumple cuando se pasa por todos los estados de a pasa a b y de b pasa a c y como no tiene otras condiciones solo funcionaria con esas tres letra y ignararia cualquier otro caracter que este despues del ultimo estado que es c</p>

        <img src="@/assets/imagenes/conocimientos_basicos/automata_finito.svg">

        <h2>Anchors o limitadores</h2>

        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">^</td>
                <td scope="row">Este simbolo nos permite indicarle que el texto debe iniciar con, algo a tener encuenta es que funciona con el inicio de un documento o el inicio de una linea o el inicio de un string.se puede usar de la siguiente manera. <br><em class="enfasis">^Git</em><br>Se puede sacar con <kbd>alt</kbd>+<kbd>94</kbd></td>
            </tr>
            <tr>
                <td scope="row">&#92;A</td>
                <td scope="row">Este simbolo nos permite indicarle que el texto debe iniciar con, algo a tener encuenta es que funciona con el inicio de un documento o el inicio de una linea o el inicio de un string.se puede usar de la siguiente manera. <br><em class="enfasis">&#92;AGit</em></td>
            </tr>
            <tr>
                <td scope="row">$</td>
                <td scope="row">Este simbolo nos permite indicarle que el texto debe terminar con, algo a tener encuenta es que funciona con el final de un documento o el final de una linea o el final de un string.se puede usar de la siguiente manera. <br><em class="enfasis">Git$</em><br>Se puede sacar con <kbd>alt</kbd>+<kbd>36</kbd></td>
            </tr>
            <tr>
                <td scope="row">&#92;Z</td>
                <td scope="row">Este simbolo nos permite indicarle que el texto debe terminar con, algo a tener encuenta es que funciona con el final de un documento o el final de una linea o el final de un string.se puede usar de la siguiente manera. <br><em class="enfasis">Git&#92;Z</em></td>
            </tr>
            <tr>
                <td scope="row">&#92;b</td>
                <td scope="row">Nos permitr indicar que buscamos un limite de palabra <br>Se puede usar de la siguiente manera <br> <em class="enfasis">Git&#92;b</em><br>la barra vertical se puede sacar con <kbd>alt</kbd>+<kbd>92</kbd></td>
            </tr>
            <tr>
                <td scope="row">&#92;B</td>
                <td scope="row">Nos permitr indicar que buscamos cualquier caracter que no sea un limite de palabra <br>Se puede usar de la siguiente manera <br> <em class="enfasis">Git&#92;B</em><br>la barra vertical se puede sacar con <kbd>alt</kbd>+<kbd>92</kbd></td>
            </tr>
            <tr>
                <td scope="row">&#92;&#60;</td>
                <td scope="row">Nos permitr indicar que buscamos una palabra que inicie con un caracter especifico se puede usar <br> <em class="enfasis">&#92;&#60;Git</em></td>
            </tr>
            <tr>
                <td scope="row">&#92;&#62;</td>
                <td scope="row">Nos permitr indicar que buscamos una palabra que finalice con un caracter especifico se puede usar <br> <em class="enfasis">Git&#92;&#62;</em></td>
            </tr>
        </table>

        <h2>Quantifiers o Cuantificadores</h2>

        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">*</td>
                <td scope="row">Cero o mas veces. se usa de la siguiente manera<br><em class="enfasis">a*</em></td>
            </tr>
            <tr>
                <td scope="row">+</td>
                <td scope="row">uno o mas veces. se usa de la siguiente manera<br><em class="enfasis">a+</em></td>
            </tr>
            <tr>
                <td scope="row">?</td>
                <td scope="row">cero o una vez<br><em class="enfasis">a?</em></td>
            </tr>
            <tr>
                <td scope="row">{#}</td>
                <td scope="row">Exactamente la cantidad escrita entre los corchetes<br><em class="enfasis">a{3}</em></td>
            </tr>
            <tr>
                <td scope="row">{#,}</td>
                <td scope="row">la cantidad escrita o mas veces<br><em class="enfasis">a{3,}</em></td>
            </tr>
            <tr>
                <td scope="row">{#,#}</td>
                <td scope="row">desde una cantidad minima hasta una cantidad maxima<br><em class="enfasis">a{3,6}</em></td>
            </tr>
        </table>

        <h2>manera no codiciosa</h2>
        <p>Las expresiones regulares trabajan de forma codiciosa opteniendo la mayor cantidad de texto que cumpla la condicion, suelen venir despues de un asterisco o del simbolo + para cambiar este comportamiento se tiene que colocar el simbolo <em class="enfasis">?</em> despues de estos simbolos quedando de la siguiente manera <em class="enfasis">a*?</em></p>
        <h2>charater classes o Clases de caracteres</h2>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">\c</td>
                <td scope="row">caracter de control<br> se usa <em class="enfasis">\c</em></td>
            </tr>
            <tr>
                <td scope="row">\s</td>
                <td scope="row">caracter de espacio puede ser tabulador, espacio <br> se usa <em class="enfasis">\s</em></td>
            </tr>
            <tr>
                <td scope="row">\S</td>
                <td scope="row">caracter que indica cualquier caracter diferentes a los de espacio <br> se usa <em class="enfasis">\S</em></td>
            </tr>
            <tr>
                <td scope="row">\d</td>
                <td scope="row">caracter que indica cualquier caracter numerico <br> se usa <em class="enfasis">\d</em></td>
            </tr>
            <tr>
                <td scope="row">\D</td>
                <td scope="row">caracter que indica que sea cualquier caracter No numerico <br> se usa <em class="enfasis">\D</em></td>
            </tr>
            <tr>
                <td scope="row">\w</td>
                <td scope="row">caracter que indica que buscamos un caracter de palabra los cuales estan compuestos por numeros, letras o _ <br> se usa <em class="enfasis">\w</em></td>
            </tr>
            <tr>
                <td scope="row">\W</td>
                <td scope="row">caracter que indica que No buscamos un caracter de palabra lo que indica cualquier caracter que no sean numeros, letras o _ <br> se usa <em class="enfasis">\W</em></td>
            </tr>
            <tr>
                <td scope="row">\x</td>
                <td scope="row">caracter para buscar un caracter de numeros hexadecimales<br> se usa <em class="enfasis">\x</em></td>
            </tr>
            <tr>
                <td scope="row">\O</td>
                <td scope="row">caracter para buscar un caracter de numeros Octaldecimal<br> se usa <em class="enfasis">\O</em></td>
            </tr>
        </table>
        <h2>assertions o Aserciones</h2>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">?=</td>
                <td scope="row">nos permite condicionar la expresion que estamos buscando que contenga algo a continuacion <br> se usa <em class="enfasis">Vino(?=\s\w+)</em></td>
            </tr>
            <tr>
                <td scope="row">?!</td>
                <td scope="row">nos permite condicionar la expresion que estamos buscando que no continue con <br> se usa <em class="enfasis">Java\s(?!8|9)</em></td>
            </tr>
            <tr>
                <td scope="row">?&#60;=</td>
                <td scope="row"></td>
            </tr>
            <tr>
                <td scope="row">?!= or ?&#60;!</td>
                <td scope="row"></td>
            </tr>
            <tr>
                <td scope="row">?&#62;</td>
                <td scope="row"></td>
            </tr>
            <tr>
                <td scope="row">?()</td>
                <td scope="row"></td>
            </tr>
            <tr>
                <td scope="row">?()|</td>
                <td scope="row"></td>
            </tr>
            <tr>
                <td scope="row">?#</td>
                <td scope="row"></td>
            </tr>
        </table>
        <h2>conjuntos de caracteres y rangos</h2>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">.</td>
                <td scope="row">nos permite simbolizar cualquier caracter excepto nueva linea \n <br> se usa <em class="enfasis">.</em></td>
            </tr>
            <tr>
                <td scope="row">|</td>
                <td scope="row">nos permite crear multiples secuencias de caracteres dandolo como "o", entonces se expresa como "a" o "b" <br> se usa <em class="enfasis">ruben|dario</em></td>
            </tr>
            <tr>
                <td scope="row">()</td>
                <td scope="row">agrupa toda la secuencia que esta dentro de los parentesis<br> se usa <em class="enfasis">(ruben)</em></td>
            </tr>
            <tr>
                <td scope="row">(?:)</td>
                <td scope="row">no cuenta este grupo osea ignora el dato que se crea en este grupo <br> se usa <em class="enfasis">(?:regex)</em></td>
            </tr>
            <tr>
                <td scope="row">[]</td>
                <td scope="row">esto nos permite generar rangos o crear un grupo de caracteres que pueden aparecer <br>se usa <em class="enfasis">[a-zA-Z0-9]</em></td>
            </tr>
            <tr>
                <td scope="row">[^.]</td>
                <td scope="row">Este niega los caracteres que estan dentro del rango lo que indica que no puede ir ningun caracter que esta en ese rango <br>se usa <em class="enfasis">[^0-9]</em></td>
            </tr>
        </table>

        <h2>remplazo con grupos</h2>
        <p>Al colocar parentesis se crea grupos y se comienza a contar desde uno para poder usarlos se usa <em class="enfasis">$</em> o <em class="enfasis">\$</em> con el respectivo numero del grupo.</p>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">$</td>
                <td scope="row">nos permite usar el string que coincide con los parametros de busqueda de un grupo espesifico<br>se usa <em class="enfasis">$1</em></td>
            </tr>
            <tr>
                <td scope="row">$`</td>
                <td scope="row">String Antes de la coincidencia</td>
            </tr>
            <tr>
                <td scope="row">$'</td>
                <td scope="row">String despues de la coincidencia</td>
            </tr>
            <tr>
                <td scope="row">$+</td>
                <td scope="row">ultima coincidencia</td>
            </tr>
            <tr>
                <td scope="row">$&#38;</td>
                <td scope="row">Toda la coincidencia</td>
            </tr>
        </table>

        <h2>Banderas</h2>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">g</td>
                <td scope="row">nos permite realizar la busqueda de manera global</td>
            </tr>
            <tr>
                <td scope="row">i</td>
                <td scope="row">nos permite realizar la busqueda ignorando si es mayuscula o minuscula</td>
            </tr>
            <tr>
                <td scope="row">m</td>
                <td scope="row">nos permite realizar la busqueda por multiples lineas en un string que este separaado por lineas</td>
            </tr>
            <tr>
                <td scope="row">s</td>
                <td scope="row">nos permite tratar un string como una sola linea</td>
            </tr>
            <tr>
                <td scope="row">x</td>
                <td scope="row">permite comentarios y espacios en blanco en patron</td>
            </tr>
            <tr>
                <td scope="row">e</td>
                <td scope="row">Evaluar el reemplazo</td>
            </tr>
            <tr>
                <td scope="row">U</td>
                <td scope="row">patron no codicioso</td>
            </tr>
        </table>

        <h2>Posix</h2>
        <table class="table table-dark table-striped table-hover">
            <tr>
                <th scope="col">Simbolo</th>
                <th scope="col">Descripcion</th>
            </tr>
            <tr>
                <td scope="row">[:upper:]</td>
                <td scope="row">Mayusculas</td>
            </tr>
            <tr>
                <td scope="row">[:lower:]</td>
                <td scope="row">Minusculas</td>
            </tr>
            <tr>
                <td scope="row">[:alpha:]</td>
                <td scope="row">Todas las letras</td>
            </tr>
            <tr>
                <td scope="row">[:alnum:]</td>
                <td scope="row">alfanumericos</td>
            </tr>
            <tr>
                <td scope="row">[:digit:]</td>
                <td scope="row">numeros</td>
            </tr>
            <tr>
                <td scope="row">[:xdigit:]</td>
                <td scope="row">numeros hexadecimales</td>
            </tr>
            <tr>
                <td scope="row">[:punct:]</td>
                <td scope="row">puntuacion</td>
            </tr>
            <tr>
                <td scope="row">[:blank:]</td>
                <td scope="row">espacio y tabulador</td>
            </tr>
            <tr>
                <td scope="row">[:space:]</td>
                <td scope="row">espacio</td>
            </tr>
            <tr>
                <td scope="row">[:cntrl:]</td>
                <td scope="row">caracteres de control</td>
            </tr>
            <tr>
                <td scope="row">[:graph:]</td>
                <td scope="row">caracteres impresos</td>
            </tr>
            <tr>
                <td scope="row">[:print:]</td>
                <td scope="row">caracteres impresos y espacios</td>
            </tr>
            <tr>
                <td scope="row">[:word:]</td>
                <td scope="row">digitos, letras y underscore</td>
            </tr>
        </table>
    </div>
</template>

