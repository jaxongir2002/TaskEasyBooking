<template>
    <div>
        <div class="card flex justify-content-center gap-2 mt-3">
            <label class="switch">
  <input type="checkbox" v-model="checked2">
  <span class="slider"></span>
</label>
        <span class="mt-1 text1">± 1 день</span>
        <label class="switch">
  <input type="checkbox" v-model="checked">
  <span class="slider"></span>
</label>
        <span class="mt-1 text1">Наличие места</span>
      
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false);
const checked2 = ref(false);
</script>

<style scoped>
.text1 {
    font-family: 'Caprasimo', cursive;
    font-family: 'Inter', sans-serif;

}
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0efef;
  transition: .4s;
  border-radius: 120px;
  
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.204);
  transition: .4s;
}

input:checked + .slider {
  background-color: #18BCDB;
}

input:focus + .slider {
  box-shadow: 0 0 1px #18BCDB;
}

input:checked + .slider:before {
  transform: translateX(1.5em);
}

</style>