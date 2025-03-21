<form id="editForm" method="POST" action="{{ route('products.update', $product->id) }}">
    @csrf
    @method('PUT')
    <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" value="{{ $product->name }}">
    </div>
    <div class="form-group">
        <label for="description">Descripción</label>
        <textarea id="description" name="description">{{ $product->description }}</textarea>
    </div>
    <!-- Más campos según sea necesario -->
    <button type="submit">Guardar cambios</button>
</form>