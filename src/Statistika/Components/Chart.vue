<template>
    <div>
        <canvas id="myChart" class="chart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

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
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [100, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
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

</style>