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
        //Moficación de la tabla roles
        Schema::table('roles', function (Blueprint $table) {
            // Agregar la columna name después de id, solo se aceptarán valores 'admin' y 'user'
            $table->enum('name', ['admin', 'user'])->after('id');
        });

        //Moficación de la tabla users
        Schema::table('users', function (Blueprint $table) {
            //Agregar la columnas rol_id despues de id, y por default sera el rol de usuario
            $table->foreignId('role_id')->after('id')->default(2);
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
