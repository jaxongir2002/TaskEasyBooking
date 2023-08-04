<template>
  
    <div class="card flex justify-content-center relative w-52 m-auto mb-2">
      <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
      <h3 class="center w-2/12 text-center">
        <span class="ms-4 text">
            90%
        </span>
        Остаток
      </h3>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Chart from 'primevue/chart';
  
  onMounted(() => {
    chartData.value = setChartData();
  });
  
  const chartData = ref();
  const chartOptions = ref({
    cutout: '60%'
  });
  
  const setChartData = () => {
    return {
      datasets: [
        {
          data: [540, 100],
          backgroundColor: ['#00B5D7', '#fff', '#54C6F70F'],
          hoverBackgroundColor: ['#54C6F70F', '', 'red']
        }
      ]
    };
  };
  </script>
  
  <style scoped>
.center{
    position: absolute;
    top: 80px;
    left: 63px;
}

  </style>