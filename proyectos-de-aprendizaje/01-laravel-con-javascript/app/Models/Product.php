<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //Rellenado de campos permitidos
    protected $fillable = ['name', 'description', 'price', 'stock', 'image'];


    /* C05: Relacion con pivot */
    // Un producto puede estar en muchas ventas
    public function sales()
    {
        return $this->belongsToMany(Sale::class, 'sales_details')
            ->withPivot('quantity', 'price');
    }
}
