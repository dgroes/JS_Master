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
        //Moficación de la tabla sales_details
        Schema::table('sales_details', function (Blueprint $table) {

            // Cambiar el tipo de dato de unit_price a integer
            $table->integer('unit_price')->change();

            //Cambiar el tipo de dato de subtotal a integer
            $table->integer('subtotal')->change();
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
