<template>
    <div class="p-2">
      
            <div class="glass p-5 mt-20 ms-28" :class="['glass', { 'overflow-auto': isGlassOverflow }]">
                <ScrollPanel style="width: 100%; height: 79vh;">
            <div ref="list" class="list bg-transparent" style="border-radius: 40px;">

                <div v-for="item in items" :key="item.id">
                    <TabView></TabView>
                </div>

                <div>
                </div>
                <div class="mb-3" >
                    <Order></Order>
                </div>
                <Statistika />
                <Treaties/>
            </div>

        </ScrollPanel>
        </div>

      
        <div class="ball_roud">
        </div>
        <div class="ball_roud2">
        </div>
    </div>
</template>

<script setup>
import ScrollPanel from 'primevue/scrollpanel';
import TabView from './TabView.vue';
import Order from './Orders/order.vue';
import Sortable from 'sortablejs'
import Statistika from '../Statistika/Statistika.vue';
import Treaties from '@/Treaties/Treaties.vue'
import { onMounted, ref, computed } from 'vue'

const list = ref(null);
let items = ref([
    {
        id: 1
    },

])
const isGlassOverflow = computed(() => {
    const glassElement = document.querySelector('.glass');
    return glassElement && glassElement.offsetHeight > 50;
});
onMounted(() => {
    const sortable = new Sortable(list.value, {
        swapThreshold: 1,
        animation: 150
    });
})


</script>

<style>
.ball_roud2{
    width:170px; 
    height: 170px; 
    position: absolute;
    z-index: -333;
    top: 730px; 
    right: 40px; 
    border-radius: 50%;
     transform: rotate(90deg);
    background: radial-gradient(111.51% 112.49% at -7.04% 7.46%, #FFFFFF 0%, #9392eed0 71.1%, #FFFFFF 100%);

}
.ball_roud {
    width:252px; 
    height: 252px; 
    position: absolute;
    z-index: -333;
    top: 630px; 
    left: 300px; 
    border-radius: 50%;
    transform: rotate(90deg);
    background: radial-gradient(96.36% 96.84% at 24.63% 38.89%, #FFFFFF 0%, #E6FBFE 0.01%, #95DCFA 71.35%, #E4F9FF 100%) ;

}
.p-tabview .p-tabview-panels {
    border-bottom-right-radius: 25px !important;
    border-bottom-left-radius: 25px !important;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.181),0px 2px 4px -2px rgba(16, 24, 40, 0.162) !important;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #00B8D7 !important;
    color: #212121b6 !important;

}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    box-shadow: none !important;
}

.glass {
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;
    backdrop-filter: blur(8.3px);
    -webkit-backdrop-filter: blur(8.3px);
    border: 1px solid rgba(255, 255, 255, 0.51);
    width: 1450px !important;
    box-sizing: border-box !important;
    background-attachment: fixed;


}
</style>