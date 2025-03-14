<!doctype html> {{-- C00: Layaouts como Herencia de Plantillas --}}
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">

    <title>@yield('title', 'Mi Aplicación')</title> {{-- C02: Yield con Section --}}
</head>

<body>

    <main class="container-fluid">

        {{-- Header --}}
        <nav>
            <ul>
                <li><strong>Mi Tiendap</strong></li>
            </ul>
            <ul>
                <li><a href="{{ route('products.index') }}">Productos</a></li>
                <li><a href="{{ route('products.create') }}">Nuevo Producto</a></li>
            </ul>
        </nav>

        {{-- Contenido principal de productos --}}
        @yield('content') {{-- Aquí se insertará el contenido de cada vista --}}

    </main>

    <footer class="container">
        <p>&copy; {{ date('Y') }} Mi Tienda. Todos los derechos reservados.</p>
    </footer>

</body>

</html>
