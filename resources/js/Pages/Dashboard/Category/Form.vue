<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    nama_kategori: '',
});

const submit = () => {
    form.post(route('category.store'));
};
</script>

<template>
    <Head title="Create Category" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Create Category</h2>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold p-5">
                        <form @submit.prevent="submit">
                            <div class="mt-4">
                                <label for="nama_kategori" class="block font-medium text-sm text-gray-700">Nama Kategori</label>
                                <input id="nama_kategori" v-model="form.nama_kategori" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" required autofocus autocomplete="nama_kategori">
                                <span class="text-red-600" v-if="form.errors.nama_kategori" role="alert">{{ form.errors.nama_kategori }}</span>
                            </div>
                            <div class="flex items-center justify-end mt-6">
                                <button type="submit" class="px-3 py-2 bg-primary-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-primary-600 focus:outline-none focus:bg-primary-600">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </n-card>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
</style>
