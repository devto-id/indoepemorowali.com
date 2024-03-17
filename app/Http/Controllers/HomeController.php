<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use App\Models\Photo;
use App\Models\ContactForm;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $users = User::all();
        $categoryProducts = CategoryProduct::with('detailProducts')->get();
        $testimoni = Photo::all();
        return Inertia::render('Home', [
            'categoryProducts' => $categoryProducts,
            'testimoni' => $testimoni,
            'users' => $users,
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

