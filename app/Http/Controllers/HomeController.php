<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categoryProduct = CategoryProduct::with('detailProduct')->get();

        return Inertia::render('Home', [
            'categoryProduct' => $categoryProduct,
        ]);
    }
}
