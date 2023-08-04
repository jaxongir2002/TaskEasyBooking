<template>
    <div class="bg grid grid-cols-12 border p-6 gap-2">
        <left class="col-span-7 m-auto" />
        <right class=" col-span-5" />
    </div>
</template>

<script setup>
import left from '../view/left.vue';
import right from '../view/right1.vue';

</script>

<style scoped>
.bg {
    background: linear-gradient(168.53deg, rgba(200, 223, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 94.93%);
    width: 100%;
    height: 100vh;
}
</style>