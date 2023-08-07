<template>
    <div>

    </div>
</template>

<script setup>
import axios from "axios";
import {onMounted} from 'vue'


let pattern = [
        {
            system: "booking",
            default: true,
            booking_uid: "",
            tag: [
                {
                    text: "Office ID",
                    hint: "Office ID",
                    type: "input",
                    system_name: "office_id",
                    value: ""
                },
                {
                    text: "Сток выписки",
                    hint: "Сток выписки",
                    type: "select",
                    system_name: "stock_extract",
                    list: [
                        "BSP",
                        "ТКП",
                        "Прямой"
                    ]
                },
                {
                    "text": "Amadeus WSAP",
                    "hint": "Amadeus WSAP",
                    "type": "input",
                    "system_name": "Amadeus_WSAP"
                },
                {
                    "text": "Статус",
                    "hint": "Статус",
                    "type": "select",
                    "system_name": "status",
                    "list": [
                        "активный",
                        "неактивный"
                    ]
                },
                {
                    "text": "МП FFI",
                    "hint": "МП FFI",
                    "type": "checkbox",
                    "system_name": "mp_ffi",
                    "boolean": false
                },
                {
                    "text": "Авто Возврат",
                    "hint": "Авто Возврат",
                    "type": "checkbox",
                    "system_name": "auto_return",
                    "boolean": false
                },
                {
                    "text": "Описание",
                    "hint": "A little about the company and the team that you’ll be working with.",
                    "type": "textarea",
                    "system_name": "description"
                }
            ]
        },
        {
            "system": "TICKET",
            "default": true,
            "tag": [
                {
                    "text": "Office ID",
                    "hint": "Office ID",
                    "type": "input",
                    "system_name": "office_id"
                },
                {
                    "text": "Сток выписки",
                    "hint": "Сток выписки",
                    "type": "select",
                    "system_name": "stock_extract",
                    "list": [
                        "BSP",
                        "ТКП",
                        "Прямой"
                    ]
                },
                {
                    "text": "Amadeus WSAP",
                    "hint": "Amadeus WSAP",
                    "type": "input",
                    "system_name": "Amadeus_WSAP"
                },
                {
                    "text": "Статус",
                    "hint": "Статус",
                    "type": "select",
                    "system_name": "status",
                    "list": [
                        "активный",
                        "неактивный"
                    ]
                },
                {
                    "text": "Авто Возврат",
                    "hint": "Авто Возврат",
                    "type": "checkbox",
                    "system_name": "auto_return",
                    "boolean": false
                },
                {
                    "text": "Описание",
                    "hint": "A little about the company and the team that you’ll be working with.",
                    "type": "textarea",
                    "system_name": "description"
                }
            ]
        }
    ]


// onMounted(()=>  {
//     axios.get(`http://176.99.12.64:8022/api/bs/0efc6b4358744a2fa41f1a416f182818/038cdbc7c9104b42a559c89c47aa53bb`).then((el) => {

// console.log(el);
// });

// })
</script>

<style lang="scss" scoped>

</style>