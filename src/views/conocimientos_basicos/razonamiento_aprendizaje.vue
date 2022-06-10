<template>
  <div id="cuerpo">
    <h1>Razonamiento y Aprendizaje</h1>
    <p>algunos algoritmos que se pueden encontran en la programacion son los que manejan datos numericos ejemplo el tamaño de las hojas de una planta entre este grupo tenemos los conexionistas (grafos y redes) que se pueden representar en un formato grafico y los que manejan datos simbolicos ejemplo el color de las hojas de una planta y son usados en la logica como en nivel textual y el lenguaje formal.</p>
    
    <h2>Conecionistas</h2>

    <p>El siguiente ejemplo es un grafo etiquetado y dirigido recordando que esto es una estructura.</p>
    <img src="@/assets/imagenes/conocimientos_basicos/grafo1.svg" alt="ejemplo de un grafo">

    <h2>Representacion Simbolica</h2>

    <h3>Reglas</h3>

    <p>En la logica tenemos que se representa por reglas, que son compuestas de antecedentes y Consecuente un ejemplo es el siguiente A es el padre de B y B es el padre de C si entonces A es el abuelo de C</p>

    <math-jax latex="padre(A,B) padre(B,C) \rightarrow abuelo(A,C)" />

    <h3>Hechos</h3>

    <p>los hechos son cosas de la realidad que son representadas con las reglas</p>
    
    <math-jax latex="padre(Antonio, Bernardo) padre(Bernardo,Carlos) \rightarrow abuelo(Antonio,Carlos)" />
    
    <h2>Tipos de Razonamiento</h2>
    <p>Existen cuatro tipos de razonamiento la cual se dan teniendo algunos datos ya sean los hechos, reglas o las consecuencias</p>

    <math-jax latex="hechos + reglas \rightarrow consecuencias" />
    
    <table class="table table-dark table-striped table-hover">
        <tr>
            <th scope="col"></th>
            <th scope="col">Hechos</th>
            <th scope="col">Reglas</th>
            <th scope="col">Consecuencias</th>
        </tr>
        <tr>
            <td scope="row">Deductivo</td>
            <td scope="row">Se tiene </td>
            <td scope="row">Se tiene </td>
            <td scope="row">Se obtiene</td>
        </tr>
        <tr>
            <td scope="row">Inductivo</td>
            <td scope="row">Se tiene</td>
            <td scope="row">Se obtiene</td>
            <td scope="row">Se tiene</td>
        </tr>
        <tr>
            <td scope="row">Abductivo</td>
            <td scope="row">Se obtiene</td>
            <td scope="row">Se tiene</td>
            <td scope="row">Se tiene</td>
        </tr>
        <tr>
            <td scope="row">Analogico (se basa en datos anteriores como categorizar los animales perro, gatos etc.)</td>
            <td scope="row">Se tiene</td>
            <td scope="row">No se tiene</td>
            <td scope="row">Se obtiene</td>
        </tr>
    </table>

    <h2>Tipos de Aprendizaje</h2>

    <p>Si los ejemplos (instancias) con los que se va a realizar el aprendizaje tiene o no una etiqueta con la clase a la que pertenecen</p>
    
    <ul>
        <li><em>Supervisado</em> ejemplos etiquetados</li>
        <li><em>No supervidado</em> ejemplos NO etiquetados</li>
        <li><em>Por Refuerzo (recompensa) </em>etiqueta a posteriori </li>
    </ul>
  </div>
</template>