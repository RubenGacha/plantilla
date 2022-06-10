<template>
  <div id="cuerpo">
    <h1>Agentes Inteligentes</h1>

    <p>Los agentes Inteligentes son entes que logran percibir su entorno mediante sensores y actua sobre el mismo mediante actuadores.</p>

    <table class="table table-dark table-striped table-hover">
        <tr>
            <th scope="col"></th>
            <th scope="col">Sensores</th>
            <th scope="col">Actuadores</th>
        </tr>
        <tr>
            <td scope="row">Humanos</td>
            <td scope="row">Ojos, Oidos, Nariz, Boca, Piel </td>
            <td scope="row">Manos, Pies, Cuerdas Vocales </td>
        </tr>
        <tr>
            <td scope="row">Robots</td>
            <td scope="row">Camaras, Infrarrojos, Laseres, Sonares, Sensores de presion</td>
            <td scope="row">Motores, Brazos mecanicos, Pinzas, Altavoces.</td>
        </tr>
        <tr>
            <td scope="row">Software</td>
            <td scope="row">Pulsaciones de teclado, contenido de archivos, datos de red recibidos,etc. </td>
            <td scope="row">pantallas, archivos de salida, Datos de red enviados, etc</td>
        </tr>
    </table>

    <h2>Percepcion</h2>
    <p>la percepcion es la capacidad de recibir informacion del entorno, con esto el agente puede tomar acciones en cualquier instante, aunque esto dependera de la secuencia de percepciones observada hasta ese momento.</p>

    <p>para aclarar la secuencia de percepciones son la historia completa de los datos que ha percibido el agente durante un tiempo. se guardan en una memoria.</p>

    <img src="@\assets\imagenes\conocimientos_basicos\agente.svg" alt="Forma en que funciona un agente">

    <h2>Funcion de Agente</h2>

    <p>Se encarga de elegir una accion a partir de una secuencia de percepciones que se pueden visualizar en una tabla, en la que se puede encontrar las diferentes percepciones junto a la accion a realizar, al mismo tiempo se tiene una combinacion de las posibles percepciones que se tengan.</p>

    <p>El caso ideal es que se tenga una accion para cada conjunto de percepciones que pueda tener nuestro agente.</p>

    <h2>Medidas de Rendimiento</h2>

    <dl>
        <dt>Perfeccion</dt>
        <dd>Si el agente conoce todos los resultados reales de sus acciones y puede actuar siempre de la mejor forma posible (omnisciencia). Maximiza el rendimiento real. nota: "En el mundo real, es imposible"</dd>

        <dt>Racionalidad</dt>
        <dd>Para cada secuencia de percepciones posibles, se selecciona la accion que supuestamente maximiza el rendimiento esperado.</dd>
    </dl>

    <h2>Aprendizaje</h2>

    <p>Debido a que un agente no puede ser omnisciente, se debe percibir y aprender para poder maximizar el rendimiento en otras palabras debe tener una memoria, para esto debe explorar en busqueda de recopilacion de informacion, realizando acciones con la intencion de modificar percepciones futuras y memorizando el resultado </p>

    <h2>Autonomia</h2>
    <p>Un agente racional debe poder aprender todo lo que pueda para compensar la falta de conocimiento que posee a priori. Si no posee ningun conocimiento inicial, debe actuar de forma aleatoria.</p>

    <p>A un agente racional hay que dotarlo de un conocimiento inicial y las capacidades de explorar y aprender</p>

    <h2>Entorno de trabajo</h2>

    <p>El entorno de trabajo son problemas del mundo real para los que los agentes racionales son las soluciones. este entorno de trabajo esta compuesto por cuatro componentes que son rendimiento, entorno, actuadores y sensores. estos cuatro componentes forman la palabra <em class="enfasis">REAS</em> que es la inicial de cada palabra.</p>

    <p>El siguiente es un ejemplo de entorno de trabajo de un taxista.</p>
    
    <ul>
        <li><em>Entorno de trabajo</em> taxista</li>
        <li><em>Rendimiento</em> seguro, rapido, legal, confortables</li>
        <li><em>Entorno: </em> carreteras , trafico, peatones, clientes</li>
        <li><em>Actuadores: </em> direccion, acelerador, freno, claxon.</li>
        <li><em>Sensores: </em> Camaras, velocimetro, sensores termicos.</li>
    </ul>

    <h2>Propiedades</h2>

    <p>los entornos de trabajo tienen una serie de propiedades las cuales se pueden adaptar a un algoritmo o a otro</p>

    <dl>
        <dt>Total o Parcialmente observable</dt>
        <dd>Se refiere al nivel que se logra percibir del entorno ejemplo en un juego de ajedrez seria total, mientras en un juego de cartas seria parcial ya que no puede conocer las cartas que tiene el oponente.</dd>
        <dt>Agente Individual o Multiagente</dt>
        <dd>Se refiere a la cantidad de agentes que se involucran en el entorno, estos pueden comunicarse, cooperar o competir entre ellos. esto depende del entorno ejemplo un juego de monopolio todos compiten entre ellos pero pueden negociar y buscar un mayor beneficio.</dd>
        <dt>Determinista o Estocastico</dt>
        <dd>Se trata en que sucede cuando se realiza una determinada accion, cuando no depende de algo esterno y siempre la misma accion genera el mismo resultado se llama <em>determinista</em>, pero si depende de algo mas y no se tiene sertesa por ende se deja en manos de la probabilidad se llama <em>estocastico</em></dd>
        <dt>Episodico o Secuencial</dt>
        <dd>Se trata en que afecta las acciones tomadas con la siguientes acciones si no se genera una afectacion se llama <em>episodico</em> mientras si se genera una afectacion a la siguiente accion se llama <em>secuencial</em></dd>
        <dt>Estatico o Dinamico</dt>
        <dd>Se trata si el entorno cambia mientras el agente procesa la accion a ejecutar. cuando cambia se llama <em>dinamico</em> mientras si se mantiene se le denomina <em>estatico</em></dd>
        <dt>Discreto o Continuo</dt>
        <dd>hace referencia al tipo de dato que maneja el agente, el <em>discreto</em> indica que tienen valores enteros, mientras que los <em>continuos</em> hacen referencia a numeros reales.</dd>
        <dt>Conocido o Desconocido</dt>
        <dd>hace referencia a las leyes que se aplican en el entorno cuando se conoce se llama <em>conocido</em> mientras si no las conocen se llama <em>desconocido</em></dd>
    </dl>
    <h2>Tipos de Agentes</h2>

    <p>Inicialmente para conocer los tipos de agente debemos conocer cual es el agente ideal el cual seria el agente tabla este conoce todas las acciones y las percepciones, teniendolas  almacenadas en una tabla. lo siguiente seria el seudocodigo</p>

    <pre v-highlightjs><code class="plaintext"><em class="clave">funcion</em> <em class="cambiar">AGENTE_TABLA</em>(percepcion) <em class="clave">devuelve</em> accion
    <em class="clave">datos</em>: 
        percepciones    <em class="comentario">#secuencia, inicialmente vacia.</em>
        acciones        <em class="comentario">#tabla indexada por percepciones totalmente especificada.</em>
    percepciones.agregar(percepcion)
    accion=acciones.buscar(percepciones)
    <em class="clave">devolver</em> accion
    </code></pre>

    <pre v-highlightjs><code class="python">
