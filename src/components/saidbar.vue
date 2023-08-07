<template>
    <div class="trans" :class="{ addSaidbar: saidbarIsOpen == false }">
        <div class="flex gap-7 mt-7 ms-7" v-if="saidbarIsOpen">
            <img src="../assets/Vector.png" alt="">

            <saidbarSvg @click="toggleSaidbar()" class="cursor-pointer" />
        </div>
        <div v-if="saidbarIsOpen == false" class="mt-9 ms-4 m-auto">
            <img src="../assets/logosecond.svg" alt="" class="block ms-7">

            <img src="../assets/iconZakaz/Arrow - Down Square.svg" alt="" @click="toggleSaidbar()"
                class="cursor-pointer m-auto mt-4">
        </div>
        <button class="mt-6 font_ ms-10">
            Меню
        </button>
        <div v-for="menu1 of menu" :key="menu1.id" class="mt-2 hover3 trans p-3" :class="{ addM: saidbarIsOpen == false }">
            <router-link class="font_ text-lg ms-7 flex gap-2" :to="menu1.path">
                <img :src="menu1.icons" alt="" class="mt-1 w-5 pb-2 me-2 "
                    :data-tooltip-target="'tooltip-' + menu1.id + '-right'" data-tooltip-placement="right">
                <span v-if="saidbarIsOpen">
                    {{ menu1.name }}
                </span>
            </router-link>

            <div v-show="saidbarIsOpen == false">
                <div :id="'tooltip-' + menu1.id + '-right'" role="tooltip"
                    class="absolute z-10 srt invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 hover1 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {{ menu1.name }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            
            </div>
        
        
        </div>
       
<h3 class=" logout border-t-2 border-white">
 
  <h3 class="flex gap-2 mt-3 ">
    <img src="@/assets/Logout.svg" alt="">  Выйти
  </h3>
</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import saidbarSvg from './saidbarSvg.vue'
import Button from 'primevue/button';

let saidbarIsOpen = ref(true)

function toggleSaidbar() {
    saidbarIsOpen.value = !saidbarIsOpen.value
}
let menu = [
    {
        id: 1,
        name: 'Главная',
        path: '/glavni',
        icons: new URL('../assets/icons/Home.svg', import.meta.url)
    },
    {
        id: 2,
        name: 'Поиск',
        path: '/search',
        icons: new URL('../assets/icons/Icon.svg', import.meta.url),


    },
    {
        id: 4,
        name: 'Отчеты',
        path: '/otchoti',
        icons: new URL('../assets/icons/Icon2.svg', import.meta.url)
    },
    {
        id: 5,
        name: 'Заказы',
        path: '/zakazi',
        icons: new URL('../assets/icons/shoping.svg', import.meta.url)
    },
    {
        id: 6,
        name: 'Договора',
        path: '/dagavor',
        icons: new URL('../assets/icons/dagavor.svg', import.meta.url)
    },
    {
        id: 7,
        name: 'Пользователи',
        path: '/polzavatel',
        icons: new URL('../assets/icons/users.svg', import.meta.url)
    },
    {
        id: 8,
        name: 'Поставщики',
        path: '/postavshik',
        icons: new URL('../assets/icons/postavshik.svg', import.meta.url)
    },
    {
        id: 9,
        name: 'Провайдеры',
        path: '/provaydri',
        icons: new URL('../assets/icons/2 User.svg', import.meta.url)
    },
    {
        id: 10,
        name: 'Настройки',
        path: '/nastroyki',
        icons: new URL('../assets/icons/sittings.svg', import.meta.url)
    },
    {
        id: 11,
        name: 'Избранные',
        path: '/izbroni',
        icons: new URL('../assets/icons/Heart.svg', import.meta.url)
    },

]

</script>

<style scoped>
.logout{
    margin-top: 110px;
    position: relative;
    top:55px;
    left: 24px;

}
.srt {
    transition: opacity 1s ease;
}


.addM {
    position: relative;
    left: 10px;
}

.trans {
    transition: .3s;


}

.addSaidbar {
    width: 120px;

}

.font_ {
    color: #475569;
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;
}



a.router-link-exact-active {
    color: #00B8D7;

}

.hover3:hover {
    width: 100%;
    height: 100%;
    padding: 12px;
    background: rgba(29, 27, 32, 0.04);
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;

}

.menuBorder {
    border: 2px solid #475569;

}
</style>