<script setup>
    import { ShareScreenPersonOverlay24Filled } from "@vicons/fluent";
    import { useApplicationStore } from "@/Stores/ApplicationStore";
    import Navbar from '@/Components/Home/Navbar.vue';
    import Copyright from '@/Components/Home/Copyright.vue';

    const applicationStore = useApplicationStore();
</script>
<template>
    <n-config-provider
        :theme="applicationStore.theme"
        :themeOverrides="applicationStore.themeOverrides"
    >
    <Navbar/>
        <div id="about" class="comprof pt-[150px] max-[1080px]:mt-[50px]">
            <div class="container px-5 mx-auto">
                <div class="title">
                    <h1 class="font-heading text-gray-700 text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl">
                        Company Profile
                    </h1>
                </div>
                <div class="content max-w-[1300px] m-auto mt-14 text-gray-500 text-xl max-[570px]:text-lg max-[485px]:text-base">
                    <div class="pengantar">
                        <div class="sub-content flex max-[1024px]:flex-wrap justify-center items-center">
                            <div class="image mx-7">
                                <div class="image max-w-[500px] m-auto w-[100%]">
                                <img src="../../../public/img/kantor/kantor.png" alt="produk">
                            </div>
                            </div>
                            <div class="text w-[100%] mx-7 max-[1024px]:my-7 max-[1024px]:mx-0">
                                <p>
                                    PT. Indo Epe Morowali berkedudukan di Desa Bahodopi Kecamatan Bahodopi Kabupaten Morowali, yang didirikan pada tanggal 04 Juli 2022.
                                </p>
                                <p>
                                    Sejak perusahaan ini didirikan jenis usaha yang telah dijalankan adalah menjadi <i>Distributor Logistik Pangan</i> di wilayah Kabupaten Morowali Sulawesi Tengah.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="akta">
                        <div class="sub-title">
                            <h2 class="font-heading">
                                Akta Pendirian Perusahaan
                            </h2>
                        </div>
                        <div class="sub-content">
                            <ul>
                                <li>
                                    <p>
                                        Berdasarkan Akta Pendrian PT Nomor  046 Tanggal 04 Juli 2022 yang dibuat oleh Notaris Dwi Suswanti, SH.,M.KN.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Berdasarkan keputusan Menteri Hukum dan HAM RI Nomor AHU-0044212.AH.01.TAHUN2022 tentang Pengesahan Pendirian Badan Hukum Perseroan Terbatas PT. Indo Epe Morowali.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="struktur">
                        <div class="sub-title">
                            <h2 class="font-heading">
                                Struktur Organisasi
                            </h2>
                        </div>
                        <div class="sub-content flex flex-wrap justify-center">
                            <n-card hoverable class="bg-primary-100">
                                <div class="title-card">
                                    <ShareScreenPersonOverlay24Filled class="icon"></ShareScreenPersonOverlay24Filled>
                                    <h2 class="font-heading text-xl max-[400px]:text-lg max-[350px]:text-base">
                                        Akhirudin Sumendeo
                                    </h2>
                                </div>
                                <div class="content-card">
                                    <h2 class="text-2xl max-[300px]:text-xl">
                                        Direktur
                                    </h2>
                                </div>
                            </n-card>
                            <n-card hoverable class="bg-primary-100">
                                <div class="title-card">
                                    <ShareScreenPersonOverlay24Filled class="icon"></ShareScreenPersonOverlay24Filled>
                                    <h2 class="font-heading text-xl max-[400px]:text-lg max-[350px]:text-base">
                                        Awaludin Udin S
                                    </h2>
                                </div>
                                <div class="content-card">
                                    <h2 class="text-2xl max-[300px]:text-xl">
                                        Komisaris
                                    </h2>
                                </div>
                            </n-card>
                        </div> 
                    </div>
                    
                    <div class="portfolio">
                        <div class="sub-title">
                            <h2 class="font-heading">
                                Portfolio Kerja
                            </h2>
                        </div>
                        <div class="sub-content">
                            <ul>
                                <li>
                                    <p>
                                        Sub Distributor Air Mineral Merek Club
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Sub Distributor Air Mineral Merek Club
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Distributor Tepung Produk dari Eastern
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="perlengkapan">
                        <div class="sub-title">
                            <h2 class="font-heading">
                                Perlengkapan Support Bisnis
                            </h2>
                        </div>
                        <div class="sub-content">
                            <ul>
                                <li>
                                    <p>
                                        1 Gedung Kantor 3 Lantai
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        1 Gudang dengan Luas 20x10 Meter
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        2 Mobil Fuso 10 Roda (25 MT)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        1 Mobil Hino 6 Roda (15 MT)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        1 Mobil Hilux Single Cabin
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        1 Mobil Xpander
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        2 Mobil Dum Truk Hino
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="produk">
                        <div class="sub-title">
                            <h2 class="font-heading">
                                Produk yang di Distribusikan
                            </h2>
                        </div>
                        <div class="sub-content">
                            <div class="image max-w-[500px] m-auto w-[100%]">
                                <img src="../../../public/img/product/produk.png" alt="produk">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </n-config-provider>
    <Copyright/>
</template>
<style scoped lang="scss">
$primary: #05A7E7;

i{
    color: $primary;
}

.sub-title{
    margin: 50px 0 15px 0;
    text-align: center;
}
.n-card{
        max-width: 400px;
        min-width: 260px;
        padding: 10px;
        --tw-bg-opacity: .5;
        background-color: rgb(186 234 254 / var(--tw-bg-opacity));
        border-radius: 15px;
        margin: 15px;
        .title-card{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            .icon{
                max-width: 45px;
                color: $primary;
                margin-right: 15px;
            }
        }
    }

</style>