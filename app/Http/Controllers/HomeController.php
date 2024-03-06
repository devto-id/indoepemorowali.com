<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categoryProducts = CategoryProduct::with('detailProducts')->get();
        return Inertia::render('Home', [
            'categoryProducts' => $categoryProducts,
        ]);
    }
}
