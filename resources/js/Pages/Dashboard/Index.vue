<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-primary-500 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <n-card class="bg-primary-50 max-w-7xl mx-auto sm:px-6 lg:px-8" hoverable>
                <div class="overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="text-gray-900 text-2xl font-semibold">
                        <span class="wave">👋</span> Selamat Datang, {{ usePage().props.auth.user.name }}
                    </div>
                </div>
            </n-card>
        </div>
    </AuthenticatedLayout>
</template>
<style scoped lang="scss">
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
