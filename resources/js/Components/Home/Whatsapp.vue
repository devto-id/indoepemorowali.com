<!-- Home.vue -->
<script setup>
import { LogoWhatsapp } from "@vicons/ionicons5";
import { defineProps } from 'vue';

const props = defineProps({
  whatsappContact: {
    type: String, // Perhatikan bahwa tipe harus 'String' (awalan huruf besar)
    required: true,
  },
});

// Fungsi untuk menangani klik tombol
const handleClick = () => {
  window.open(props.whatsappContact);
}
</script>

<template>
  <n-button @click="handleClick" type="primary" circle class="n-button">
    <LogoWhatsapp class="h-10"></LogoWhatsapp>
  </n-button>
</template>

<style scoped lang="scss">
$primary: #05A7E7;

.n-button {
  padding: 10px;
  width: 65px;
  height: 65px;
  background-color: $primary;
  transition: all .3s;
  position: fixed;
  bottom: 25px;
  right: 25px;
  color: white;

  &:hover {
    box-shadow: 0px 0px 0px 5px rgba(5, 167, 231, 0.5);
  }
}
</style>
