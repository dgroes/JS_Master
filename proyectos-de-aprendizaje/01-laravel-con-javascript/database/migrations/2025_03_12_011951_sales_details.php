<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sale_id')->constrained()->onDelete('cascade'); // Relación con la venta
            $table->foreignId('product_id')->constrained()->onDelete('cascade'); // Relación con el producto
            $table->integer('quantity'); // Cantidad comprada del producto
            $table->decimal('unit_price', 10, 2); // Precio unitario en el momento de la compra
            $table->decimal('subtotal', 10, 2); // Subtotal (cantidad * precio unitario)
            $table->text('response_json')->nullable(); // C06: ResponseJson  Respuesta completa del proveedor de pagos en formato JSON, permite nulos
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
