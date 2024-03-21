<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryProduct extends Model
{
    protected $table = 'category_products';

    protected $fillable = [
        'nama_kategori',
    ];

    public function detailProducts()
    {
        return $this->hasMany(DetailProduct::class, 'category_product_id');
    }
}
