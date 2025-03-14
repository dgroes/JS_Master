<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SaleDetail extends Model
{
    protected $fillable = ['sale_id', 'product_id', 'quantity', 'price'];

    // Un detalle de venta pertenece a una venta
    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    // Un detalle de venta pertenece a un producto
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
