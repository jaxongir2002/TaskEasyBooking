<template>
    <div>
        <div class="flex gap-5 cursor-pointer text1 from-neutral-500 text-md">
            <h2 class="color_">
                <i class="fas fa-check me-1"></i> Туда и обратно
            </h2>
            <h2>
                В одну сторону
            </h2>
            <h2>Сложный маршрут</h2>
        </div>
        <div class="mt-4">
            <div class="card flex justify-content-center gap-2">
                <span class="p-float-label">
                    <InputText id="text" v-model="firstName" />
                    <label for="Откуда">Откуда</label>
                </span>
                <img src="/src/assets/icons/2ta strelka.svg" alt="" class="" @click="replaceNames">
                <span class="p-float-label">
                    <InputText id="text" v-model="lastName" />
                    <label for="Откуда">Куда</label>
                </span>
                <span class="p-float-label">
                    <InputText id="number" v-model="dataNum" />
                    <label for="Дата туда">Дата туда</label>
                </span>
                <span class="p-float-label">
                    <InputText id="number" v-model="dataObr" />
                    <label for="Дата обратно">Дата обратно</label>
                </span>
                <Dropdown v-model="selectedClass" :options="classes" optionLabel="name" placeholder="1 пасс"
                    class="w-2/3 md:w-14rem" />
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Эканом кллас"
                    class="w-full md:w-14rem" />
                <button class=" btn1 ">
                    <img src="/src/assets/icons/SearchBtn.svg" class="srt" alt="">
                </button>
            </div>

            <check />
        </div>


    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import check from './chek.vue'
import { ref } from 'vue';
const selectedClass = ref();
const dataObr = ref(null)
const dataNum = ref(null)
const firstName = ref(null);
const lastName = ref(null)
const replaceNames = () => {
    const temp = firstName.value;
    firstName.value = lastName.value;
    lastName.value = temp;
};
const classes = ref([
    { name: 'Экономкласс', code: 'NY' },
    { name: '2 pass', code: 'RM' },
    { name: '3 pass', code: 'LDN' },

]);
const selectedCity = ref();
const cities = ref([
    { 
        name: 'Экономкласс', 
        code: 'NY' 
    },
    { name: 'Премиум-экономкласс',
      code: 'RM' 
    },

]);

</script>

<style scoped>
.p-dropdown:not(.p-disabled):hover {
    border-color: #18BCDB;
}

.btn1 {
    width: 100px;
    /* height:100px; */
    border-radius: 16px;
    padding: 10px 18px;
    background: #18BCDB;
}

.p-component {
    box-shadow: none !important;
    /* border: #00B8D7 !important; */
}

.p-inputtext:enabled:hover {
    border-color: #00B8D7;
}

.text1 {
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;

}

.color_ {
    color: #00B8D7;

}
</style>