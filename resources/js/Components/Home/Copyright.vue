<script setup>
import { 
    
    } from "@vicons/fluent";
</script>
<template>
    <div id="copyright">
    <div class="text">
        <p>&copy; Copyright PT. Indo Epe Morowali. All Right Reserved</p>
    </div>
</div>
</template>
<style scoped lang="scss">
$primary: #05A7E7;

#copyright{
    display: flex;
    flex-wrap: wrap;
    padding: 15px 15px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: $primary;
    margin-top: 50px;

    .text{
        width: fit-content;
        height: fit-content;
        margin: auto;
        color: white;
        font-weight: bold;
        p{
            text-align: center;
        }
    }
}

</style>