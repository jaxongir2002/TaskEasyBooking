<template>
  <div class="relative " >
<div>
  <div class="grid relative bottom-8 grid-rows-7 grid-flow-col " >
      <div>
        <saidbar  />
        
      </div>

      <div class="col-span-6">
    
        <header1></header1>
   
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component v-bind:is="Component" class="static" />
            </transition>

          </router-view>
          <Footer1/>


      </div>
    </div>
</div>
    
  </div>
</template>

<script setup>
import saidbar from '../components/saidbar.vue'
import header1 from '../dashbordComp/header1.vue';
import Footer1 from '../dashbordComp/Footer1.vue';

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>