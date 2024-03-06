<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    categoryProduct: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="pricelist">
        <div class="container">
            <div class="title">
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl">
                    List Product dan Harga Terbaru
                </h1>
            </div>
            <div class="content">
                <n-collapse default-expanded-names="1" accordion>
                    <n-collapse-item v-for="(category, index) in categoryProduct" :key="index" :title="category.nama_kategori" :name="`category-${index}`">
                        <ul>
                            <li v-for="(detail, i) in category.detailProduk" :key="i">
                                {{ detail.nama_produk }} - {{ detail.harga }}
                            </li>
                        </ul>
                    </n-collapse-item>
                </n-collapse>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$primary: #05A7E7;
</style>
