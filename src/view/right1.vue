<template>
    <div class="glass w-2/4 relative ">
        <div class="flex justify-between p-3 m-3 ">
            <nav class="w-4/5 ms-10">
                <button class="text-slate-500  mt-6 ">
                    <i class="fas fa-chevron-left text-xs"></i> Назад </button>
            </nav>

            <languge class="me-10" />
        </div>
        <register class="srt" />
    </div>

    <div class="ball"></div>
    <div class="ball2"></div>
</template>

<script setup>
import languge from './languge1.vue';
import register from './register.vue';

</script>

<style scoped>
.srt {
    margin-top: 50px !important;
}

.ball {
    width: 208px;
    height: 208px;
    border-radius: 70%;
    background: linear-gradient(352deg, rgb(157, 208, 255) 7%, rgb(255, 253, 255) 100%);
    position: absolute;
    right: 650px;
    top: 60px;
    z-index: -2222;
}

.ball2 {
    width: 163px;
    height: 163px;
    border-radius: 70%;
    background: linear-gradient(51.9deg, #B7CBFD 9.66%, #FDF0FF 103.24%);
    position: absolute;
    right: 0px;
    top: 620px;
    z-index: -2222;
}

.glass {
    background: rgba(255, 255, 255, 0.31);
    border-radius: 35px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.3px);
    -webkit-backdrop-filter: blur(8.3px);
    border: 1px solid rgba(255, 255, 255, 0.51);
    width: 500% !important;
}
</style>