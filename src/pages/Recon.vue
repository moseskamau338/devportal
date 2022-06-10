<template>
  <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
    <div class="bg-gradient-to-tr from-green-500 via-green-700 to-churpy-night/90 text-white md:col-span-3 lg:col-span-6 rounded shadow-md px-3 py-2">
      <div class="flex flex-row py-1 items-center">
        <span class="h-1 w-[30px] bg-white rounded-full"></span>
        <span class="h-1 w-[20px] bg-white rounded-full ml-1"></span>
        <h2 class="font-bold text-lg ml-2">Reconciliation</h2>
      </div>

      <div>

        <div class="flex">
          <div class="h-20 w-20 p-2 rounded-full flex items-center justify-center bg-white/60 ring-2 ring-offset-1 ring-green-300 flex-shrink-0">
            <img src="/images/pages/engine.png" class="w-14" alt="">
          </div>
          <p class="text-sm px-4">
            <b>Churpy’s Reconciliation Module</b> provides a robust
            <b>A.I driven</b> technology base to consume a vast variety of datasets and
            provide accurate and real-time reconciliations.
          </p>
        </div>
        <div class="mt-2 flex justify-end items-baseline space-x-2">
          <span class="underline font-semibold text-xs">View the documentation</span>
          <router-link :to="{name:'recon-engine'}">
            <c-button variant="dark" class="items-center group">Reconciliation <span class="ml-2 group-hover:translate-x-0.5 transition-all">&rightarrow;</span></c-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-churpy-night-box md:col-span-3 lg:col-span-6 rounded px-3 py-2">
      <h3 class="font-bold text-lg">Rules Engine</h3>
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="text-xs lg:col-span-5">
          <h3 class="space-x-2">
            <span class="text-lg font-semibold">13</span>
            <span class="text-[10px]">Rules</span>
          </h3>
          <div class="flex items-baseline space-x-1">
              <dl class="text-[10px]">Active:</dl>
              <dd class="font-bold">4 (31%)</dd>
              <dl class="text-[10px]">Inactive:</dl>
              <dd class="font-bold">9 (69%)</dd>
          </div>
          <div id="progress" class="mt-5 flex space-x-2 relative w-[80%] rounded-full h-2">
              <tool-tip content="31%" style="width: 31%" class="h-2 rounded-full bg-green-500"></tool-tip>
            <tool-tip style="width: 69%" content="69%" class="h-2 rounded-full bg-orange-400"></tool-tip>
          </div>
          <!--Key-->
          <div class="flex space-x-2">
            <span class="flex items-center">
              <span class="text-5xl text-green-600">&bullet;</span>
              <span class="font-bold">Auto</span>
            </span>

            <span class="flex items-center">
              <span class="text-5xl text-orange-400">&bullet;</span>
              <span class="font-bold">Suggested Rules</span>
            </span>
          </div>



        </div>
        <div class="lg:col-span-7 relative">
          <p class="text-sm">
            <b>Our rules</b> instruct the reconciliation
            engine on how to match different invoice and payment scenarios. Think of it
            as a <b>learning experience</b>. The better the rules, the better
            the engine performs. <a href="#" class="text-green-600 hover:underline">Read more.</a>
          </p>

          <div class="flex justify-end my-2">
            <RulesButton />
          </div>

        </div>
      </div>
    </div>
  </div>

  <section class="bg-white dark:bg-churpy-night-box shadow-md rounded w-full h-full mt-8 p-4">
    <header class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 class="font-bold text-lg">Reconciliation Summary</h2>
      <span>
        <litepie-datepicker class="md:w-[250px]" v-model="period" />
      </span>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-5 px-4">
          <h3 class="font-bold text-gray-500 mt-4">Totals</h3>
        <div class="flex space-x-8 mt-2">
          <dl>
            <dt class="text-xs md:text-md font-light">ERP</dt>
            <dd class="text-lg md:text-3xl font-light">KSH 1.902B</dd>
          </dl>

          <dl>
            <dt class="text-xs md:text-md font-light">Bank Statements</dt>
            <dd class="text-lg md:text-3xl font-light">KSH 1.932B</dd>
          </dl>
        </div>

      <!--chart-->
        <div class="w-full mt-2 mr-8">
          <ApexChart />
        </div>


      </div>
      <div class="col-span-7 grid grid-cols-1grid-cols-1 md:grid-cols-2 border-l border-l-gray-400 px-5 mt-4 pb-5">
        <div class="col-span-1 px-2 border lg:border-none rounded">
          <h2 class="font-semibold mb-2 shadow p-2">ERP Breakdown</h2>

          <div class="flex flex-col space-y-5 max-h-72 overflow-y-auto">
            <div :key="index" v-for="(status, index) in status_summary">
              <header class="flex space-x-2">
                <span :class=" status.color " class="h-6 w-6 rounded-full flex items-center justify-center">
                  <i :class="status.icon" class="fa-solid text-sm text-white"></i>
                </span>
                <h4 class="font-semibold"> {{ status.title }}</h4>
              </header>
              <div class="mt-2 pl-4 mr-5">
                <div class="flex flex-col">
                  <span>Ksh {{ status.amount }}</span>
                  <span>Records: <span class="font-semibold">{{ status.records }}</span></span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <tool-tip :content="`${status.percentage}%`">
                    <div :class="status.color" class="h-2.5 rounded-full" :style="`width: ${status.percentage}%`"></div>
                  </tool-tip>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 px-2 border lg:border-none rounded mt-5 md:ml-2 md:mt-0">
          <h2 class="font-semibold mb-2 shadow p-2">Bank Records Breakdown</h2>
          <div class="flex flex-col space-y-5 max-h-72 overflow-y-auto">
            <div :key="index" v-for="(status, index) in status_summary">
              <header class="flex space-x-2">
                <span :class=" status.color " class="h-6 w-6 rounded-full flex items-center justify-center">
                  <i :class="status.icon" class="fa-solid text-sm text-white"></i>
                </span>
                <h4 class="font-semibold"> {{ status.title }}</h4>
              </header>
              <div class="mt-2 pl-4 mr-5">
                <div class="flex flex-col">
                  <span>Ksh {{ status.amount }}</span>
                  <span>Records: <span class="font-semibold">{{ status.records }}</span></span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <tool-tip :content="`${status.percentage}%`">
                    <div :class="status.color" class="h-2.5 rounded-full" :style="`width: ${status.percentage}%`"></div>
                  </tool-tip>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>

</template>

<script>
import LitepieDatepicker from 'litepie-datepicker-tw3';
import CButton from "@/components/parts/CButton.vue";
import ToolTip from "@/components/parts/ToolTip.vue";
import {ref} from "vue";
import ApexChart from "@/components/widgets/ApexChart.vue";
import RulesButton from "@/components/parts/RulesButton.vue";

export default {
  components: {RulesButton, ApexChart, ToolTip, CButton, LitepieDatepicker},
  setup(){
    const period = ref({})
    const status_summary = ref([
      {title:'Automatic Reconciliations', color:'bg-churpy-green', icon:'fa-bolt', percentage:32,amount:23456124, records:3456},
      {title:'Suggested Matches', color:'bg-orange-400', icon:'fa-list-check', percentage:12,amount:120000, records:650},
      {title:'Manual Matches', color:'bg-churpy-dark dark:bg-gray-500', icon:'fa-hammer', percentage:6,amount:49000, records:67},
      {title:'Pending Records', color:'bg-red-400', icon:'fa-exclamation', percentage:9,amount:56000, records:400},
    ])

    return {period, status_summary}
  }
}
</script>