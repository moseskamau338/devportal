<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
    <!--status summary-->
    <div class="bg-white dark:bg-churpy-night-box col-span-12 lg:col-span-5 rounded px-3 py-2">
      <header class="flex justify-between">
        <h3 class="font-bold text-lg">Status Summary</h3>

        <span class="opacity-70 text-xs">12th May - 1st June</span>
      </header>
      <div class="mt-4">
        <div class="text-xs ">
          <h3 class="space-x-2">
            <span class="text-xl font-semibold">12,000</span>
            <small >Invoices</small>
          </h3>

          <h2 class="text-xs mt-4">Summary by value</h2>
          <div id="progress" class="mt-2 flex space-x-2 relative rounded-full h-2">
            <tool-tip :key="status.title+'_'+index" v-for="(status, index) in status_summary" :content="`${status.percentage}% | ${status.tooltip_name}`" :style="`width: ${status.percentage}%`" :class="status.color" class="h-2 rounded-full"></tool-tip>
          </div>

          <!--Key-->
          <div class="flex flex-grow flex-wrap mt-4">
            <span :key="status.tooltip_name+'_'+index" v-for="(status, index) in status_summary" class="flex h-4 ml-2 items-center">
              <span :class="status.key_color" class="text-5xl">&bullet;</span>
              <small>{{ status.title }}</small>
            </span>

          </div>

        </div>

      </div>
    </div>

    <!--stats breakdown-->
    <div class="bg-gradient-to-tr from-green-500 via-green-700 to-churpy-night/90 text-white col-span-12 lg:col-span-7 rounded shadow-md px-3 py-2">
      <div class="flex flex-row py-1 items-center">
        <h2 class="font-bold text-lg ml-2">Status Breakdown</h2>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-12">
        <div class="col-span-12 xl:col-span-4 flex flex-col">
          <p class="text-xs">
            Here is a small record breakdown as reconciliation happens.
          </p>
          <div class="flex flex-col mt-4">
            <dl class="flex text-sm space-x-2" :key="index" v-for="(status, index) in status_summary">
              <dt class="font-light">{{status.tooltip_name}}</dt>
              <dd>- {{status.records}} <small>records</small></dd>
            </dl>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-8">
          <ApexChart
              height="100%"
              theme="light"
              :singleBar="true" />
        </div>
      </div>
    </div>

  </div>

  <section class="w-full mt-4">
    <h3 class="font-bold text-lg">Invoice Feed</h3>
    <div class="grid grid-cols-1 xl:grid-cols-12 xl:w-[70%] bg-white dark:bg-churpy-night-box shadow-md rounded p-4">
      <div class="lg:col-span-6">
        <p class="text-xs">To perform a match, <b>select</b> the required records below and depending on the difference, <i>one action will be activated</i></p>

        <div class="flex flex-wrap whitespace-pre-wrap mt-4 md:space-y-reverse space-x-1">
          <c-button variant="success" class="my-2 lg:my-0">
            <i class="fa-duotone fa-layer-group mr-1"></i>
           Bulk Match
         </c-button>
          <c-button variant="warning" class="my-2 lg:my-0">
           <span class="mr-1 w-4 h-4 border rounded-sm">
             <div class="bg-white h-full w-1/2"></div>
           </span>
           Partial Match
         </c-button>
         <c-button variant="success" class="my-2 lg:my-0">
           <i class="fa-solid fa-circle-check mr-1"></i>
           Match
         </c-button>
        </div>
      </div>
      <div class="xl:col-span-6 text-sm">
        <table class="mt-8 xl:mt-0 xl:ml-4">
          <tbody>
          <tr>
            <td class="font-bold text-right">Total Invoice Amount:</td>
            <td class="font-bold text-left text-green-600 pl-2">KES {{ currency(2340870.00) }}</td>
          </tr>
          <tr>
            <td class="font-bold text-right">Bank Transactions:</td>
            <td class="font-bold text-left text-orange-400 pl-2">KES {{ currency(2340870.00) }}</td>
          </tr>
          </tbody>
          <tfoot class="pt-2 border-t">
            <tr>
              <td class="font-bold text-right">Difference:</td>
              <td class="font-bold text-left text-green-600 pl-2">KES 0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </section>

  <TabGroup as="div" class="mt-8">
    <TabList class="flex w-full flex-col xl:flex-row xl:items-center xl:justify-between space-y-3 xl:space-y-reverse">
      <div class="flex space-x-2 flex-wrap items-center">
        <div class="flex items-center py-2 px-3 space-x-1 dark:bg-churpy-dark bg-gray-200 rounded-lg">
          <Tab
            v-for="category in categories"
            as="template"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-fit px-4 py-1.5 text-xs font-medium rounded-sm relative',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-churpy-green dark:ring-offset-churpy-night ring-white ring-opacity-60 transition-all duration-800 ease-out',
                selected
                  ? 'bg-white dark:bg-churpy-night dark:text-gray-400 shadow'
                  : 'bg-gray-300 dark:bg-gray-800 text-churpy-dark dark:text-gray-500',
              ]"
            >
              {{ category.name }}
              <i :class="category.state_color" class="fa-solid fa-circle text-[8px] absolute -top-0.5 -right-0.5"></i>
            </button>
          </Tab>
        </div>

        <!--Rules here-->
        <RulesButton class="h-fit mt-2 lg:mt-0">Rules</RulesButton>
        <ExportButton class="mt-2 lg:mt-0 xl:hidden" />
      </div>

      <div class="flex space-x-2 items-center flex-wrap">
        <div class="mt-1 relative rounded-md shadow-sm w-full xl:w-[300px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm"> <i class="fa-solid fa-search"></i> </span>
            </div>
            <input type="text" class="dark:bg-churpy-night-box dark:border-gray-500 focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-28 sm:text-sm border-gray-300 rounded-md" placeholder="Search records...">
            <div class="absolute my-2 inset-y-0 right-0 flex items-center">
              <span class="pr-1">
                <litepie-datepicker  as-single use-range v-model="period">
                 <c-button variant="dark" class="text-xs border border-gray-400 bg-transparent dark:text-gray-400 text-churpy-night-box shadow-none hover:bg-transparent hover:text-white">
                   <i class="fa-solid fa-calendar-days mr-1 text-md"></i>
                   Date Range
                 </c-button>
               </litepie-datepicker>
              </span>
            </div>
          </div>
        <ExportButton class="invisible xl:visible" />
      </div>

    </TabList>

      <TabPanels as="section" class="mt-2 w-full h-full mt-8 p-2">
        <template :key="category.name" v-for="category in categories">
            <TabPanel>
             <keep-alive>
               <component :is="category.component" :key="category.name" />
             </keep-alive>
            </TabPanel>
        </template>
      </TabPanels>
  </TabGroup>


