<template>
    <div class="relative">
        <canvas id="myChart" class="chart"></canvas>
        <h2 class="center text-2xl w-1/2 text-center font">
          321,32 млн UZS
        </h2>

    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const image = document.createElement('h1');

image.innerHTML = ''
const plugin = {
  id: 'customCanvasBackgroundImage',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 2 - image.width / 2;
      const y = top + height / 2 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};


  const data = {
 
  datasets: [{
    label: 'My First Dataset',
    data: [30, 100, 50,30],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgba(39, 174, 96, 1)'

    ],
   
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  plugins: [plugin],
};
  onMounted(() => {
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  })
</script>

<style scoped>
.center{
  position: absolute;
  top: 120px;
  right: 73px;

}
.font{
    font-family: 'Caprasimo', cursive;
font-family: 'Inter', sans-serif;
font-family: 'Mulish', sans-serif;
font-weight: 500;
}
</style>