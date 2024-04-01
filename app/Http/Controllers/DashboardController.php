<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\DetailProduct;
use App\Models\CategoryProduct;
use App\Models\WeightUnit;
use App\Models\Photo;
use App\Models\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $data = [];

        return Inertia::render('Dashboard/Index', $data);
    }

    // Category Controller
    public function showCategory(): Response
    {
        $category = CategoryProduct::all();
        
        return Inertia::render('Dashboard/Category/Index', [
            'category' => $category,
        ]);
    }

    public function createCategory(): Response
    {   
        return Inertia::render('Dashboard/Category/Form');
    }

    public function storeCategory(Request $request)
    {
        $validated = $request->validate([
            'nama_kategori' => 'required',
        ]);

        $product = CategoryProduct::create([
            'nama_kategori' => $validated['nama_kategori'],
        ]);

        return redirect(route('category'))->with('message', [
            ['success', 'Data saved successfully.']
        ]);
    }

    public function editCategory(CategoryProduct $category): Response
    {   
        return Inertia::render('Dashboard/Category/Edit', [
            'data' => $category,
        ]);
    }

    public function updateCategory(Request $request, CategoryProduct $category)
    {
        $validated = $request->validate([
            'nama_kategori' => 'required',
        ]);

        $category->update($validated);

        return redirect(route('category'))->with('message', [
            ['success', 'Data updated successfully.']
        ]);
    }

    public function destroyCategory(CategoryProduct $category)
    {
        $category->delete();

        return redirect(route('category'))->with('message', [
            ['success', 'Data deleted successfully.']
        ]);
    }

    // Product Controller
    public function showProduct(): Response
    {
        $productsByCategory = CategoryProduct::with('detailProducts')->get();
        $weightUnits = WeightUnit::with('detailProducts')->get();
        
        return Inertia::render('Dashboard/Product/Index', [
            'productsByCategory' => $productsByCategory,
            'weightUnits' => $weightUnits,
        ]);
    }

    public function createProduct(): Response
    {   
        return Inertia::render('Dashboard/Product/Form', [
            'categories' => CategoryProduct::get(),
            'units' => WeightUnit::get(),
        ]);
    }

    public function storeProduct(Request $request)
    {
        // Validasi data yang masuk
        $validated = $request->validate([
            'category_product_id' => 'required',
            'nama_produk' => 'required',
            'weight_unit_id' => 'required',
            'weight' => 'required',
            'nama_produk' => 'required',
            'qty_barang' => 'required',
            'harga' => 'required',
        ]);

        // Buat produk baru dan simpan ke database
        $product = DetailProduct::create([
            'category_product_id' => $validated['category_product_id'], // Berikan nilai category_product_id
            'nama_produk' => $validated['nama_produk'],
            'weight_unit_id' => $validated['weight_unit_id'],
            'weight' => $validated['weight'],
            'qty_barang' => $validated['qty_barang'],
            'harga' => $validated['harga'],
        ]);

        return redirect(route('product'))->with('message', [
            ['success', 'Data saved successfully.']
        ]);
    }

    public function editProduct(DetailProduct $product): Response
    {   
        return Inertia::render('Dashboard/Product/Edit', [
            'data' => $product,
            'categories' => CategoryProduct::get(),
            'units' => WeightUnit::get(),
        ]);
    }

    public function updateProduct(Request $request, DetailProduct $product)
    {
        // Validasi data yang masuk
        $validated = $request->validate([
            'nama_produk' => 'required',
            'weight' => 'required',
            'nama_produk' => 'required',
            'qty_barang' => 'required',
            'harga' => 'required',
        ]);

        $validated['category_product_id'] = $request->input('category_product_id');

        $validated['weight_unit_id'] = $request->input('weight_unit_id');

        // Perbarui data produk
        $product->update($validated);

        return redirect(route('product'))->with('message', [
            ['success', 'Data updated successfully.']
        ]);
    }

    public function destroyProduct(DetailProduct $product)
    {
        $product->delete();

        return redirect(route('product'))->with('message', [
            ['success', 'Data deleted successfully.']
        ]);
    }

    // Testimoni Controller
    public function showTestimoni(): Response
    {
        $testimonies = Photo::all();
        
        return Inertia::render('Dashboard/Testimoni/Index', [
            'testimonies' => $testimonies,
        ]);
    }

    public function createTestimoni(): Response
    {   
        return Inertia::render('Dashboard/Testimoni/Form');
    }

    public function storeTestimoni(Request $request)
    {
        try {
            // Validasi data yang masuk
            $validated = $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp',
            ]);

            // Periksa apakah gambar baru diunggah
            if ($request->hasFile('image')) {
                // Unggah dan simpan gambar baru
                $imagePath = $request->file('image')->store('testimonies', 'public');
                $validated['image'] = $imagePath;
            }

            // Buat testimonial baru dan simpan ke database
            $Photo = Photo::create($validated);

            return redirect(route('testimoni'))->with('message', [
                ['success', 'Data saved successfully.']
            ]);
        } catch (\Exception $e) {
            // Tangani kesalahan
            return back()->withInput()->with('message', [
                ['error', 'Failed to save data.']
            ]);
        }
    }

    public function destroyTestimoni(Photo $testimoni)
    {
        try {
            // Hapus gambar dari direktori penyimpanan
            Storage::disk('public')->delete($testimoni->image);

            // Hapus objek Photo dari database
            $testimoni->delete();

            return redirect(route('testimoni'))->with('message', [
                ['success', 'Data deleted successfully.']
            ]);
        } catch (\Exception $e) {
            // Tangani kesalahan
            return back()->with('message', [
                ['error', 'Failed to delete data.']
            ]);
        }
    }

    // Feedback Controller
    public function showFeedback(): Response
    {
        $feedback = ContactForm::all();
        
        return Inertia::render('Dashboard/Feedback/Index', [
            'feedback' => $feedback,
        ]);
    }

    public function destroyFeedback(ContactForm $feedback)
    {
        $feedback->delete();

        return redirect(route('feedback'))->with('message', [
            ['success', 'Data deleted successfully.']
        ]);
    }
}
