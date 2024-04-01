<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { defineProps } from 'vue';

const props = defineProps({
    testimonies: {
        type: Array,
        required: true,
    },
});

const form = useForm();

const remove = (testimoniId) => {
    if (confirm('Are you sure you want to delete this testimoni?')) {
        form.delete(route('testimoni.destroy', testimoniId), {
            onSuccess: () => {
                alert('Data deleted successfully.');
            },
        });
    }
};


</script>


<template>
    <Head title="Testimoni" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Testimoni</h2>
                <a :href="route('testimoni.create')" class="n-button py-2 px-3 rounded-md font-semibold text-lg" type="info">Tambah Testimoni</a>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold">
                        <table class="table-auto w-full border border-collapse border-primary-300 rounded-lg overflow-hidden">
                            <thead class="bg-primary">
                                <tr class="text-left">
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Gambar</th>
                                    <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="testimonies.length > 0">
                                    <tr v-for="(testimoni, showTestimoni) in testimonies" :key="showTestimoni" class="border border-primary-300">
                                        <td class="px-4 py-2">
                                            <img :src="'/storage/' + testimoni.image" alt="testimoni" style="max-width: 200px;">
                                        </td>
                                        <td class="px-4 py-2">
                                            <button type="button" @click="remove(testimoni.id)" class="px-3 py-2 bg-red-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3">Delete</button>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="2" class="text-center py-5 text-gray-700">Tidak ada data Testimoni.</td>
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
.n-button{
    background-color: $primary;
    border-color: #05A7E7;
    color: white;
    transition: all .3s;

    &:hover{
        box-shadow: 0px 0px 0px 2px rgba(5, 167, 231, 0.5);
        background-color: $primary;
        border-color: #05A7E7;
    }
}
</style>