"""
aqui se encuentra la tabla donde van todas las acciones posibles.
aunque como se puede ver es muy dificil tener una tabla con todas las acciones,
ya que se debe validar cualquier conbinacion posible.

por ejemplo que ingresen un codigo antes de una moneda o que ingresen mas de una moneda. 
el problema es exponencial a medida que se permitan mas percepciones,
mas conbinaciones posibles existen.
"""

#-------------------------tabla---------------------------------
ACCIONES = {
    'moneda': 'pedir-codigo',
    'moneda,a1': 'servir-bebida1',
    'moneda,a2': 'servir-bebida2',
    'moneda,a3': 'servir-bebida3',
    'moneda,a1,moneda': 'pedir-codigo',
    'moneda,a2,moneda': 'pedir-codigo',
    'moneda,a3,moneda': 'pedir-codigo',
    'moneda,a1,moneda,a1': 'servir-bebida1',
    'moneda,a1,moneda,a2': 'servir-bebida2',
    'moneda,a1,moneda,a3': 'servir-bebida3',
    'moneda,a2,moneda,a1': 'servir-bebida1',
    'moneda,a2,moneda,a2': 'servir-bebida2',
    'moneda,a2,moneda,a3': 'servir-bebida3',
    'moneda,a3,moneda,a1': 'servir-bebida1',
    'moneda,a3,moneda,a2': 'servir-bebida2',
    'moneda,a3,moneda,a3': 'servir-bebida3',
}

#--------------------------------agente-----------------------------
class AgenteTabla:
    """Agente racional de tipo tabla"""

    def __init__(self, acciones) -> None:
        self.acciones = acciones
        self.percepciones = ""

    def actuar(self, percepcion, accion_basica=''):
        """Actua segun la percepcion, devolviendo accion"""
        if not percepcion:
            return accion_basica

        if len(self.percepciones) != 0:
            self.percepciones += ","

        self.percepciones += percepcion

        if self.percepciones in self.acciones.keys():
            return self.acciones[self.percepciones]
        else:
            self.percepciones = ''
            return accion_basica

