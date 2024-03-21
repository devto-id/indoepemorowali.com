<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { defineProps } from 'vue'; 

const props = defineProps({ 
    category: { 
        type: Array, 
        required: true, 
    }, 
}); 
</script>

<template>
    <Head title="Category" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Category</h2>
                <a :href="route('category.create')" class="n-button py-2 px-3 rounded-md font-semibold text-lg" type="info">Tambah Kategori</a>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold">
                        <table class="table-auto w-full border border-collapse border-primary-300 rounded-lg overflow-hidden">
                            <thead class="bg-primary">
                                <tr class="text-left">
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Nama Kategori</th>
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="category.length > 0">
                                    <tr v-for="(categoryItem, index) in category" :key="index" class="border border-primary-300">
                                        <td class="px-4 py-2">{{ categoryItem.nama_kategori }}</td>
                                        <td class="px-4 py-2">
                                            <a :href="route('category.edit', categoryItem.id)" style="text-decoration: none;" class="text-primary">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="2" class="text-center py-5 text-gray-700">Tidak ada data Kategori.</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </n-card>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped lang="scss">
$primary: #05A7E7; 
.n-button {
    background-color: $primary;
    border-color: #05A7E7;
    color: white;
    transition: all .3s;

    &:hover {
        box-shadow: 0px 0px 0px 2px rgba(5, 167, 231, 0.5);
        background-color: $primary;
        border-color: #05A7E7;
    }
}
</style>
