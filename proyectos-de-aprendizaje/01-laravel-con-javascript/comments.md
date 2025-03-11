# Orden de creación del proyecto

#### Instalación de Laravel versión 11
`composer create-project laravel/laravel:^11.0 01-laravel-con-javascript`

#### Intalación de Breeze
`composer require laravel/breeze --dev` y luego `php artisan breeze:install`


#### Creación del modelo junto con la miración del Product
`php artisan make:model Product -m`


#### Creacion del controlador de Prodycto:
`php artisan make:controller ProductController --resource`

#### Defininifr las rutas
Definicioón de las rutas para Product en routes/web.php

#### Creación y definicion de las Vistas
Se crean las vistas necesarias dentro de `resources/views/products/` y luego será importante definirlas dentro de nuestro controlador para que las rutas puedan aceder a las vistas.

Dentro del controller de prodcuto definimos las rutas las cuales retornarán una vista, por ejemplo la function de index deberá retornar la view de index de productos.


#### Creación de plantilla para las vistas de Productos
Se crea un fichero en `resources/views/layouts/`, `pro.blade.php` será la encargada de darle formato y estilo a las distintas vistas realacionadas a los productos. El fichero `app.blade.php` seguirá en uso para el dashboard del admin.




# Commentarios extensos
## C00: Layaouts como Herencia de Plantillas
Los layouts pueden ser creados a través de "herencia de plantillas". En el caso de Productos, se creó el fichero `resources\views\layouts\pro.blade.php` el cual será la plantilla padre que definirá la escructura y el estilo de las vistas de productos.

## C01: Extends
Al definir una vsita hija, se puede utilizar `@extends` de blade para especificar que diseño debería "heredar" la vista hija. Las vistas que extienden un diseño Blade pueden inyectar contenido en las secciones de diseño utilizando directivas `@section`

## C02: Yield con Section
@yield se utiliza generalmente con @section. @yield se **utiliza para definir una sección de contenido en un layout** que puede ser reemplazada o rellenad por contenido especifico en las vistas que hereden ese layout. @yield actúa como un marcador de posición donde otras vistas pueden insertar contenido específico.

### Un ejemplo de @yield:
Dentro del fichero: `resources\views\layouts\pro.blade.php` dentro de las etiquetas `<main>` hay un `@yield('content')`. En este caso `@yield('content')` es un espacio reservado donde se insertarán los valores de cada vista que herede este layout.

Para completar estas secciones se puede utilizar `@section`, el cual indicará que ese **@section** definirá lo que hirá entro del **@yield** del layout.
Si vemos el fihcero: `resources\views\products\index.blade.php` podremos ver
- Primero: Extiende al layout padre (pro.blade.php), si estar herencia no estuviera, no sabría, además de perder los estilos, no sabría a donde introducir todo lo que está dentro de **@section**. 
Entonces dentro de los parametros se **@section** le especificamos cual **@yield** utilizaremos. en este caso definimos `@yield('content')`, por lo que nuestro @sectión debería hacer referencia a ese mismo "content", es decir: `@section('content')`.

Entonces:
- @yield('nombre_de_la_sección'): Define un espacio que puede ser llenado en una vista hija.
- @section('nombre_de_la_sección'): Completa ese espacio con contenido en una vista hija.