#-------------------- uso del agente ----------------------

print("---Agente tabla: Maquina Expendedora --")

expendedora = AgenteTabla(ACCIONES)

percepcion = input("Indicar Percepcion: ")
while percepcion:
    accion = expendedora.actuar(percepcion, 'reiniciarse')
    print(accion)
    percepcion = input("Indicar Percepcion: ")

    </code></pre>    

    <p>teniendo el seudocodigo presente los siguientes son los tipos de agente.</p>

    <h3>Agentes Reactivos</h3>

    <p>son los que actuan segun percepciones sin considerar las consecuencias de sus actos, es decir, no le importa que suceda en el entorno.</p>

    <h4>Agentes Reactivos Simple</h4>
    <p>Solo tiene en cuenta la percepcion actual, no posee una histora de percepciones (actos reflejo) usa reglas condicion-accion (si-entonces) en vez de una tabla</p>

    <pre v-highlightjs><code class="plaintext"><em class="clave">funcion</em> <em class="cambiar">AGENTE_REACTIVO_SIMPLE</em>(percepcion) <em class="clave">devuelve</em> accion
    <em class="clave">datos</em>: reglas    <em class="comentario">#conjunto de reglas si - entonces</em>
    estado = <em class="clave">INTERPRETAR_ENTRADA</em>(percepcion)
    regla=reglas.buscar(estado)
    accion=regla.accion
    <em class="clave">devolver</em> accion
    </code></pre>

    <pre v-highlightjs><code class="python">

#-------------------------reglas---------------------------------
REGLAS = {
    'moneda': 'pedir-codigo',
    'a1': 'servir-bebida1',
    'a2': 'servir-bebida2',
    'a3': 'servir-bebida3',
}

#-------------------------agente---------------------------------
class AgenteReactivoSimple:
    """Agente racional de tipo Reactivo Simple"""

    def __init__(self, reglas) -> None:
        self.reglas = reglas

    def actuar(self, percepcion, accion_basica=''):
        """Actua segun la percepcion, devolviendo accion"""
        if not percepcion:
            return accion_basica

        if percepcion in self.reglas.keys():
            return self.reglas[percepcion]
        else:
            return accion_basica

#-------------------------uso---------------------------------
print("---Agente Reactivo Simple: Maquina Expendedora --")

expendedora = AgenteReactivoSimple(REGLAS)

percepcion = input("Indicar Percepcion: ")
while percepcion:
    accion = expendedora.actuar(percepcion, 'reiniciarse')
    print(accion)
    percepcion = input("Indicar Percepcion: ")

    </code></pre> 

    <h4>Agentes Basado en Modelos</h4>

    <p>almacena informacion de la parte del mundo que ha visitado (memoria). mantiene un estado interno y un modelo del mundo segun secuencia de percepciones</p>

    <pre v-highlightjs><code class="plaintext"><em class="clave">funcion</em> <em class="cambiar">AGENTE_BASADO_MODELOS</em>(percepcion) <em class="clave">devuelve</em> accion
    <em class="clave">datos</em>:
        estado    <em class="comentario">#Descripcion actual del mundo.</em>
        modelo    <em class="comentario">#Dado estado y accion, devuelve nuevo estado.</em>
        reglas    <em class="comentario">#Conjunto de reglas si - entonces</em>
        accion    <em class="comentario">#Ultima accion realizara (ninguna inicialmente)</em>
    estado = <em class="clave">ACTUALIZAR_ESTADO</em>(estado, accion, percepcion, modelo)
    regla=reglas.buscar(estado)
    accion=regla.accion
    <em class="clave">devolver</em> accion
    </code></pre>

    <pre v-highlightjs><code class="python">
#Estados: sin-moneda, con-moneda,a1-servida,a2-servida,a3-servida
#Acciones: pedir-moneda, pedir-codigo,esperar.
#Percepciones: moneda,a1,a2,a3,servida.



