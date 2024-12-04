<script setup>
const scrollToFeedback = () => {
    const feedbackSection = document.getElementById("contact");
    if (feedbackSection) {
        feedbackSection.scrollIntoView({ behavior: "smooth" });
    }
};
</script>
<template>
    <header>
        <div class="jumbotron pt-[100px] max-[1080px]:mt-[50px] px-10">
            <div class="container flex flex-wrap mx-auto">
                <div class="text max-w-[500px] w-[100%] h-fit m-auto items-center">
                    <div class="title mx-auto max-w-[500px]">
                        <h1 class="font-heading text-gray-700 text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl">PT. INDO EPE MOROWALI</h1>
                    </div>
                    <div class="detail max-w-[500px] mx-auto">
                        <div class="desc text-gray-500 text-xl my-5 max-[570px]:text-lg max-[485px]:text-base">
                            <p>
                                Distributor dan supplier terkemuka di Indonesia, khususnya dalam menyediakan bahan pangan berkualitas tinggi. Dengan pengalaman yang luas dan komitmen untuk keunggulan layanan, kami telah menjadi pilihan utama bagi pelanggan di seluruh negeri.
                            </p>
                        </div>
                        <button @click="scrollToFeedback" type="button" class="primary-button">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Pesan Sekarang</span>
                        </button>
                    </div>
                </div>
                <div class="image max-w-[500px] m-auto mt-10 w-[100%]">
                    <img class="drop-shadow-md" src="../../../../public/img/product/produk.png" alt="produk">
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
$primary: #05A7E7;

button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}

button.primary-button {
 width: 15rem;
 height: auto;
}

button.primary-button .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: $primary;
 border-radius: 1.625rem;
}

button.primary-button .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.primary-button .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.primary-button .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.primary-button .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: $primary;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
}

</style>
