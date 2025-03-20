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

#### Creación de Seed
Antes de seguir con la creación de las vistás, crearé seeds para tener usuarios por defecto ya registrados.

#### Creación de plantilla para las vistas de Productos
Se crea un fichero en `resources/views/layouts/`, `pro.blade.php` será la encargada de darle formato y estilo a las distintas vistas realacionadas a los productos. El fichero `app.blade.php` seguirá en uso para el dashboard del admin.

### Concretar las migraciones y BD
Actualmente la tabla sales no contempla agregar varios productos distintos en una misma venta. Al tener `producto_id` en la tabla **sales**, se asume que cada venta solo puede tener un solo producto. Es por eso que se crea la tabla `sales_details`.

Para permitir que una venta tenga varios productos distintos, la relación entre esas dos tablas tiene que ser de uno a muchos (una venta puede tenera varios productos) para lograr esto se eliminará el atrubuto `product_id` de `sales` y manejar los productos en `sales_detail`.


### Establecer las relaciones entre modelos
Importante luego de las migraciones es establecer las relaciones entre los modelos y establecer los valores que adminitrá el modelo, esto último con `$fillable`se puede establecer los valores que haceptará el modelo en su llenado de datos.


### Introducir JS en el código
En Laravel con Vite, lo ideal es organizar JS en ficheros dentro de `resources/js/app.js`. Este es el fichero padre que hace uso y llamado del resto de nuestros comonentes JS que deseamos crear, por lo que dentro de este fichero importaremos nuestros componentes de JS, manteniendo así un orden

Para importar un componente por ejemplo nuestro coponente que cambia el tema de nuestro proyecto, sería llamando a dicho fichero de esta forma: `import './theme';`. De esta forma funcionaría y `app.js` se encargará de llamar nuestros componentes.

Tambien será importante hacer llamado de nuestros componentes JS en nuetro layout de productos por ejemplo. Entro de `layouts/pro.blade` en nuestra línea de `@vite` agreamos además del CSS nuestro JS de esta manera: `@vite(['resources/css/app.css', 'resources/js/app.js'])`.

### Hero Icon
Para agregarle algo más de diseño en algunas partes del proyecto, se hace uso de HeroIcons para una personalización más amplia,a demás de practicar el uso de iconos como componentes Laravel.




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

## C03: Seeders
Con los seeders está la posibilidad de llenar la BD con datos utilizando clases de seed. Para generar un seeder, se ejecuta esta comando: `make:seeder`. En este caso se creó un seeder para usuario:
`php artisan make:seeder UserSeeder`.

Luego para ejecutar los seeder con artisan tiene que ser `db:seed`, por defecto este comando ejecuta la clase `Database\Seeders\DatabaseSeeder`, que a su ves puede invocar otra clases de siembra(otra clases de seeders). Pero si solo deseas ejecutar una clase en especifico será con el comando: `php artisan db:seed --class=UserSeeder`

## C04: Cambio de migraciones
Para poder modifiar migraciones ya realizadas, en el caso de la tabla `sales` se creó una nueva migración con el comando: `php artisan make:migration modify_sales_table`, dentro de la migración se hace uso de **dropColumn** eliminado la columna señalada, con el método **change** se puede mofificar el tipo de dato de una columna existente, sin emargo, esto depende del soporte del manejarod de BD. en este caso (uso de SQLite) tiene liminaticónes, aun así dropColumn y change funcionaron, pero se debe tener en cuenta que en algunos casos puede probocar errores. Tabmien se puede hacer uso de un Rollback


## C05: Relacion con pivot
El pivot en `withPivot('quantity', 'price')` se usa en relaciones muchos a muchos (**belongsToMany**) para agrega datos adicionales a la tabla intermedia.

En este caso la relación entre **Product** y **Sale** se maneja mediante la tabla intermadia **sales_detailes**. La función `withPivot('quantity', 'price')` indica que además de los IDs (product_id, sale_id) queremos acceder a los campos adicionales **quantity** y **price** dentro de esta relación.

#### El uso del pivot 
Cuando se accese a los productos entro de una venta, se puede obtener información como en el siguiente 
ejemplo:
{

    $sale = Sale::find(1);
    foreach ($sale->products as $product) {
        Cantidad: {$product->pivot->quantity}, Precio: {$product->pivot->price
    }";
    }
}