REGLAS = {
    'sin-moneda':'pedir-moneda',
    'con-moneda':'pedir-codigo',
    'a1-servida':'esperar',
    'a2-servida':'esperar',
    'a3-servida':'esperar'
}
#el modelo hace el cambio de estado pasando por un estado inicial, realizando la accion de ese estado 
#y esperando a que la percepcion esperada para ese estado nos permite cambiar al siguiente estado.
MODELO ={
    ('sin-moneda','pedir-moneda','moneda'):'con-moneda',
    ('con-moneda','pedir-codigo','a1'):'a1-servida',
    ('con-moneda','pedir-codigo','a2'):'a2-servida',
    ('con-moneda','pedir-codigo','a3'):'a3-servida',
    ('a1-servida','esperar','servida'):'sin-moneda',
    ('a2-servida','esperar','servida'):'sin-moneda',
    ('a3-servida','esperar','servida'):'sin-moneda',
}
class AgenteReactivoBasadoModelo:
    """Agente racional de tipo Reactivo basado en Modelo."""

    def __init__(self, modelo, reglas,estado_inicial='',accion_inicial='') -> None:
        self.modelo = modelo
        self.reglas = reglas
        self.estado_inicial = estado_inicial
        self.accion_inicial = accion_inicial
        self.accion=None
        self.estado=self.estado_inicial
        self.ult_accion=self.accion_inicial
        

    def actuar(self, percepcion):
        """Actua segun la percepcion, devolviendo accion"""
        if not percepcion:
            return self.accion_inicial

        clave=(self.estado,self.ult_accion,percepcion)
        if clave not in self.modelo.keys():
            self.estado=self.estado_inicial
            self.accion=None
            self.ult_accion=self.accion_inicial
            return self.accion_inicial 
        else:
            self.estado=self.modelo[clave]
            if self.estado not in self.reglas.keys():
                self.accion=None
                self.estado=self.estado_inicial
                self.ult_accion=self.accion_inicial
                return self.accion_inicial
            else:
                accion=self.reglas[self.estado]
                self.ult_accion=accion
                return accion


print("---Agente Reactivo Basado en Modelos: Maquina Expendedora --")

expendedora = AgenteReactivoBasadoModelo(MODELO,REGLAS,'sin-moneda','pedir-moneda')

percepcion = input("Indicar Percepcion: ")
while percepcion:
    accion = expendedora.actuar(percepcion)
    print(accion)
    percepcion = input("Indicar Percepcion: ")

</code></pre>

    <h3>Agentes que planifican</h3>

    <p>Son los agentes que piensa en las consecuencias de sus actos (realiza simulaciones), es decir, segun como podria ser el entorno tras sus acciones</p>

    <h4>Agentes basados en Objetivos</h4>

    <p>Aparte del estado interno y del modelo del mundo, el agente escoge la accion que le permita alcanzar un objetivo</p>

    <h4>Agentes basados en Utilidad</h4>

    <p>Cuando existen varias formas de lograr un objetivo, o cuando existen varios objetivos, se comparan en funcion de su utilidad. El agente escogera la accion mas util</p>

    <p>Si existe incertidumbre, se habla de utilidad esperada, que es la suma ponderada de las utilidades de cada resultado segun su probabilidad:</p>

    <math-jax latex="U=u_{1}p_{1}+u_{2}p_{2}+\cdots +u_{n}p_{n}" />

    <p>donde u es igual a la utilidad por p que es la probabilidad que ocurra mas el valor de las acciones subsiguientes</p>

    <h3>Agentes que aprenden</h3>

    <p>Aprende a partir de la secuencia de percepciones y de las consecuencias de las acciones realizadas se compone de 4 elementos:</p>
    <dl>
        <dt>Elemento de Actuacion</dt>
        <dd>un agente de los anteriores</dd>

        <dt>Elemento de Aprendizaje</dt>
        <dd>mejora al agente</dd>

        <dt>Critica</dt>
        <dd>recompensa o penalizacion</dd>

        <dt>Generador de problemas</dt>
        <dd>Incita a la exploracion</dd>
    </dl>

    <h2>Representacion del Entorno</h2>

    <p>Estructura de datos para representar el entorno en el que habita el agente (estado, modelo, acciones, etc.) se pueden agrupar en los siguientes grupos</p>

    <ul>
        <li><em>Atomico:</em> sin estructura interna (dato simple). y se suele usar en busquedas, juegos, modelos ocultos de markov, procesos de decision de markov</li>
        <li><em>Factorizado:</em> vector con pares atributo-valor. se suele ver en satisfaccion de restricciones, logica proposicional, planificacion, redes bayesianas</li>
        <li><em>Estructurado:</em> objetos con atributos y relaciones con otros objetos (OOP). se usa en BD relacionales, logica del 1<sup>er</sup> orden razonamiento, aprendizaje, lenguaje natural.</li>
    </ul>

    <div class="importante">Cuanto mas expresiva es una representacion, menos espacio ocupa pero mas complejo es el razonamiento y el aprendizaje</div>


  </div>
</template>