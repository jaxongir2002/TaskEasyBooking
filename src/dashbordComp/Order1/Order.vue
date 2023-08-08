<template>
    <div class="bg_ mt-7">
        <div class="flex justify-between p-5">
            <h1 class="text-3xl font_ font_1 ">
                Заказы
            </h1>
            <h1 class="text-lg font_ color_ cursor-pointer">
                Посмотреть все <i class="fas fa-angle-right ms-2"></i>
            </h1>
        </div>
        <div class="grid grid-cols-12 p-2">
            <Res class="col-span-6" />
            <Res2 class="col-span-6"></Res2>
        </div>
<br>
    </div>
</template>

<script setup>
import Res from './Res.vue';
import Res2 from './res2.vue';
</script>

<style scoped>
.bg_ {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 24px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    padding: 16px, 24px, 16px, 24px !important;

}

.font_ {
    color: #475569;
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;

}

.font_1 {
    font-weight: 500 !important;
    color: black;
}

.color_ {
    color: #00B5D7;
}</style>