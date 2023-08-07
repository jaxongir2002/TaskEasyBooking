<template>
    <div class="flex gap-5 cursor-pointer text1 from-neutral-500 text-md">
        <h2 class="color_">
            <i class="fas fa-check me-1"></i> Туда и обратно
        </h2>
        <h2 class="hover_color">
            В одну сторону
        </h2>
        <h2 class="hover_color">Сложный маршрут</h2>
    </div>
    <div class="mt-4 pt-3">
        <div class="flex justify-content-center gap-1">
            <span class="p-float-label">
                <InputText id="text" v-model="firstName" class="cursor-pointer h-14 w-60" />
                <label for="Откуда">Откуда</label>
            </span>
            <img src="/src/assets/icons/2ta strelka.svg" alt="" class="cursor-pointer" @click="replaceNames">
            <span class="p-float-label">
                <InputText id="text" v-model="lastName" class="cursor-pointer h-14 w-60 " />
                <label for="Откуда">Куда</label>
            </span>
            <span class="p-float-label">
                <InputText id="number" v-model="dataNum" class="cursor-pointer  h-14" />
                <label for="Дата туда">Дата туда</label>
            </span>
            <span class="p-float-label">
                <InputText id="number" v-model="dataObr" class="cursor-pointer  h-14    " />
                <label for="Дата обратно">Дата обратно</label>
            </span>

            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider"
                class="  text_ font-medium rounded-lg text-sm w-40 p-1  text-center inline-flex gap-10 items-center "
                type="button">
                <span class="flex gap-2"><img src="@/assets/ManIcon.svg" alt="">1 пасс</span>
                <svg width="12" height="7" viewBox="0 0 12 7"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.979943 0.812951C1.15745 0.635439 1.43523 0.619302 1.63097 0.764538L1.68705 0.812951L6.00016 5.12584L10.3133 0.812951C10.4908 0.635439 10.7686 0.619302 10.9643 0.764538L11.0204 0.812951C11.1979 0.990462 11.214 1.26824 11.0688 1.46398L11.0204 1.52006L6.35372 6.18672C6.17621 6.36423 5.89843 6.38037 5.70269 6.23514L5.64661 6.18672L0.979943 1.52006C0.784681 1.3248 0.784681 1.00821 0.979943 0.812951Z"
                        fill="#475569" />
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownDivider"
                class="z-10 hidden bg-white divide-y divide-gray-100 w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </ul>
                <div class="py-2">
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
                        link</a>
                </div>
            </div>


            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Эканом кллас"
                class="w-52 md:w-14rem" />
            <button class=" btn1">
                <img src="/src/assets/icons/SearchBtn.svg" class="srt ms-5" alt="">
            </button>
        </div>

        <check />

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
    {
        name: 'Премиум-экономкласс',
        code: 'RM'
    },

]);

</script>

<style>
.text_ {
    border:1px solid rgba(208, 213, 221, 1)!important;
    color: #475569;
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;
    transition: .2s;
}
.text_:hover{
    border:1px solid #00B8D7 !important;
}

.p-dropdown:not(.p-disabled):hover {
    border-color: #18BCDB;
}

.btn1 {
    width: 65px !important;
    height: 53px !important;
    border-radius: 16px;
    background: #18BCDB;
}

.p-component {
    box-shadow: none !important;
}

.p-inputtext:enabled:hover {
    border-color: #00B8D7 !important;
}

.text1 {
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;
}

.color_ {
    color: #00B8D7;

}

.p-dropdown:not(.p-disabled):hover {
    border-color: #00B8D7 !important;
}

.p-dropdown:not(.p-disabled):focus {
    border-color: #00B8D7 !important;
}

.p-inputtext:enabled:focus {
    border-color: #00B8D7 !important;
}

.p-dropdown:not(.p-disabled).p-focus {
    box-shadow: none !important;
    border-color: #00B8D7 !important;
}


.p-tabview .p-tabview-nav {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1) !important;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    border-top-left-radius: 20px;
}</style>