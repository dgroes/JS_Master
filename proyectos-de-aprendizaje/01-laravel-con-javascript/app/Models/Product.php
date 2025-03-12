<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //Rellenado de campos permitidos
    protected $fillable = ['name', 'description', 'price', 'stock', 'image'];


}