El uso de pivtot se usa en relaciones de belongsToMany donde hay na tabla intermedia que guarda la información extra sobre la relación. En este caso 


## C06: asset sin public
Para poder accerder a la ruta de `public/images` con Laravel no es necesario incluir la ruta `public/`. Cuando utilizamos `asset('images/' . $product->image)` esto generará una URL correcta para acceder a la imagen almacenada en `public/images/`, sin la necesidad de especificar completamente la ruta.


## C07: Carga de CSS personalizado con Vite
En el proyecto se hace uso de Pico CSS, pero para poder agregar CSS personalizado se deberá hacer de la siguiente forma

Entro de `resources/css` está el fichero `app.css`, dentro del ficherop podrémos agregar todos los estilos personalizados para poder utilizar en las vistas. Para que esto funcione es nesesario en este caso del proyecto agregarlo dentro de nuestro layout para que por defecto se llame y se haga uso de ese fichero CSS. Entonces siguiendo con el ejemplo del proyecto, dentro del fichero de `resources\views\layouts\pro.blade.php` se agrega dentro de la etiqueta `<head>` la ruta para llamar al fihcero CSS.

Además, para que esto funcione es importante hacer que corra **Vite** de la siguiente forma:
`npm run dev`


Con esto:
- **Vite** carga `resources/css/app.css` y compila los estilos correctamente.
- **Pico CSS** se carga desde un CDN para mantener la estructura base.
- **Blade** `@yield('content')` permite que cada vista Blade inserte su contenido dentro del layout.

### Importante
dentod del fichero `resources/css/app.css` por defecto viene escrito: 
- @tailwind base;
- @tailwind components;
- @tailwind utilities; 

Esto hace que que Tailwind sobreescriba los estilos de Pico CSS porque su base redefine estilos globales como ecabezados, enlaces, márgenes, etc. Es por esto que al utilizar el fihcero e importarlo en el layout varios estilos propios de Pico CSS desaparezcan. 

Una forma de resolver esto es quitar los estilos de Tailwind, pero estoy haría que las vistas en el proyecto que no utilicen Pico CSS como por ejemplo el register de Breeze los estilos no funcionen.

Para solucionar este problema y evitar que Tailwind sobrescriba estilos, dentro del fichero `tailwind.config.js` con esto:

`module.exports = {
  corePlugins: {
    preflight: false, // Evita que Tailwind sobrescriba los estilos base
  },
}
`

Esto desactiva la normlaización de estilos de Tailwind (preflight), Así, Tailwind solo aporta utilidades y no toca los estilos base de Pico CSS.
Después de hacer este cambio, recuerda recompilar Tailwind para que tome la nueva configuración:
`npm run build`

## C08: JS con Laravel
En Laravel con Vite, lo ideal es organizar JS en ficheros dentro de `resources/js/app.js`. Este es el fichero padre que hace uso y llamado del resto de nuestros comonentes JS que deseamos crear, por lo que dentro de este fichero importaremos nuestros componentes de JS, manteniendo así un orden

Para importar un componente por ejemplo nuestro coponente que cambia el tema de nuestro proyecto, sería llamando a dicho fichero de esta forma: `import './theme';`. De esta forma funcionaría y `app.js` se encargará de llamar nuestros componentes.

Tambien será importante hacer llamado de nuestros componentes JS en nuetro layout de productos por ejemplo. Entro de `layouts/pro.blade` en nuestra línea de `@vite` agreamos además del CSS nuestro JS de esta manera: `@vite(['resources/css/app.css', 'resources/js/app.js'])`.

## C09: Icono como Componente
Los iconos de **Hero Icons** sin etiquetas demasiado largas para mi gusto, es por eso que se decidió de trabajarlas como componentes. Para ello por ejemplo se agregó un icon de un corazón, se introduce el `svg` completo entro de un fuchero creado dentro de `resources\views\components\icons`, por lo que la ruta de nuestro icono de corazón sería: `resources\views\components\icons\heart.blade.php`.

No solo pegar el `svg` basta para su implementación. Cuando se crea un componente de **Blade**, puedo permitir que se pasen atributos **HTML** adicionales usando la directiva `{{ $attributes }}`. Esto permitirá añadir **id**, **class**, **data-**, o cualquier otro atrivuto cuando se utilice el componente.

Esto además ayuda a la manipulación del componente con JS, para el icono de modod oscuro y claro se hace más practico el uso de `{{ $attributes }}`. 

