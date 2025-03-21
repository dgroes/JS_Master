@extends('layouts.pro') {{-- C01: Extends --}}

@section('title', 'Lista de Productos')

@section('content') {{-- C02: Yield con Section --}}
    <h2>Lista de Productos
    </h2>
    <table>
        <thead>
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
                        <td>{{ Str::limit($product->description, 80) }}</td>
                        <td>${{ $product->price }}</td>
                        <td>{{ $product->stock }}</td>
                        <td>
                            <img src="{{ asset('images/' . $product->image) }}" alt="{{ $product->name }}"
                                style="width: 100px;">
                        </td>
                        <td>
                            <a href="#" class="btn-edit" data-id="{{ $product->id }}"> <x-icons.edit/> </a>
                            <form action="{{ route('products.destroy', $product->id) }}" method="POST"
                                style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" style="background:none; border:none; cursor:pointer;"> <x-icons.trash/> </button>
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

    <!-- Modal -->
<div id="editModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div id="modal-body">
            <!-- Aquí se cargará el contenido de la vista de edición dinámicamente -->
        </div>
    </div>
</div>



<dialog>
    <article>
      <header>
        <button aria-label="Close" rel="prev"></button>
        <p>
          <strong>🗓️ Thank You for Registering!</strong>
        </p>
      </header>
      <p>
        We're excited to have you join us for our
        upcoming event. Please arrive at the museum
        on time to check in and get started.
      </p>
      <ul>
        <li>Date: Saturday, April 15</li>
        <li>Time: 10:00am - 12:00pm</li>
      </ul>
    </article>
  </dialog>

@endsection
