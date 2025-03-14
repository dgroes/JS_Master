<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = ['user_id', 'total_amount', 'status'];

    // Relación con SaleDetail (una venta tiene muchos detalles)
    public function details()
    {
        return $this->hasMany(SaleDetail::class);
    }

    // Relación con Product a través de SaleDetail (una venta tiene muchos productos)
    public function products()
    {
        return $this->belongsToMany(Product::class, 'sales_details')
                    ->withPivot('quantity', 'price'); // Campos adicionales en la tabla intermedia
    }
}

