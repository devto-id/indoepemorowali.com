<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::post('/contact', [HomeController::class, 'store'])->name('contact.form');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Routes Category
    Route::get('/category', [DashboardController::class, 'showCategory'])->name('category');
    Route::get('/category/create', [DashboardController::class, 'createCategory'])->name('category.create');
    Route::post('/category', [DashboardController::class, 'storeCategory'])->name('category.store');
    Route::get('/category/{category}/edit', [DashboardController::class, 'editCategory'])->name('category.edit');
    Route::put('/category/{category}', [DashboardController::class, 'updateCategory'])->name('category.update');
    Route::delete('/category/{category}', [DashboardController::class, 'destroyCategory'])->name('category.destroy');

    // Routes Product
    Route::get('/product', [DashboardController::class, 'showProduct'])->name('product');
    Route::get('/product/create', [DashboardController::class, 'createProduct'])->name('product.create');
    Route::post('/product', [DashboardController::class, 'storeProduct'])->name('product.store');
    Route::get('/product/{product}/edit', [DashboardController::class, 'editProduct'])->name('product.edit');
    Route::put('/product/{product}', [DashboardController::class, 'updateProduct'])->name('product.update');
    Route::delete('/product/{product}', [DashboardController::class, 'destroyProduct'])->name('product.destroy');
    
    // Routes Testimoni
    Route::get('/testimoni', [DashboardController::class, 'showTestimoni'])->name('testimoni');
    Route::get('/testimoni/create', [DashboardController::class, 'createTestimoni'])->name('testimoni.create');
    Route::post('/testimoni', [DashboardController::class, 'storeTestimoni'])->name('testimoni.store');
    Route::delete('/testimoni/{testimoni}', [DashboardController::class, 'destroyTestimoni'])->name('testimoni.destroy');

    // Route Product
    Route::get('/feedback', [DashboardController::class, 'showFeedback'])->name('feedback');
    Route::delete('/feedback/{feedback}', [DashboardController::class, 'destroyFeedback'])->name('feedback.destroy');

    // Route Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
