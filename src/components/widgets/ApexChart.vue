<template>
<div class="w-full">
  <vue-apex-charts class="" type="bar" :options="options" :series="series"/>
</div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import {ref} from "vue";
export default {
  name: "ApexChart",
  components: {VueApexCharts},
  setup(){

    let series = ref([{
        name: 'SSPASS Data',
          data: [12000, 5000, 26000, 1000]
        }, {
          name: 'Bank Data',
          data: [10000, 4600, 22000, 1030]
      }])

      let options = ref({
        chart: {
        type: 'bar',
        height: 430,
          foreColor: 'gray'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          distributed: true,
        }
      },
      colors: [ // this array contains different color code for each data
        "#283044",
        "#FB923C",
        "#21C55D",
        "#F77171",
    ],
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ['Manual', 'Suggested', 'Auto', 'Pending'],
        labels: {style: {colors: 'gray'}},
      },
      yaxis: {labels: {style: {colors: 'gray'}}},
      legend: {labels: {style: {colors: 'gray'}}}
    });


    return {options, series}

  }
}
</script>

<style scoped>

</style>