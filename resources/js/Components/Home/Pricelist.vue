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
                    <n-collapse-item v-for="(category, index) in categoryProducts" :key="category.id" :title="category.nama_kategori" :name="`category-${index}`"> 
                        <ul> 
                            <li v-for="(detail, i) in category.detailProducts" :key="i"> 
                                {{ detail.nama_produk }} - {{ detail.harga }} 
                            </li> 
                        </ul> 
                    </n-collapse-item> 
                </n-collapse> 
            </div> 
        </div> 
    </div> 
</template> 

<script setup> 
    import { defineProps } from 'vue'; 
    const props = defineProps({ 
        categoryProducts: { 
            type: Array, 
            required: true, 
        }, 
    }); 
</script> 

<style scoped lang="scss"> 
    $primary: #05A7E7; 
</style>
