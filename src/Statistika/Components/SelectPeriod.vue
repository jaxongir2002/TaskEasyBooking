<template>
    <div>

        <div class="relative overflow-x-auto sm:rounded-lg">
            <div class="flex items-center float-right pb-4 mt-4">
                <div class="">
                    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                        class="inline-flex items-center text-gray-500 bg_1  font-medium rounded-lg text-sm px-3 py-3"
                        type="button">

                        Выбрать период
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownRadio"
                        class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                        style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioButton">
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-1"
                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                        day</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-2"
                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                        7 days</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-3"
                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                        30 days</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-4"
                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                        month</label>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="filter-radio-example-5"
                                        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                        year</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <table class="w-full text-sm text-left text-gray-500 bg-transparent dark:text-gray-400">
                <thead class="text-xs uppercase border-b  text-black">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Вид
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Бронирований
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Выписано
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Сумма
                        </th>
                    </tr>
                </thead>
                <tbody v-for="table1 in table" :key="table1.id" class="bg-transparent">
                    <tr
                        class="bg-transparent dark:bg-gray-800 dark:border-gray-700">

                        <th scope="row"
                            class="px-6 flex gap-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="rounded_ " :style="{ 'background-color': table1.btnColor }">
                            </div> <span class="">{{ table1.view }}</span>
                        </th>
                        <td class="px-6 py-4 text-right">
                            {{ table1.reservations }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            {{ table1.discharged }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            {{ table1.sum }}
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
let table = ref([
    {
        id: 1,
        view: 'Авиабилеты',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#33B8FF',
    },
    {
        id: 2,
        view: 'Отели',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#F2376F',
    },
    {
        id: 3,
        view: 'Ж/д',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#FFCA00',
    },
    {
        id: 4,
        view: 'Автобусы',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#27AE60',
    },
    {
        id: 5,
        view: 'Трансферы',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#B983F1',
    },
    {
        id: 6,
        view: 'Другие',
        reservations: '0',
        discharged: '0',
        sum: '0 UZS',
        btnColor: '#D9D9D9',
    },

])
</script>

<style scoped>
.rounded_ {
    background-color: #33B8FF;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-top: 3px;
}
.bg_1{
    background-color: #EDF2F5;
}
</style>