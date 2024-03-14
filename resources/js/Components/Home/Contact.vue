<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
</script>

<template>
   <div class="contact">
        <div class="container p-5">
            <div class="title"> 
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl"> 
                    Kontak Kami 
                </h1> 
            </div>
            <div class="sub-title mb-5">
                <h1 class="font-heading text-primary-500 text-center text-2xl max-[570px]:text-xl max-[485px]:text-lg max-[400px]:text-base">
                    Silakan isi form dibawah untuk dapatkan Info detail atau pertanyaan lainnya
                </h1>
            </div>
            <div class="content">
                <n-form>
                    <div class="top flex flex-wrap justify-center">
                        <n-input v-model:value="name" type="text" placeholder="Nama"/>
                        <n-input v-model:value="email" type="text" placeholder="Email"/>
                    </div>
                </n-form>
            </div>
        </div>
   </div>
</template>

<style scoped>
.n-input{
    max-width: 500px;
    min-width: 300px;
    margin: 10px;
}

</style>
