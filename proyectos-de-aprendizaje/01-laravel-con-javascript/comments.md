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
