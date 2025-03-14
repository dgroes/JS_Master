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
    public function up()
    {
        Schema::table('sales', function (Blueprint $table) {
            // Eliminar la columna product_id
            $table->dropColumn('product_id');

            // Cambiar el tipo de dato de total_amount a integer
            $table->integer('total_amount')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('sales', function (Blueprint $table) {
            // Revertir los cambios en caso de rollback
            $table->foreignId('product_id')->constrained(); // Agregar de nuevo product_id
            $table->decimal('total_amount', 10, 2)->change(); // Cambiar de nuevo a decimal
        });
    }
};
