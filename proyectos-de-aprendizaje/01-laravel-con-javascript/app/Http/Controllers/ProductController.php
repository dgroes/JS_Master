<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(); // Obtener todos los productos
        return view('products.index', compact('products'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('products.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //Validaciones
        // try {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
        /*     dd($request->all()); // Esto solo se ejecutará si la validación pasa
        } catch (\Illuminate\Validation\ValidationException $e) {
            dd($e->errors()); // Muestra los errores si la validación falla
        } */


        // Inicializamos un array con los datos del producto
        $productData = $request->except('_token'); // Obtenemos todos los datos menos el token CSRF

        // Manejo de la imagen (si es que se sube)
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension(); // Generamos un nombre único para la imagen
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name); // Mueve la imagen a la carpeta 'public/images'

            // Ahora agregamos el nombre de la imagen al array de datos
            $productData['image'] = $name;
        }

        // Guardar el producto en la base de datos
        Product::create($productData); // Usamos el array con todos los datos, incluyendo la imagen

        return redirect()->route('products.index')->with('success', 'Producto agregado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);
        return view('products.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
