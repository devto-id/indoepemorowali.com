<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3'; // Menggunakan import dari '@inertiajs/inertia-vue3'
import { defineProps } from 'vue'; 

const props = defineProps({ 
    categories: { 
        type: Array, 
        required: true, 
    }, 
    units: { 
        type: Array, 
        required: true, 
    }, 
    // Mendapatkan data produk dari properti yang diberikan
    data: {
        type: Object,
        required: true,
    }
}); 

// Menggunakan useForm untuk mengelola formulir
const form = useForm({
    category_product_id: props.data.category_product_id, // Mengisi nilai awal dari properti produk
    nama_produk: props.data.nama_produk,
    weight_unit_id: props.data.weight_unit_id,
    weight: props.data.weight,
    qty_barang: props.data.qty_barang,
    harga: props.data.harga,
});

// Membuat fungsi untuk mengirim formulir
const submit = () => {
    form.put(route('product.update', props.data.id), form.data, {
        onSuccess: () => {
            alert('Data updated successfully.');
        },
    });
};

// Fungsi untuk menghapus produk
const remove = () => {
    if (confirm('Are you sure you want to delete this product?')) {
        form.delete(route('product.destroy', props.data.id), {
            onSuccess: () => {
                alert('Data deleted successfully.');
            },
        });
    }
};


const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}
</script>

<template>
    <Head title="Edit Product" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Edit Product</h2>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold p-5">
                        <!-- Formulir untuk mengedit produk -->
                        <form @submit.prevent="submit">
                            <!-- Input untuk kategori produk -->
                            <div class="mt-4">
                                <label for="category_product_id" class="block font-medium text-sm text-gray-700">Kategori Produk</label>
                                <select id="category_product_id" v-model="form.category_product_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autofocus autocomplete="category_product_id">
                                    <option value="" disabled>Select category</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.nama_kategori }}</option>
                                </select>
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.category_product_id" role="alert">{{ form.errors.category_product_id }}</span>
                            </div>

                            <!-- Input untuk nama produk -->
                            <div class="mt-4">
                                <label for="nama_produk" class="block font-medium text-sm text-gray-700">Nama Produk</label>
                                <input id="nama_produk" v-model="form.nama_produk" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autofocus autocomplete="nama_produk">
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.nama_produk" role="alert">{{ form.errors.nama_produk }}</span>
                            </div>

                           <!-- Input untuk satuan berat produk -->
                           <div class="mt-4">
                                <label for="weight_unit_id" class="block font-medium text-sm text-gray-700">Satuan Berat</label>
                                <select id="weight_unit_id" v-model="form.weight_unit_id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autofocus autocomplete="weight_unit_id">
                                    <option value="" disabled>Select Weight Unit</option>
                                    <option v-for="unit in units" :key="unit.id" :value="unit.id">{{ unit.unit }}</option>
                                </select>
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.weight_unit_id" role="alert">{{ form.errors.weight_unit_id }}</span>
                            </div>

                            <!-- Input untuk berat satuan produk -->
                            <div class="mt-4">
                                <label for="weight" class="block font-medium text-sm text-gray-700">Berat Perkemasan Produk</label>
                                <input id="weight" v-model="form.weight" type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autocomplete="weight">
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.weight" role="alert">{{ form.errors.weight }}</span>
                            </div>

                            <!-- Input untuk kuantitas produk -->
                            <div class="mt-4">
                                <label for="qty_barang" class="block font-medium text-sm text-gray-700">Kuantitas Produk</label>
                                <input id="qty_barang" v-model="form.qty_barang" type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autocomplete="qty_barang">
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.qty_barang" role="alert">{{ form.errors.qty_barang }}</span>
                            </div>

                            <!-- Input untuk harga produk -->
                            <div class="mt-4">
                                <label for="harga" class="block font-medium text-sm text-gray-700">Harga Total Barang</label>
                                <input id="harga" v-model="form.harga" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autocomplete="harga">
                                <!-- Menampilkan pesan kesalahan jika terjadi validasi gagal -->
                                <span class="text-red-600" v-if="form.errors.harga" role="alert">{{ form.errors.harga }}</span>
                            </div>

                            <!-- Tombol untuk submit formulir -->
                            <div class="flex items-center justify-end mt-6">
                                <button type="button" @click="remove" class="px-3 py-2 bg-red-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3">Delete</button>
                                <button type="submit" class="px-3 py-2 bg-primary-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-primary-600 focus:outline-none focus:bg-primary-600">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </n-card>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
/* Tambahkan gaya CSS khusus di sini jika diperlukan */
</style>
