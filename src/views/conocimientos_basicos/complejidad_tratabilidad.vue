<template>
  <div id="cuerpo">
    <h1>Complejidad y Tratabilidad</h1>
    <p>El factor mas predominante que delimita lo que se puede resolver en un tiempo razonable de lo que no lo es suele ser el <em class="enfasis">algoritmo</em> elegido para resolver el problema y no la potencia de calculo.</p>

    <p>El programador es responsable de usar los recursos del computador de la forma mas eficiente posible.</p>

    <h2>Factores que influyen en la eficiencia del algoritmo</h2>

    <dl>
        <dt>El tamaño</dt>
        <dd>hace referencia a la cantidad de datos de entrada</dd>
        <dt>El contenido</dt>
        <dd>Hace referencia a que datos estamos tratando estos pueden hacer oscilar la eficiencia del algoritmo entre el valor minimo y el valor maximo</dd>
        <dt>El computador</dt>
        <dd>Se refiere al procesamiento que puede usar el algoritmo.</dd>
    </dl>

    <h2>Casos al momento de analizar un algoritmo</h2>
    <dl>
        <dt>Mejor caso</dt>
        <dd>analisis con los datos de entrada que hacen que el algoritmo tarde menos tiempo. aporta el limite minimo.</dd>

        <dt>Peor caso</dt>
        <dd>analisis con los datos de entrada que hacen que el algoritmo tarde mas tiempo. aporta el limite maximo y es el mas critico y mas importante.</dd>

        <dt>Caso Promedio</dt>
        <dd>analisis con los datos de entrada que se dan con mayor frecuencia. es mas realista pero es el mas complejo de calcular analiticamente aunque se puede aproximar experimentalmente.</dd>
    </dl>

    <h2>Criterio Asintotico</h2>
    <p><em class="enfasis">Se ignorara al computador y al compilador.</em></p>

    <ul>
        <li>Analisis independiente de la maquina y el lenguaje. un programa tan solo es una implementacion concreta de un algoritmo.</li>
        <li>Para tamaños suficientemente grandes, el tiempo de ejecucion depende mas del algoritmo que de la maquina o el lenguaje. Diferentes implementaciones solo se diferencian en una constante multiplicativa.</li>
        <li>El analisis se realizara tanto en tiempo como en espacio(memoria utilizada.) son contrapuestos</li>
    </ul>

    <h2>Complejidad Asintotica</h2>

    <p>tambien llamadas <em class="enfasis">Notacion asintotica, analisis asintotico o criterio Asintotico</em></p>

    <p>Asignar un orden de complejidad a cada algoritmo solo segun el tamaño de su problema(tamaño de los datos de entrada).</p>

    <p>Ejemplos: longitud de un vector, cantidad de elementos de una coleccion, longitud de un fichero, dimensiones de una matriz, magnitud de los numeros, etc.</p>

    <h2>Calculo de la eficiencia</h2>
    <p>A cada instruccion de un algoritmo se le asigna un coste.</p>
    <dl>
        <dt>Instruccion basica</dt>
        <dd>Que no depende del ta del problema(asignacion, I/O,etc.): Coste costante</dd>

        <dt>Secuencia de instrucciones</dt>
        <dd>el coste sera el de la instruccion conste maximo (alternativa: suma).</dd>

        <dt>Condicionales</dt>
        <dd>de las dos opciones, la que tenga mayor coste.</dd>

        <dt>Iteraciones</dt>
        <dd>Se multiplica el numero maximo de iteraciones por el coste del bucle.</dd>

        <dt>Instruccion critica</dt>
        <dd>Instruccion que mas veces se repite dentro de un programa, para tamaños de programa suficientemente grandes, el resto del programa perdera importancia frente al coste de repetir la instruccion critica, por muy elemental que sea.</dd>
    </dl>

    <pre v-highlightjs><code class="plaintext"><em class="clave">funcion</em> <em class="cambiar">EJEMPLO</em>(problema) <em class="clave">devuelve</em> resultado <em class="comentario">#-------------f(n<sup>2</sup>)------------------</em>

    variable=valor <em class="comentario"># f(1)  </em>
    resultado=invocar-metodo(problema) <em class="comentario"># f(n)</em>
    si resultado == 0 entonces <em class="comentario">#----------f(n<sup>2</sup>)------</em>
        mostrar-error-pantalla() <em class="comentario"># f(1)</em>
    si no
        por cada elemento en resultado <em class="comentario">#------f(n*n) = f(n<sup>2</sup>)</em>
            otra = metodo(elemento) <em class="comentario"># f(1)</em>
            variable=variable+1 <em class="comentario"># f(1)</em>
            si otra > variable entonces <em class="comentario">#------f(n)</em>
                mostrar-aviso-pantalla() <em class="comentario"># f(1)</em>
            si no
                otro-metodo(otra) <em class="comentario"># f(n)</em>

    <em class="clave">devolver</em> resultado
    </code></pre>
    <h3>Matices</h3>
    <ul>
        <li>Con constantes multiplicativas muy grandes, para problemas con tamaños pequeños, es mejor usar algoritmos mas ineficientes.</li>
        <li>Para funciones que se van a usar pocas veces, no importa usar algoritmos mas ineficientes si son mas rapidos de desarrollar y mantener</li>
        <li>la ganancia en tiempo suele ser a costa del uso del espacio ocupado. la memoria es un recurso muy limitante, mas que el tiempo, luego hay que buscar un equilibrio.</li>
    </ul>

    <h3>Ordenes de complejidad</h3>

    <p>De menor coste al mayor coste.</p>
    <table class="table table-dark table-striped table-hover">
        <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Descripccion</th>
        </tr>
        <tr>
            <td scope="row">O(1)</td>
            <td scope="row">Orden Constante</td>
        </tr>
        <tr>
            <td scope="row">O(log(n))</td>
            <td scope="row">Orden Logaritmico</td>
        </tr>
        <tr>
            <td scope="row">O(n)</td>
            <td scope="row">Orden Lineal</td>
        </tr>
        <tr>
            <td scope="row">O(n)</td>
            <td scope="row">Orden Lineal</td>
        </tr>
        <tr>
            <td scope="row">O(n*log(n))</td>
            <td scope="row">Orden N-Logaritmico</td>
        </tr>
        <tr>
            <td scope="row">O(n<sup>2</sup>)</td>
            <td scope="row">Orden Cuadratico</td>
        </tr>
        <tr>
            <td scope="row">O(n<sup>a</sup>)</td>
            <td scope="row">Orden polinomico</td>
        </tr>
        <tr>
            <td scope="row">O(a<sup>n</sup>)</td>
            <td scope="row">Orden Exponencial</td>
        </tr>
        <tr>
            <td scope="row">O(a!)</td>
            <td scope="row">Orden Factorial</td>
        </tr>
        <tr>
            <td scope="row">O(n<sup>n</sup>)</td>
            <td scope="row">Orden Potencial-Exponencial</td>
        </tr>
    </table>

    <h3>Tratabilidad</h3>
    <dl>
        <dt>Problemas Indecidibles</dt>
        <dd>Son los que no poseen un algoritmo. No es que no se conozca aun, sino que no existe algoritmo</dd>

        <dt>Problemas Decidibles</dt>
        <dd>Posee algoritmos, por lo que se pueden resolver mediante un programa (aunque aun no lo conozcamos)
        <ul>
            <li><em>Problemas Tratables (clase P)</em> Orden Polinomico o inferior</li>
            <li><em>Problemas intratables (clase NP)</em> Orden exponencial o superior</li>
            <li><em>Clase NP-Completa (NP-Duro)</em> son de la clase NP pero no de la clase P. (No se conoce solucion polinomica).</li>
        </ul>
        </dd>
    </dl>
</div>
</template>