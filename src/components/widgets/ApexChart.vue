<template>
<div class="w-full">
  <vue-apex-charts v-bind="$attrs" type="bar" :options="options" :series="series"/>
</div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import {ref} from "vue";
export default {
  name: "ApexChart",
  components: {VueApexCharts},
  props:{
    singleBar:{default:false, type:Boolean},
    theme:{default:'normal', type:String},
    horizontal:{default:false, type:Boolean},
    grid:{default:true, type:Boolean},
  },
  setup(props){
    let axisColor = 'gray';

    if (props.theme === 'light'){
      axisColor = 'white'
    }

    let series = ref([{
        name: 'SSPASS Data',
          data: [12000, 5000, 26000, 1000]
        },
    ])
    if (!props.singleBar){series.value.push( {name: 'Bank Data', data: [10000, 4600, 22000, 1030]})}

      let options = ref({
        chart: {
        type: 'bar',
        height: 430,
          foreColor: axisColor
      },
      grid: {
        show: props.grid,
      },
      plotOptions: {
        bar: {
          horizontal: props.horizontal,
          distributed: true,
           columnWidth: '50%',
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
        intersect: false,
      },
      xaxis: {
        categories: ['Manual', 'Suggested', 'Auto', 'Pending'],
        labels: {style: {colors: axisColor}},
      },
      yaxis: {labels: {style: {colors: axisColor}}},
      legend: {labels: {style: {colors: axisColor}}}
    });


    return {options, series}

  }
}
</script>

<style>
 .apexcharts-theme-light .apexcharts-tooltip{
   @apply text-gray-600
 }
</style>