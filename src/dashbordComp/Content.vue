<template>
    <div class="p-3 m-3  me-6">
        <div class="glass p-5 mt-20 ">
            <div ref="list" class="list bg-transparent" style="border-radius: 40px;">
            
                    <div v-for="item in items" :key="item.id">
                        <TabView></TabView>
                    </div>
                
                  <div>
                </div>
                <div v-for="item in items" class="mb-3" :key="item.id" :index="index">
                        <Order></Order>
                    </div>
             
              </div> 
              <Statistika/>     

        </div>
    </div>
</template>

<script setup>
import TabView from './TabView.vue';
import Order from './Orders/order.vue';
import Sortable from 'sortablejs'
import Statistika from '../Statistika/Statistika.vue';
import { onMounted, ref } from 'vue'

const list = ref(null);
let items = ref([
   { 
    id:1
   },
  
])
onMounted(() => {
    const sortable = new Sortable(list.value, {
        swapThreshold: 1,
        animation: 150
    });
})


</script>

<style>
.p-tabview .p-tabview-panels {
    border-bottom-right-radius: 15px !important;
    border-bottom-left-radius: 15px !important;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #00B8D7 !important;
    color: #212121b6 !important;

}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none !important;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem #c7d2fe00;
}


.glass {
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.3px);
    -webkit-backdrop-filter: blur(8.3px);
    border: 1px solid rgba(255, 255, 255, 0.51);
    width: 1600px !important;
    box-sizing: border-box !important;
}

</style>