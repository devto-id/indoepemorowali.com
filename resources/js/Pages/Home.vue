<script setup>
import Navbar from '@/Components/Home/Navbar.vue';
import Jumbotron from '@/Components/Home/Jumbotron.vue';
import About from '@/Components/Home/About.vue';
import CoreValue from '@/Components/Home/Corevalue.vue';
import Pricelist from '@/Components/Home/Pricelist.vue';

const props = defineProps({
  menu: Object,
  _title: String,
  categoryProduct: {
        type: Array,
        required: true,
    },
});
</script>

<template>
  <Navbar/>
  <Jumbotron/>
  <About/>
  <CoreValue/>
  <Pricelist :categoryProduct="categoryProduct"/>
</template>

<style scoped lang="scss">

.font-heading{
  font-size: 24px;
  font-weight: bold;
}
</style>
