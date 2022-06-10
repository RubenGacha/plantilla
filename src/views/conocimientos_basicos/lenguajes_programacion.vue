<template>
  <div id="cuerpo">
    <h1>Lenguajes de Programacion</h1>

    <h2>Tipos de Lenguajes</h2>

    <dl>
        <dt>Imperativos</dt>
        <dd>Se dan una serie de instrucciones indicando COMO hacer lo que queremos</dd>

        <dt>Declarativos</dt>
        <dd>Se basan en el lenguaje natural y teniendo una base de conocimiento de fondo el lenguaje da un resultado lo que "quiero HACER"</dd>
    </dl>

    <h3>Lenguajes Imperativos</h3>
    <p>Estan enfocados en el hardware por lo tanto los primeros lenguajes estan en codigo maquina</p>
    
    <ul>
        <li><em>Ensamblador:</em> estan hechos en codigo maquina, son los primeros lenguajes imperativos su codigo es complejo y era dificil de integrar a otra maquina ya que estaban hechos a la medida. (lenguajes de bajo nivel)</li>
        <li><em>Estructurados:</em> Se hace una extraccion y estan a la mitad del lenguaje natural. ya no depende de la maquina ya que se traduce el lenguaje a codigo maquina usando un compilador algunos lenguajes que se encuentran aqui son: C, Basic, Pascal, ADA, Cobol entre otros. se crean algunos paradismas que son Secuencia (se ejecuta en orden),Seleccion(condicionales y modificadores de flujo) y Iteradores (bucles), Datos Complejos(listas, arboles, registros), Funciones (crea un bloque de codigo para reutilizarlo) y Modulos(librerias). y son un lenguajes de alto nivel</li>
        <li><em>Programacion Orientada a Objetos:</em> Aparecen nuevos conceptos como Objetos,Clases, Atrubutos, Metodos, Interfaces, Mensajes, Eventos, Encapsulado(Publico, Privado y Protegido), Herencia( Multiple, Polimorfismo, Clases Abstractas) algunos de los lenguajes que usan este paradigma son: C++, C#, JAVA, JavaScript, Python, Ruby</li>
    </ul>

    <h3>Lenguajes Declarativos</h3>

    <ul>
        <li><em>Funcionales(matematicas)</em></li>
        <ul>
            <li>Listas, Funciones(matematicas), Lambda y recursividad</li>
            <li>Lisp, Scheme, Haskell</li>
        </ul>
        <li><em>Logicos (logicas de 1<sup>er</sup> Orden y Difusas</em></li>
        <ul>
            <li>Hechos, Reglas, Inferencias, Deducciones, Inducciones</li>
            <li>Programas: Prolog, CLIPS, Fuzzy CLIPS</li>
        </ul>
        <li><em>Proposito Especifico</em></li>
        <ul>
            <li>Estadisticas: R</li>
            <li>Bases de Datos: SQL</li>
            <li>WEB: HTML, CSS</li>
        </ul>
    </ul>

  </div>
</template>