<script setup>
import { 
    ChevronDown24Filled,
    TagMultiple24Filled
 } from "@vicons/fluent";
import { defineProps, ref } from 'vue'; 

const props = defineProps({ 
    categoryProducts: { 
        type: Array, 
        required: true, 
    }, 
}); 

const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}

const activeAccordionIndex = ref(-1);

const toggleAccordion = (index) => {
    if (activeAccordionIndex.value === index) {
        activeAccordionIndex.value = -1; // Tutup jika sudah terbuka
    } else {
        activeAccordionIndex.value = index; // Buka jika tertutup
    }
};

const isAccordionOpen = (index) => {
    return activeAccordionIndex.value === index; // Mengecek apakah accordion terbuka atau tidak
};
</script>

<template>
<div class="pricelist"> 
    <div class="container px-5 mx-auto"> 
        <div class="title"> 
            <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl"> 
                List Produk dan Harga Terbaru 
            </h1> 
        </div> 
        <div class="content m-10 flex justify-center flex-wrap">
            <div class="bungkus max-w-lg w-[100%]" v-for="(category, index) in categoryProducts" :key="category.id" :name="`category-${index}`">
                <div class="accordion rounded-xl overflow-hidden transition-all shadow-md hover:shadow-lg">
                    <div class="accordion-header bg-primary-50 py-4 px-6 cursor-pointer flex justify-between" @click="toggleAccordion(index)">
                        <span class="font-semibold text-lg">{{ category.nama_kategori }}</span>
                        <ChevronDown24Filled class="arrow w-5 transition-all duration-300" :class="{ 'rotate-180': isAccordionOpen(index) }"/>
                    </div>
                    <div class="accordion-body transition-all duration-300" :class="{ 'min-h-[5vw]': isAccordionOpen(index), 'max-h-[1000vw]': isAccordionOpen(index), 'max-h-0': !isAccordionOpen(index) }">
                        <ul class="p-4" v-for="(detail, i) in category.detail_products" :key="i">
                            <li class="text-base flex">
                            <TagMultiple24Filled class="w-4 mr-2"/> {{ detail.nama_produk }} <br>
                            </li>
                            <li class="text-base flex">
                            {{ formatCurrency(detail.harga) }} Isi {{ detail.qty_barang }} Pcs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
</div> 
</template>  

<style scoped lang="scss"> 
$primary: #05A7E7; 

.bungkus {
    max-width: 500px;
    width: 100%;
    margin: 5px;
}
</style>