</template>

<script>
import LitepieDatepicker from 'litepie-datepicker-tw3';
import CButton from "@/components/parts/CButton.vue";
import ToolTip from "@/components/parts/ToolTip.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import {inject, ref} from "vue";
import ApexChart from "@/components/widgets/ApexChart.vue";
import ReconTable from "@/components/page/ReconTable.vue";
import RulesButton from "@/components/parts/RulesButton.vue";
import Unreconciled from "@/components/page/Recon/Unreconciled.vue";
import Partial from "@/components/page/Recon/Partial.vue";
import Reconed from "@/components/page/Recon/Reconed.vue";
import ExportButton from "@/components/parts/ExportButton.vue";

export default {
  components: {
    ExportButton,
    Unreconciled,
    Partial, Reconed,
    RulesButton,
    ApexChart,
    ToolTip, CButton,
    LitepieDatepicker, TabGroup,
    TabList, Tab, TabPanels, TabPanel},
  setup(){
    const helpers = inject('helpers')
    const period = ref({})
    const categories = ref([
      {name:'Unreconciled Records', state_color:'text-red-400', component:Unreconciled},
      {name:'Partially Reconciled', state_color:'text-orange-400', component: Partial},
      {name:'Reconciled Records', state_color:'text-green-600', component: Reconed}
  ])

    const status_summary = ref([
      {title:'Automatic Reconciled', key_color:'text-green-600', color:'bg-churpy-green', tooltip_name:'Auto', percentage:32,amount:23456124, records:3456},
      {title:'Manually Reconciled', key_color:'text-churpy-dark', color:'bg-churpy-dark dark:bg-gray-500', tooltip_name:'Manual', percentage:6,amount:49000, records:67},
      {title:'Suggested Matches', key_color:'text-orange-400', color:'bg-orange-400', tooltip_name:'Suggested', percentage:12,amount:120000, records:650},
      {title:'Pending Reconciliation', key_color:'text-red-400', color:'bg-red-400', tooltip_name:'Pending', percentage:9,amount:56000, records:400},
    ])

    return {period, status_summary, categories, currency:helpers.currency}
  }
}
</script>