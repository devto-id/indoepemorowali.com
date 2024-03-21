<script setup>
import { LogoWhatsapp } from "@vicons/ionicons5";
import { usePage } from '@inertiajs/vue3';

const user = usePage().props.auth.user;

const handleWhatsAppClick = () => {
  // Mengambil nomor WhatsApp dari bidang whatsappNumber pada objek user
  const phoneNumber = user.whatsappNumber;
  
  // Pastikan nomor WhatsApp tersedia sebelum membuka obrolan
  if (phoneNumber) {
    const message = "Assalamu'alaikum. saya mau memesan produk yang anda jual di " + route('home.index') + ", bisa saya minta catalog nya?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  } else {
    // Tindakan jika nomor WhatsApp tidak tersedia
    alert("Nomor WhatsApp tidak tersedia.");
  }
};
</script>

<template>
  <n-button @click="handleWhatsAppClick" type="primary" circle class="n-button">
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
