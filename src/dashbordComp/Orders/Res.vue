<template>
    <div>
<div class="flex justify-between  p-4" v-for="zakaz1 in zakaz" :key="zakaz1.id">
    
    <div class="flex gap-3 font_" >
        <img :src="zakaz1.icon" alt="">
        <div>
       <h2 class="flex gap-2 text-black text-lg">
        {{ zakaz1.nameCity }} <img src="/src/assets/iconZakaz/flight_black_24dp 1.svg" alt="">
       {{ zakaz1.nameCity2 }}
    </h2>
    <span class="me-2">
        Заказ {{ zakaz1.nomer }}
    </span>
    <span class="text-slate-400 font-light">{{ zakaz1.time }}</span>        
        </div>
      
    </div>
    <button class="font_ rounded-lg p-2 h-9 color_btn" :style="{ 'background-color': zakaz1.btnColor,'color':zakaz1.color }">
       {{ zakaz1.btn }}
    </button>
   
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let zakaz = ref([
    {
        id:1,
        nameCity:'Самарканд',
        nameCity2:' Санкт-Петербург',
        nomer:'#2114370',
        icon:'/src/assets/iconZakaz/check_circle_black_24dp 1.svg',
        time:'27 Июл, 18:36',
        btn:'Выписан',
        btnColor: '#D3EFDE',
    },
    {
        id:2,
        nameCity:'Самарканд',
        nameCity2:' Санкт-Петербург',
        icon:'/src/assets/iconZakaz/Time Circle.svg',
        nomer:'#2114370',
        time:'27 Июл, 18:36',
        btn:'Забронирован',
        btnColor: '#FF900033',
        color:'#FF9000'
    },
    {
        id:3,
        nameCity:'Самарканд',
        nameCity2:' Санкт-Петербург',
        icon:'/src/assets/iconZakaz/Edit.svg',
        nomer:'#2114370',
        time:'27 Июл, 18:36',
        btn:'Был изменен ',
        btnColor: '#6967f871',
        color:'#6A67F8'
    },

])
</script>

<style scoped>
.color_btn{
    background-color: #D3EFDE;
    color: #27AE60;




    
}
.font_ {
    color: #475569;
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;

}
</style>