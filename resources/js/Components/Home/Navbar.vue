<script setup>
import { onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import horizontal from '../../../../public/img/logo/logo-horizontal.png';
import iconLogo from '../../../../public/img/icon/icon.png';

// Gunakan variabel reaktivitas untuk mengontrol tampilan menu
const isMenuOpen = ref(false);

// Fungsi untuk mengubah status tampilan menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Pasang event listener saat komponen dimount
onMounted(() => {
  const menuToggle = document.querySelector('.hamburger input');
  const nav = document.querySelector('nav .navbar .nav-links');
  
  // Ubah gaya langsung dari JavaScript ke variabel reaktivitas
  menuToggle.addEventListener('click', () => {
    isMenuOpen.value = !isMenuOpen.value;
  });
});
</script>

<template>
  <nav>
    <div class="navbar bg-white py-5 px-5 flex items-center justify-evenly h-fit w-full fixed top-0 drop-shadow-md">
      <div class="logo mx-5">
        <Link href="/home">
          <img :src="horizontal" alt="Logo" width="100%" class="max-[300px]:hidden">
          <img :src="iconLogo" alt="Logo" width="100%" class="hidden max-[300px]:block max-w-[50px]">
        </Link>
      </div>
      <div class="nav-links my-auto text-lg font-bold flex items-center max-[1080px]:flex-col" :class="{ 'show': isMenuOpen }">
        <Link :href="route('home.index')" class="nav-link flex items-center">Beranda</Link>
        <Link :href="route('home.index')" class="nav-link flex items-center">Tentang Kami</Link>
        <Link :href="route('home.index')" class="nav-link flex items-center">Produk</Link>
        <Link :href="route('home.index')" class="nav-link flex items-center">Testimoni</Link>
        <Link :href="route('home.index')" class="nav-link flex items-center">Kontak</Link>
      </div>
      <label class="hamburger mx-5">
        <input type="checkbox" v-model="isMenuOpen">
        <svg viewBox="0 0 32 32">
          <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path class="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </div>
  </nav>
</template>

<style scoped lang="scss">
$primary: #05A7E7;

.navbar {
  z-index: 5000;
}

.logo {
  max-width: 20%;
}

.nav-links {
  max-width: 70%;
  transition: all .3s;
}

.nav-link {
  color: gray;
  margin: 0 35px;
  transition: all .3s;

  &:hover {
    text-decoration: underline;
    color: $primary;
  }

  &.active {
    color: $primary;
  }
}

.hamburger {
  cursor: pointer;
  display: none;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: $primary;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
  transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}

// Tambahkan gaya untuk menampilkan menu
.nav-links.show {
  transform: translateX(0);
}

@media screen and (max-width: 1080px) {
  .logo {
    max-width: 200px;
  }

  .nav-links {
    position: absolute;
    right: 0;
    top: 88px;
    width: 50%;
    box-shadow: inset 0px 10px 5px -10px rgb(176, 176, 176);
    transform: translateX(100%);
    background-color: white; // Tambahkan warna latar belakang untuk menu
  }

  .nav-link {
    height: fit-content;
    width: 100%;
    padding: 15px;
    background-color: $primary;
    color: white;

    &:hover {
      text-decoration: underline;
      color: $primary;
      background-color: white;
    }

    &.active {
      color: $primary;
      background-color: white;
    }
  }

  .hamburger {
    cursor: pointer;
    display: block;
  }
}
@media screen and (max-width: 300px) {
  .logo {
    max-width: 200px;
  }

  .nav-links {
    position: absolute;
    right: 0;
    top: 88px;
    width: 100%;
    box-shadow: inset 0px 10px 5px -10px rgb(176, 176, 176);
    transform: translateX(100%);
    background-color: white; // Tambahkan warna latar belakang untuk menu
  }

  .nav-link {
    height: fit-content;
    width: 100%;
    padding: 15px;
    background-color: $primary;
    color: white;

    &:hover {
      text-decoration: underline;
      color: $primary;
      background-color: white;
    }

    &.active {
      color: $primary;
      background-color: white;
    }
  }

  .hamburger {
    cursor: pointer;
    display: block;
  }
}
</style>
