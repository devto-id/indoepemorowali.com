<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailProduct extends Model
{
    protected $table = 'detail_products';

    protected $fillable = [
        'category_product_id',
        'nama_produk', // Tambahkan 'nama_produk' ke dalam $fillable
        'qty_barang',
        'harga',
    ];

    public function category()
    {
        return $this->belongsTo(CategoryProduct::class, 'category_product_id');
    }
}
