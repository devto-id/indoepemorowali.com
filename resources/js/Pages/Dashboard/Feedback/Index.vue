<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { defineProps } from 'vue';

const props = defineProps({
    feedback: {
        type: Array,
        required: true,
    },
});

const form = useForm();

const remove = (feedbackId) => {
    if (confirm('Are you sure you want to delete this feedback?')) {
        form.delete(route('feedback.destroy', feedbackId), {
            onSuccess: () => {
                alert('Data deleted successfully.');
            },
        });
    }
};


</script>


<template>
    <Head title="Feedback" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-primary-500 leading-tight">Feedback</h2>
            </div>
        </template>

        <div class="py-12 overflow-auto">
            <n-card class="bg-primary-50 border border-primary-300 max-w-7xl mx-auto p-5 rounded-xl min-w-[1100px]" hoverable>
                <div class="bg-primary-100 border border-primary-300 shadow-sm rounded-lg min-w-[1000px]">
                    <div class="w-full text-gray-700 text-xl font-semibold">
                        <table class="table-auto w-full border border-collapse border-primary-300 rounded-lg overflow-hidden">
                            <thead class="bg-primary">
                                    <tr class="text-left">
                                        <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Nama</th>
                                        <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Email</th>
                                        <th class="px-4 py-2 text-white font-bold whitespace-nowrap">No. Handphone</th>
                                        <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Pesan</th>
                                        <th class="px-4 py-2 text-white font-bold whitespace-nowrap">Actions</th>
                                    </tr>
                            </thead>
                            <tbody>
                                <template v-if="feedback.length > 0">
                                    <tr v-for="(feedback, showFeedback) in feedback" :key="showFeedback" class="border border-primary-300">
                                        <td class="px-4 py-2">{{ feedback.name }}</td>
                                        <td class="px-4 py-2">{{ feedback.email }}</td>
                                        <td class="px-4 py-2">{{ feedback.phone }}</td>
                                        <td class="px-4 py-2">{{ feedback.message }}</td>
                                        <td class="px-4 py-2">
                                            <button type="button" @click="remove(feedback.id)" class="px-3 py-2 bg-red-500 text-white text-lg rounded-md transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-3">Delete</button>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="5" class="text-center py-5 text-gray-700">Tidak ada data Feedback.</td>
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
