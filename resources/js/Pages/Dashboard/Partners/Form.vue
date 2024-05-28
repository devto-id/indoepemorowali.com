<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

const form = useForm({
    image: null, // Mengubah tipe data dari string menjadi null untuk menyimpan file gambar
    imagePreview: null, // Menambah state untuk menyimpan pratinjau gambar
});

// Membuat fungsi untuk mengirim formulir
const submit = () => {
    form.post(route('partner.store')); // Menggunakan route untuk membuat URL
};

// Fungsi untuk menangani perubahan pada input gambar
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Membuat pratinjau gambar sebelum diunggah
        const reader = new FileReader();
        reader.onload = (e) => {
            form.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);

        // Memperbarui data formulir dengan file gambar yang dipilih
        form.image = file;
    } else {
        // Mengosongkan pratinjau gambar jika tidak ada file yang dipilih
        form.imagePreview = null;
    }
};
</script>

<template>
    <Head title="Partner" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Partner</h2>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold p-5">
                        <form @submit.prevent="submit">
                            <div class="mt-4">
                                <label for="image" class="block font-medium text-sm text-gray-700">Gambar Partner</label>
                                <input type="file" id="image" name="image" class="mt-1 block w-full max-h-14" accept="image/*" @change="handleImageChange">
                                
                                <!-- Menampilkan pratinjau gambar jika ada -->
                                <img v-if="form.imagePreview" :src="form.imagePreview" alt="Preview" class="mt-2 max-w-full h-auto">
                                
                                <span class="text-red-600" v-if="form.errors.image" role="alert">{{ form.errors.image }}</span>
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
