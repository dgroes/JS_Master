<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    /* C04: Cambio de migraciones */
    public function up(): void
    {
        //Modificación de la tabla products
        Schema::table('sales', function (Blueprint $table) {

            // Cambiar el tipo de dato de price a integer
            $table->integer('price')->change();
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
