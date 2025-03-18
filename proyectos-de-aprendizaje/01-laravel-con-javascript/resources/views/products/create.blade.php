@extends('layouts.pro') {{-- C01: Extends --}}

@section('title', 'Crear producto')

@section('content')
    <h1>Creación de producto</h1>

    <section>
        <form method="POST" action="{{ route('products.store') }}" enctype="multipart/form-data">
            @csrf
            <fieldset>

                {{-- Nombre del producto --}}
                <label>
                    Nombre del producto
                    <input type="text" name="name" id="name" placeholder="Producto" />
                </label>

                {{-- Descripción del producto --}}
                <label>
                    Descripción del producto
                    <input type="text" name="description" id="description" placeholder="Descripción" />
                </label>

                {{-- Precio del producto --}}
                <label>Precio del producto
                    <input type="number" name="price" id="price" placeholder="Precio" />
                </label>

                {{-- Stock de producto --}}
                <label>Stock del producto
                    <input type="number" name="stock" id="stock" placeholder="Stock" />
                </label>

                {{-- Imagen del producto --}}
                <label>Imagen del producto
                    <input type="file" name="image" id="image" accept="image/*" />
                </label>

            </fieldset>

            <input type="submit" value="Crear Producto" />
        </form>
    </section>

@endsection
