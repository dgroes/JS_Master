<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    /* C03: Seeders */
    public function run(): void
    {
        // Creación de perfil de adminstrador
        DB::table('users')->insert([
            'name' => "Adminstrador",
            'email' => "admin@admin.com",
            'password' => Hash::make('password')
        ]);

        DB::table('users')->insert([
            'name' => "Diego Pasten",
            'email' => "diego@gmail.com",
            'password' => Hash::make('password')
        ]);
    }
}
