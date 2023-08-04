<template>
    <div class="bg_ mt-7 ">
<div class="flex justify-between p-5 border_r">
    <h1 class="text-3xl font_ font_1 ">
        Договоры
    </h1>
    <h1 class="text-lg font_ color_ cursor-pointer">
        Добавить договор <i class="fas fa-angle-right ms-2"></i>
    </h1>
</div>
<Remainder/>




    </div>
</template>

<script setup>
import Remainder from './components/Remainder.vue';

</script>

<style scoped>

.bg_{    
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
.font_1{
    font-weight: 500 !important;
    color: black;
}
.color_{
    color: #00B5D7;
}
</style>