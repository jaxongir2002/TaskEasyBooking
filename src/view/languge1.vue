<template>
    <div>
        <button class="p-2 rounded-full md:h-[35px] h-[32px] mt-5 flex items-center justify-around text-slate-800 width2 bg-white shadow-sm right-5" @click="isActive = !isActive">
                    <img src="../assets/rusflag.png" alt="country" class="w-4">
                    <span class="uppercase text-xs">RU</span><i  class="fas fa-caret-down text-slate-400"></i>
                </button>
                <div v-if="isActive">
                    <div>
                        <div  class="w-[200px] p-2 h-auto absolute right-16 z-20 md:top-[84px] top-[60px] rounded-xl bg-white shadow-xl">
                            <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                            <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/flag_rus.svg" alt=""> Русский</span>
                            <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                                <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/en.svg" alt=""> English</span>
                                <span class="gap-4 flex item-center p-3 w-full hover:bg-slate-50 rounded-lg cursor-pointer">
                                    <img src="https://b2b.eb-system.uz/src/assets/images/Authorization/languages/flag_uzb.svg" alt=""> O`zbek tili</span></div>
                    </div>
                </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let isActive = ref(false)
</script>

<style scoped>
.width2{
    width: 93px;
    height: 40px;
}


</style>