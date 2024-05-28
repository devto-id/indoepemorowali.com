<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    partner: {
        type: Array,
        required: true,
    },
});
</script>

<template>
   <div class="partners">
        <div class="container px-5 mx-auto">
            <div class="title"> 
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl"> 
                    Partners 
                </h1> 
            </div>
            <div class="sub-title mb-5">
                <h1 class="font-heading text-primary-500 text-center text-2xl max-[570px]:text-xl max-[485px]:text-lg max-[400px]:text-base">
                    Partner dan Integritas
                </h1>
            </div>
            <div class="content">
                <n-image-group show-toolbar-tooltip>
                    <n-space style="display: flex; justify-content: space-evenly;">
                        <n-image
                            style="margin: 10px;"
                            :src="'/storage/' + PartnerItem.image"
                            v-for="(PartnerItem, index) in partner" :key="`partner-${index}`"
                            preview-disabled
                        />
                    </n-space>
                </n-image-group>
            </div>
        </div>
   </div>
</template>

<style scoped lang="scss">
$primary: #05A7E7;

.n-image{
    max-width: 250px;
}

@media screen and (max-width: 592px) {
    .n-image{
        max-width: 225px;
    }
}
@media screen and (max-width: 542px) {
    .n-image{
        max-width: 200px;
    }
}
@media screen and (max-width: 492px) {
    .n-image{
        max-width: 175px;
    }
}
@media screen and (max-width: 442px) {
    .n-image{
        max-width: 150px;
    }
}
@media screen and (max-width: 392px) {
    .n-image{
        max-width: 125px;
    }
}
@media screen and (max-width: 342px) {
    .n-image{
        max-width: 100px;
    }
}
@media screen and (max-width: 292px) {
    .n-image{
        max-width: 75px;
    }
}
</style>
