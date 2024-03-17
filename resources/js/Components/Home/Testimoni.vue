<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    testimoni: {
        type: Array,
        required: true,
    },
});
</script>

<template>
   <div class="testimoni">
        <div class="container px-10">
            <div class="title"> 
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl"> 
                    Testimoni 
                </h1> 
            </div>
            <div class="sub-title mb-5">
                <h1 class="font-heading text-primary-500 text-center text-2xl max-[570px]:text-xl max-[485px]:text-lg max-[400px]:text-base">
                    Testimoni Para Mitra
                </h1>
            </div>
            <div class="content">
                <n-image-group show-toolbar-tooltip>
                    <n-space style="display: flex; justify-content: space-evenly;">
                        <n-image
                            style="margin: 10px;"
                            width="400"
                            :src="'/img/testimoni/' + testimoniItem.image"
                            v-for="(testimoniItem, index) in testimoni" :key="`testimoni-${index}`"
                        />
                    </n-space>
                </n-image-group>
            </div>
        </div>
   </div>
</template>

<style scoped lang="scss">
$primary: #05A7E7;
</style>
