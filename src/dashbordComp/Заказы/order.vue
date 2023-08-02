<template>
    <div class="bg_ mt-7 ">
<div class="flex justify-between p-3 border_r">
    <h1 class="text-3xl font_ font_1 ">
        Заказы
    </h1>
    <h1 class="text-lg font_ color_ cursor-pointer">
        Посмотреть все <i class="fas fa-angle-right ms-2"></i>
    </h1>
</div>
<div class="grid grid-cols-12">
  <resi class="col-span-6"/>
<resi2 class="col-span-6"></resi2>  
</div>

    </div>
</template>

<script setup>
import resi from './resi1.vue';
import resi2 from './resi2.vue';
</script>

<style scoped>
.bg_{    
    background: rgba(255, 255, 255, 0.26);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.3px);
    -webkit-backdrop-filter: blur(8.3px);
    border: 1px solid rgba(255, 255, 255, 0.476); 

    border-radius: 20px;
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