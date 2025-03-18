@extends('layouts.pro') {{-- C01: Extends --}}

@section('title', 'Lista de Productos')

@section('content') {{-- C02: Yield con Section --}}
    <h2>Lista de Productos</h2>
    <ul>
        @if (count($products) > 0)
            @foreach ($products as $product)
                <li>
                    <a href="{{ route('products.show', $product->id) }}">{{ $product->name }}</a> - ${{ $product->price }}
                </li>
                {{-- C06: asset sin public --}}
                <li>
                    <img src="{{ asset('images/' . $product->image) }}" alt="{{ $product->name }}" style="width: 100px;">
                </li>

            @endforeach

        @else
            <article>No hay productos de momento!</article>

        @endif

    </ul>
@endsection
