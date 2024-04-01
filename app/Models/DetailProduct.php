<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailProduct extends Model
{
    protected $table = 'detail_products';

    protected $fillable = [
        'category_product_id',
        'nama_produk',
        'weight_unit_id',
        'weight',
        'qty_barang',
        'harga',
    ];

    public function category()
    {
        return $this->belongsTo(CategoryProduct::class, 'category_product_id');
    }

    public function unit()
    {
        return $this->belongsTo(WeightUnit::class, 'weight_unit_id');
    }
}
