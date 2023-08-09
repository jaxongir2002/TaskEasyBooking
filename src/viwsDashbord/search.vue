<template>
    <div>
        <div class="add mt-20 flex" v-for="(srt, index) in add1" :key="srt">
            <input type="checkbox" v-model="formData[index].checked">
            <div v-for="data3 in data1[0]" :key="data3">

                <div v-for="data4 in data3" :key="data4.system_name">
                    <div class="form-group">
                        <label>{{ data4.hint }}</label>
                        <input v-if="data4.type == 'input'" class="form-control"
                            v-model="formData[index][data4.system_name]" :type="data4.type" :name="data4.system_name">
                        <select v-else-if="data4.type === 'select'" class="form-control"
                            v-model="formData[index][data4.system_name]" :name="data4.system_name" :id="data4.system_name">
                            <option v-for="item in data4.list" :value="item" :key="item">{{ item }}</option>
                        </select>
                        <div v-else-if="data4.type == 'checkbox'" class="form-check">
                            <input class="form-check-input" :type="data4.type" v-model="formData[index][data4.system_name]"
                                :name="data4.system_name">
                            <label class="form-check-label">{{ data4.hint }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button @click="handClick" class="btn btn-primary">Add</button>
        <button @click="remove" class="btn btn-danger ms-2">Remove</button>
        <button @click="save" class="btn btn-success ms-2">Save</button>
    </div>
</template>
  
<script setup>
import axios from "axios";
import { onMounted, ref } from 'vue'

const data1 = ref([]);
const add1 = ref([1]);
const busId = ref([])





let formData = ref([
    {
        office_id: '',
        stock_extract: '',
        status: false,
        mp_ffi: '',
        auto_return: false,
        checked: false,

    }
]);

onMounted(() => {
    axios.get(`http://176.99.12.64:8022/api/bs/ad0885513dba4220a14c05f31c92b4da/bf6cce49d4cc4b23a1f68c84a4f94e67`)
        .then((element) => {
            busId.value.push(element.data.bs_uid)

            element.data.pattern.forEach(el2 => {
                data1.value.push(el2);

            });
        });
});



function handClick() {
    add1.value.push(1);
    formData.value.push({
        office_id: '',
        stock_extract: '',
        status: false,
        mp_ffi: '',
        auto_return: false,
        checked: false,
    });
}

function remove() {
    add1.value.pop();
    formData.value.pop();
}

let headers = {
    "Content-Type": "application/json",
}




function generateBookingUid() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 16;
    let bookingUid = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        bookingUid += characters.charAt(randomIndex);
    }

    return bookingUid;
}

function save() {
    let dataArray = [];

    for (let i = 0; i < add1.value.length; i++) {
        let data = {
            booking_uid: generateBookingUid(),
            default: formData.value[i].checked,
            description: "",
        };

        for (let j = 0; j < data1.value[0].tag.length; j++) {
            const element = data1.value[0].tag[j];
            data[element.system_name] = formData.value[i][element.system_name];
        }

        dataArray.push(data);
    }
    console.log(dataArray);

    let obj1 = {
        booking_system_uid: "bf6cce49d4cc4b23a1f68c84a4f94e67",
        name: "salom",
        description: "checked",
        currency: "RUB",
        time_gmt: 3,
        is_test: false,
        payment_invoice: false,
        details: {
            booking: {
                data: dataArray,
            },
        },
    };

    axios
        .post(
            "http://176.99.12.64:8022/api/suppliers/0375e8b0305a4e68a3e5e9cfb01597ba/providers",
            obj1,
            { headers }
        )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

</script>
  
<style lang="scss" scoped>
.form-group {
    margin-bottom: 10px;
}

.form-control {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-check {
    margin-top: 5px;
}
</style>