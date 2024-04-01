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
import WhatsApp from '@/Components/Home/Whatsapp.vue';
import { useApplicationStore } from "@/Stores/ApplicationStore";

const applicationStore = useApplicationStore();

const props = defineProps({
  menu: Object,
  _title: String,
  categoryProducts: { 
    type: Array, 
    required: true, 
  }, 
  weightUnits: { 
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
    <div id="jumbotron">
      <Jumbotron/>
    </div>
    <div id="about" class="pt-[150px]">
      <About/>
      <CoreValue class="pt-[150px]"/>
    </div>
    <div id="pricelist" class="pt-[150px] min-h-[500px] mt-[50px]">
      <Pricelist :categoryProducts="categoryProducts" :weightUnits="weightUnits"/>
    </div>
    <div id="testimoni" class="pt-[200px] min-h-[500px]">
      <Testimoni :testimoni="testimoni" />
    </div>
    <div id="contact" class="pt-[200px]">
      <Contact/>
    </div>
    <WhatsApp/>
    <Copyright/>
  </n-config-provider>
</template>

<style scoped lang="scss">
.font-heading{
  font-size: 24px;
  font-weight: bold;
}
</style>
