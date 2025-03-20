@extends('layouts.pro') {{-- C01: Extends --}}

@section('title', 'Lista de Productos')

@section('content') {{-- C02: Yield con Section --}}
    <h2>Lista de Productos
    </h2>
    <table  class="striped">
        <thead data-theme="light">
            <tr>
                <th scope="col">Producto </th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Imagen</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            @if (count($products) > 0)
                @foreach ($products as $product)
                    <tr>
                        <td><a href="{{ route('products.show', $product->id) }}">{{ $product->name }}</a></td>
                        <td>{{ $product->description }}</td>
                        <td>${{ $product->price }}</td>
                        <td>{{ $product->stock }}</td>
                        <td>
                            <img src="{{ asset('images/' . $product->image) }}" alt="{{ $product->name }}"
                                style="width: 100px;">
                        </td>
                        <td>
                            <a href="{{ route('products.edit', $product->id) }}">✏️</a> |
                            <form action="{{ route('products.destroy', $product->id) }}" method="POST"
                                style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" style="background:none; border:none; cursor:pointer;">🗑️</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            @else
                <tr>
                    <td colspan="6">No hay productos de momento!</td>
                </tr>
            @endif
        </tbody>
    </table>

@endsection
