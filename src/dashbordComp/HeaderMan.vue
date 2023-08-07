
<template>
    <div class=" cursor-pointer mt-3 h-12">
        <img src="@assets/trailing-icon.png" alt="" @click="isActive = !isActive">
        <div v-if="isActive">
              
                        <div
                            class="w-[200px] h-auto absolute right-2 z-20  rounded-xl bg-white shadow-xl">
                            <div>
                            <h3 class="p-3 w-full rounded-lg cursor-pointer">
                                <img src="@assets/state-layer.svg"
                                    alt="" class="m-auto">
                                    </h3>
                                    <h4 class="text-center font_ font-bold color_"> Rizo Alirizaev</h4>
                                    <p class="text-center font_ ">Проект менеджер</p>    
                            </div>
                            <h3 class="flex gap-2 m-2 border-t p-2 font_">
                                <img src="@assets/ProfileMan.svg" alt="">
                                Личные данные
                            </h3>
                            <h3 class="flex gap-2 m-2 p-2 font_">
                                <img src="@assets/Password.svg" alt="">
                                Пароль
                            </h3>
                            
                            
                        </div>
                 
                </div>
     
    </div>
</template>

<script setup>
import { ref } from 'vue'
let isActive = ref(false)

</script>
<style scoped>
.font_ {
    color: #475569;
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.15px;
}
.color_{
    color: rgba(33, 33, 33, 1);

}
</style>