<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use App\Models\Photo;
use App\Models\ContactForm;
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
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => ["required"],
            "email" => ["required"],
            "phone" => ["required"],
            "message" => ["required"],
        ]);

        ContactForm::create($data);
    }
}

