<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    categoryProduct: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    {{ categoryProduct }}
</template>

<style scoped lang="scss">
$primary: #05A7E7;
</style>
