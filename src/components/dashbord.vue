<template>
  <div>

    <div class="grid grid-rows-8 grid-flow-col ">
      <div class="row-span-2 ">
        <saidbar />
      </div>


      <div class="row-span-7 col-span-2 mt-4 ">
        <div class="">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component v-bind:is="Component" class="static" />
            </transition>

          </router-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import saidbar from '../components/saidbar.vue'

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