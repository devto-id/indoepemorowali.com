<script setup>
import { 
    CheckmarkStarburst24Filled,
    Handshake24Filled,
    AccessibilityCheckmark24Filled,
    LightbulbFilament24Filled

    } from "@vicons/fluent";
</script>
<template>
    <div class="corevalue">
        <div class="container px-10">
            <div class="title">
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl">
                    Nilai-Nilai Kami 
                </h1>
            </div>
            <div class="content">
                <n-card hoverable class="bg-primary-100">
                    <div class="title-card">
                        <CheckmarkStarburst24Filled class="icon"></CheckmarkStarburst24Filled>
                        <h2 class="font-heading text-2xl max-[400px]:text-xl max-[350px]:text-lg">
                            Kualitas
                        </h2>
                    </div>
                    <div class="content-card">
                        <p class="text-base max-[300px]:text-sm">
                            Kami menempatkan kualitas sebagai prioritas utama dalam semua aspek bisnis kami, mulai dari pemilihan produk hingga layanan pelanggan.
                        </p>
                    </div>
                </n-card>
                <n-card hoverable class="bg-primary-100">
                    <div class="title-card">
                        <Handshake24Filled class="icon"></Handshake24Filled>
                        <h2 class="font-heading text-2xl max-[400px]:text-xl max-[350px]:text-lg">
                            Integritas
                        </h2>
                    </div>
                    <div class="content-card">
                        <p class="text-base max-[300px]:text-sm">
                            Kami bertindak dengan jujur, adil, dan transparan dalam semua interaksi dengan pelanggan, mitra, dan karyawan kami.
                        </p>
                    </div>
                </n-card>
                <n-card hoverable class="bg-primary-100">
                    <div class="title-card">
                        <AccessibilityCheckmark24Filled class="icon"></AccessibilityCheckmark24Filled>
                        <h2 class="font-heading text-2xl max-[400px]:text-xl max-[350px]:text-lg">
                            Kepuasan
                        </h2>
                    </div>
                    <div class="content-card">
                        <p class="text-base max-[300px]:text-sm">
                            Kepuasan pelanggan adalah ukuran keberhasilan kami. Kami berusaha keras untuk memahami dan memenuhi kebutuhan serta harapan pelanggan kami.
                        </p>
                    </div>
                </n-card>
                <n-card hoverable class="bg-primary-100">
                    <div class="title-card">
                        <LightbulbFilament24Filled class="icon"></LightbulbFilament24Filled>
                        <h2 class="font-heading text-2xl max-[400px]:text-xl max-[350px]:text-lg">
                            Inovasi
                        </h2>
                    </div>
                    <div class="content-card">
                        <p class="text-base max-[300px]:text-sm">
                            Kami terus berupaya untuk berinovasi dalam meningkatkan efisiensi operasional kami dan menawarkan solusi yang lebih baik kepada pelanggan kami.
                        </p>
                    </div>
                </n-card>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
$primary: #05A7E7;

.corevalue{
    .container{
        .content{
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .n-card{
            max-width: 500px;
            min-width: 260px;
            padding: 15px;
            --tw-bg-opacity: .5;
            background-color: rgb(186 234 254 / var(--tw-bg-opacity));
            border-radius: 15px;
            margin: 15px;
            .title-card{
                display: flex;
                align-items: center;
                margin-bottom: 25px;
                .icon{
                    max-width: 65px;
                    color: $primary;
                    margin-right: 15px;
                }
            }
        }
    }
    }
}

</style>