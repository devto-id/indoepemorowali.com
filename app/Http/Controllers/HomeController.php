<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\DetailProduct;
use App\Models\WeightUnit;
use App\Models\Photo;
use App\Models\Partner;
use App\Models\ContactForm;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $email = 'ptindoepemorowali@gmail.com';

        $user = User::where('email', $email)->first();
        $whatsappContact = "https://api.whatsapp.com/send?phone=" . $user->whatsappNumber . "&text=Assalamu'alaikum. Saya mau memesan produk yang Anda jual di " . "(" . route('home.index') . "), " . "apakah saya bisa minta katalognya ?.";
        $categoryProducts = CategoryProduct::with('detailProducts')->get();
        $weightUnits = WeightUnit::with('detailProducts')->get();
        $testimoni = Photo::all();
        $partner = Partner::all();
        return Inertia::render('Home', [
            'categoryProducts' => $categoryProducts,
            'whatsappContact' => $whatsappContact,
            'weightUnits' => $weightUnits,
            'testimoni' => $testimoni,
            'partner' => $partner,
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

    public function comprof()
    {
        return Inertia::render('Comprof');
    }
}

