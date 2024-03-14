<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use App\Models\Photo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categoryProducts = CategoryProduct::with('detailProducts')->get();
        $testimoni = Photo::all();
        return Inertia::render('Home', [
            'categoryProducts' => $categoryProducts,
            'testimoni' => $testimoni,
        ]);
    }
}

