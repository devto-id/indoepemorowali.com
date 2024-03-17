<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { defineProps, ref } from 'vue'; 

const props = defineProps({ 
    productsByCategory: { 
        type: Array, 
        required: true, 
    }, 
}); 
</script>

<template>
    <Head title="Product" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-primary-500 leading-tight">Product</h2>
        </template>

        <div class="py-12 overflow-auto">
        <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
            <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                <div class="w-full text-gray-700 text-xl font-semibold">
                    <template v-for="(category, showProduct) in productsByCategory" :key="category.id" :name="`category-${showProduct}`">
                        <table class="table-auto w-full border border-collapse border-primary-300 rounded-lg overflow-hidden">
                            <thead class="bg-primary">
                                <tr class="text-left">
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Nama Produk</th>
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Kuantitas Produk</th>
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Harga Produk</th>
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-primary border border-primary-300">
                                    <td class="px-4 py-2 text-white" colspan="4">
                                        <h3 class="text-lg font-semibold">{{ category.nama_kategori }}</h3>
                                    </td>
                                </tr>
                                <template v-if="productsByCategory.length > 0">
                                    <tr v-for="(detail, i) in category.detail_products" :key="i" class="border border-primary-300">
                                        <td class="px-4 py-2">{{ detail.nama_produk }}</td>
                                        <td class="px-4 py-2">{{ detail.qty_barang }}</td>
                                        <td class="px-4 py-2">{{ detail.harga }}</td>
                                        <td class="px-4 py-2">
                                            <form @submit.prevent="deleteProduct(detail.id)">
                                                <button type="submit" class="text-primary" style="background: none; border: none; cursor: pointer;">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="4" class="text-center py-5 text-white">
                                            Tidak ada data.
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </template>
                </div>
            </div>
        </n-card>
    </div>
    </AuthenticatedLayout>
</template>
<style scoped lang="scss">

</style>
