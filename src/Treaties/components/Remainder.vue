<template>
    <div class=" grid grid-cols-12">
        <div class=" m-3 col-span-4 pe-3 border-r">
            <div class="font color_1 text-xl text-center ">
                <Chart1 />
                <h2>
                    Договор <span class="color_1 font-bold">№ 42666</span>
                </h2>
                <h3>
                    С агентом <span class="color_2 font-bold">ATLANTA RUB</span>
                </h3>
            </div>
            <div class="flex justify-between font " v-for="period1 in period" :key="period1.id">
                <h4 class="color_3">
                    {{ period1.name }}
                </h4>
                <h4 class="text-black font-semibold">
                    {{ period1.nomber }}
                </h4>
            </div>
        </div>
        <div class="m-3 col-span-4 border-r pe-3">
            <div class="font color_1 text-xl text-center">
                <Chart1 />
                <h2>
                    Договор <span class="color_1 font-bold">№ 42666</span>
                </h2>
                <h3>
                    С агентом <span class="color_2 font-bold">ATLANTA RUB</span>
                </h3>
            </div>
            <div class="flex justify-between font " v-for="period1 in period" :key="period1.id">
                <h4 class="color_3">
                    {{ period1.name }}
                </h4>
                <h4 class="text-black font-semibold">
                    {{ period1.nomber }}
                </h4>
            </div>
        </div>
        <div class="m-3 col-span-4 pe-2">
            <div class="font color_1 text-xl text-center">
                <Chart1 />
                <h2>
                    Договор <span class="color_1 font-bold">№ 42666</span>
                </h2>
                <h3>
                    С агентом <span class="color_2 font-bold">ATLANTA RUB</span>
                </h3>
            </div>
            <div class="flex justify-between font " v-for="period1 in period" :key="period1.id">
                <h4 class="color_3">
                    {{ period1.name }}
                </h4>
                <h4 class="text-black font-semibold">
                    {{ period1.nomber }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import Chart1 from './Chart1.vue';
import { ref } from 'vue';
const period = ref([
    {
        id: 1,
        name: 'Период',
        nomber: '06.03. 23 - 31.12.23'
    },
    {
        id: 2,
        name: 'Баланс депозита',
        nomber: '10 230 790.50 UZS'
    },
    {
        id: 3,
        name: 'Баланс кошелка',
        nomber: '2 00 110.402 UZS'
    },
    {
        id: 4,
        name: 'Итого:',
        nomber: '12 000 990.90 UZS'
    },

])
</script>
<style scoped>
.color_3 {
    color: #838C97;
}

.width_ {
    width: 100px !important;
}

.color_1 {
    color: #475569;
}

.color_2 {
    color: #0FB8D3;
}

.font {
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;
    font-family: 'Mulish', sans-serif;
}
</style>