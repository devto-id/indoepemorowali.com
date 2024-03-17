<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\DetailProduct;
use App\Models\CategoryProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $data = [];

        return Inertia::render('Dashboard/Index', $data);
    }

    public function showProduct(): Response
    {
        $productsByCategory = CategoryProduct::with('detailProducts')->get();
        
        return Inertia::render('Dashboard/Product/Index', [
            'productsByCategory' => $productsByCategory,
        ]);
    }

}
