<template>
    <div></div>
</template>

<!-- <template>
    <div class="add" v-for="srt in add1">
        <div v-for="data3 in data1[0]">
<div v-for="data4 in data3">
    <input v-if="data4.type == 'input'" :type="data4.type" :placeholder="data4.hint" :name="data4.system_name">
        <br>
<select v-model="selectedType" v-if="data4.type == 'select'" :name="data4.system_name" id="cars" :type="data4.type"
            :placeholder="data4.hint">
            <option value="volvo">{{ data4.list[0] }}</option>
            <option value="saab">{{ data4.list[1] }}</option>
            <option value="mercedes">{{ data4.list[2] }}</option>
        </select>
<div v-if="data4.type == 'checkbox'">
     <input :type="data4.type" :placeholder="data4.hint" :name="data4.system_name"> 
</div>
       
</div>
        </div>
        
       
    </div>
  
    <button @click="handClick">click</button>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from 'vue'

let data1 = ref([]);
const add1 = ref([1]);

console.log(data1);

onMounted(() => {
    axios.get(`http://176.99.12.64:8022/api/bs/0efc6b4358744a2fa41f1a416f182818/038cdbc7c9104b42a559c89c47aa53bb`)
        .then((element) => {
            element.data.pattern.forEach(el2 => {
                data1.value.push(el2);
                console.log(el2);
            });
        });
});

function handClick() {
    add1.value.push(1);
}
</script>

<style lang="scss" scoped>
.add{
    margin-top: 10px;
}
</style> -->