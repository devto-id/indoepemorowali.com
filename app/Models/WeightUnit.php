<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeightUnit extends Model
{
    protected $table = 'weight_units';

    protected $fillable = [
        'unit',
    ];

    public function detailProducts()
    {
        return $this->hasMany(DetailProduct::class, 'weight_unit_id');
    }
}
