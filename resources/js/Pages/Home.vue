<script setup>
import {defineProps} from 'vue';
import Navbar from '@/Components/Home/Navbar.vue';
import Jumbotron from '@/Components/Home/Jumbotron.vue';
import About from '@/Components/Home/About.vue';
import CoreValue from '@/Components/Home/Corevalue.vue';
import Pricelist from '@/Components/Home/Pricelist.vue';
import Partner from '@/Components/Home/Partners.vue';
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
  partner: {
        type: Array,
        required: true,
  },
  testimoni: { 
    type: Array, 
    required: true, 
  },
  whatsappContact: {
    type: String,
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
    <div id="about" class="pt-[100px] pb-[50px]">
      <About/>
      <CoreValue class="pt-[50px]"/>
    </div>
    <div id="pricelist" class="py-[50px]">
      <Pricelist :categoryProducts="categoryProducts" :weightUnits="weightUnits"/>
    </div>
    <div id="partner" class="py-[50px]">
      <Partner :partner="partner" />
    </div>
    <div id="testimoni" class="py-[50px]">
      <Testimoni :testimoni="testimoni" />
    </div>
    <div id="contact" class="py-[50px] mb-[100px]">
      <Contact/>
    </div>
    <WhatsApp :whatsappContact="whatsappContact"/>
    <Copyright/>
  </n-config-provider>
</template>

<style scoped lang="scss">
.font-heading{
  font-size: 24px;
  font-weight: bold;
}
</style>
