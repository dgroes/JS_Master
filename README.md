# JS_Master

Repositorio de JavaScript, el cual servirá para aprender el lenguaje en profundidad.

## Que es JavaScript
JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). Lee más en acerca de JavaScript,

## API
Cuando se habla de JS es imporante también entender las APIs. Una API, que significa Interfaz de Programación de Aplicaciones (Application Programming Interface en inglés), es un conjunto de reglas y herramientas que permiten que diferentes aplicaciones se comuniquen entre sí. En términos más simples, una API define cómo interactuar con un sistema de software, proporcionando una interfaz estandarizada que permite a los desarrolladores acceder y utilizar las funcionalidades de un servicio o aplicación sin necesidad de conocer los detalles internos de su implementación.

* APIs de biblioteca o librería: Son conjuntos de funciones y métodos que un programador puede utilizar para realizar tareas específicas en su código. Estas funciones se proporcionan como parte de una biblioteca de software y se invocan según sea necesario.

* APIs basadas en web: Son interfaces que permiten la comunicación entre diferentes aplicaciones a través de Internet. Las APIs web suelen estar basadas en protocolos estándar como HTTP y utilizan formatos de intercambio de datos como JSON o XML para transmitir información entre los sistemas.

* APIs de sistema operativo: Son interfaces que permiten a las aplicaciones acceder a funciones y servicios del sistema operativo subyacente, como la gestión de archivos, la red, los dispositivos de hardware, etc.

</ul>
<p> Las APIs son fundamentales en el desarrollo de software moderno, ya que permiten la integración de diferentes sistemas y la reutilización de funcionalidades existentes sin necesidad de volver a implementarlas desde cero. Además, las APIs facilitan la colaboración entre desarrolladores y la creación de ecosistemas de aplicaciones interconectadas.</p>

ideas para proyectos con apis: api de twitter, api de google maps

## DOM
En el contexto de HTML, CSS y JavaScript, DOM significa "Document Object Model" (Modelo de Objetos del Documento). El DOM es una representación estructurada y jerárquica de un documento HTML que proporciona una interfaz programática para interactuar con los elementos del documento, como párrafos, encabezados, imágenes, formularios, etc.

* Estructura de árbol: El DOM organiza los elementos HTML de un documento en una estructura de árbol, donde cada elemento se representa como un nodo en el árbol. Los nodos pueden ser elementos HTML, atributos, texto, comentarios, etc

* Interacción programática: El DOM proporciona una interfaz para que los scripts (como JavaScript) accedan, manipulen y actualicen los elementos y contenido de un documento HTML dinámicamente. Esto significa que los desarrolladores pueden escribir código para agregar, eliminar, modificar y mover elementos en la página web.

* Representación neutra del documento: A través del DOM, el contenido del documento HTML se convierte en una estructura de objetos que puede ser manipulada independientemente de cómo se haya generado originalmente el documento. Esto significa que el DOM permite separar la estructura del contenido de su presentación y comportamiento, lo que facilita la manipulación dinámica del contenido.

* Acceso a través de JavaScript: Los navegadores web proporcionan una implementación del DOM que está disponible para ser utilizada por JavaScript. Los desarrolladores pueden acceder al DOM utilizando métodos y propiedades proporcionados por el navegador para interactuar con los elementos HTML y aplicar estilos CSS dinámicamente, así como para responder a eventos del usuario.

En resumen, el DOM es una representación programática del contenido y la estructura de un documento HTML que permite la interacción dinámica con los elementos de la página web utilizando JavaScript u otros lenguajes de programación. Es una parte fundamental del desarrollo web moderno y es utilizado extensamente para crear páginas web dinámicas e interactivas-

<hr>
<h3>Conceptos</h3>
<h4>Refactorizar</h4>
<p>Refactorizar en JavaScript (y en programación en general) se refiere al proceso de reestructurar y mejorar el código existente sin cambiar su comportamiento externo. El objetivo de la refactorización es mejorar la legibilidad, mantenibilidad y eficiencia del código, sin alterar su funcionalidad observable desde fuera del programa. Lo importante de refacorizar es cambiar la estructura interna sin alterar el comportamieto externo</p>
<br>

<h4>Declaraciones</h4>
<ul>
 <li>Las declaraciones son instrucciones que definen o declaran elementos en el código, como variables, funciones o clases.</li>
 <li>Las declaraciones se utilizan para establecer la estructura y el comportamiento de los elementos en un programa JavaScript.</li>
 <li>Ejemplos de declaraciones incluyen la declaración de variables utilizando var, let o const, la declaración de funciones utilizando function, y la declaración de clases utilizando class.</li>
 <li> Las declaraciones son evaluadas durante la etapa de compilación o interpretación del código y se pueden hoistear (elevar) en el contexto de ejecución.</li>
</ul>

<h4>Expresiones</h4>
<ul>
 <li>Las expresiones son fragmentos de código que producen un valor. Pueden ser combinaciones de variables, operadores y valores literales que se evalúan para producir un resultado.</li>
 <li>Las expresiones pueden incluir llamadas a funciones, operaciones matemáticas, asignaciones de valores, creación de objetos y más.</li>
 <li>Las expresiones pueden aparecer en diferentes contextos en JavaScript, como asignaciones de variables, argumentos de funciones, condiciones de sentencias if, entre otros.</li>
 <li>A diferencia de las declaraciones, las expresiones no definen estructuras o comportamientos en el código, sino que producen valores que pueden ser utilizados en otras partes del programa.</li>
</ul>
