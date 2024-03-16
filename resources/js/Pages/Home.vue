<script setup>
import {defineProps} from 'vue';
import Navbar from '@/Components/Home/Navbar.vue';
import Jumbotron from '@/Components/Home/Jumbotron.vue';
import About from '@/Components/Home/About.vue';
import CoreValue from '@/Components/Home/Corevalue.vue';
import Pricelist from '@/Components/Home/Pricelist.vue';
import Testimoni from '@/Components/Home/Testimoni.vue';
import Contact from '@/Components/Home/Contact.vue';
import Copyright from '@/Components/Home/Copyright.vue';
import { useApplicationStore } from "@/Stores/ApplicationStore";

const applicationStore = useApplicationStore();

const props = defineProps({
  menu: Object,
  _title: String,
  categoryProducts: { 
    type: Array, 
    required: true, 
  }, 
  testimoni: { 
    type: Array, 
    required: true, 
  },
});
</script>

<template>
  <n-config-provider
    :theme="applicationStore.theme"
    :themeOverrides="applicationStore.themeOverrides"
  >
    <Navbar/>
    <Jumbotron/>
    <About/>
    <CoreValue/>
    <Pricelist :categoryProducts="categoryProducts"/>
    <Testimoni :testimoni="testimoni" />
    <Contact/>
    <Copyright/>
  </n-config-provider>
</template>

<style scoped lang="scss">

.font-heading{
  font-size: 24px;
  font-weight: bold;
}
</style>
