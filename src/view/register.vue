<template>
    <div>
        <div class=" relative container">
            <h1 class="text-5xl font-medium text-center">
                Регистрация
            </h1>
            <div class="mt-12 m-auto">
          
     
                    <div class="width1 m-auto">     
                        <div class="relative rounded-lg">
                            <input v-model="email" :class="{ active: show }" autocomplete="new-password" id="custom-input-7089" type="email" class="block width1 height_ hover:border-primary px-2.5 pb-2.5 pt-4 w-full border text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" ">
                            <label for="custom-input-7089" class="absolute text-base text-gray-500 dark:text-gray-400 duration-150 transform -translate-y-3.5 scale-90 top-[2px] origin-[0] dark:bg-gray-900 px-1 bg-[#F4FBFF] peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-5  peer-focus:text-primary left-4">Электронная почта</label></div>
                            <p v-if="show" id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Введите</span>  Введите Email.</p>
              
                </div> 
           
                 
                        <div class="mt-6 width1 m-auto ">
                            <div class="relative rounded-lg">
                                <input v-model="password" :class="{ active: showPassword }" :type="passwordFieldType" autocomplete="new-password" id="custom-input-9963" 
                                type="password" class="block width1 height_ hover:border-primary px-2.5 pb-2.5 pt-4 w-full border text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " aria-autocomplete="list">
                                <label for="custom-input-9963" class="absolute text-base text-gray-500 dark:text-gray-400 duration-150 transform -translate-y-3.5 scale-90 top-[2px] origin-[0] dark:bg-gray-900 px-1 bg-[#F4FBFF] peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-5  peer-focus:text-primary  left-4">Создайте надежный пароль</label><!--v-if--><!--v-if--><div class="absolute right-0 top-3"><i class=" mr-3 cursor-pointer text-slate-700" :class="passwordFieldType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'" @click="togglePasswordVisibility" id="togglePassword"></i></div>
                                <p v-if="showPassword" id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium"></span> Пароль должен состоять не менее чем из 8 символов</p></div>
                </div>



                <Button  label="Зарегистрироваться" @click="validateInput" rounded class="block m-auto top1 w-2/3 "  type="submit"/>
     
            </div>

        </div>

    </div>
</template>

<script setup>

import { onMounted,ref } from 'vue';
import Button from 'primevue/button';
const email = ref('')
const password = ref('')
let show = ref(false)
let showPassword = ref(false)
const validateInput = () => {
      // Email validation
      if (!email.value.includes('@')) {
        return show.value = true
      }
      // Password validation
      if (password.value.length < 8) {
   
        return showPassword.value = true
      }

    }
  


    const passwordFieldType = ref('password')

    const togglePasswordVisibility = () => {
      passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
    }
</script>

<style scoped>

.active{
    border: 1px solid red;
    transition: .5s;
}
.height_ {
    height: 60px;
}
.block {
    display: block !important;
 
}

.top1 {
    margin-top: 410px;
    background-color: #14BEDA;
    border: none !important;    
}

.top1:focus {
    background-color: #14BEDA !important;
    border: none !important;
    outline: none !important;  
}

.top1:hover {
    background-color: #14BEDA !important;
}

.width1 {
    width: 500px !important;
}
.p-button:focus {
    box-shadow: none;
}

.p-button.p-button-rounded {
    padding: 15px;
    font-family: inherit;
    font-weight: lighter;
    padding: 0px, 24px, 10px, 24px !important;
}

</style>