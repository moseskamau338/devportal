<template>
  <div>
    <div v-if="records.length > 0" class="flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 flex justify-center">
        <div class="inline-block relative w-full mx-6 py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 md:rounded max-h-80 overflow-y-auto shadow-md">
            <table class="min-w-full divide-y divide-gray-300 table-fixed">
              <thead class="bg-gray-200/50 dark:bg-churpy-dark backdrop-blur sticky z-10 top-0 shadow-md">
              <tr class="py-0">
                <th :key="field.key+index" v-for="(field, index) in fields" scope="col" class="px-2 min-w-2 group py-3 text-left text-xs font-semibold text-churpy-dark dark:text-gray-400 whitespace-nowrap">
                    <span v-if="!field.action" class="relative flex items-center justify-between ">
                      <input v-show="field.selectable" type="checkbox" class="w-4 h-4 rounded-sm focus:ring-offset-1 focus:ring-churpy-green focus:bg-churpy-green focus:border-churpy-green text-churpy-green mr-1"/>

                      <span>{{field.label}}</span>

                      <button class="relative">
                        <i class="fa-solid fa-sort text-gray-300 dark:text-gray-700 cursor-pointer ml-3 group-hover:scale-105 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-all"></i>
                      </button>

                    </span>

                  <span v-else class="sr-only">Edit</span>
                </th>

                <th scope="col" class="px-2 min-w-2 group py-3 text-left text-xs font-semibold text-churpy-dark dark:text-gray-400 whitespace-nowrap">
                  <span class="mx-5">Actions</span>
                </th>
              </tr>
              <tr>
                <th :key="field.key+index"  v-for="(field, index) in fields" scope="col" class="min-w-2 px-1 text-left text-xs text-churpy-dark dark:text-gray-400">
                    <litepie-datepicker placeholder="Filter Date" v-slot="{ value, placeholder, clear }" v-if="field.type === 'date'" as-single use-range v-model="field.query">
                      <div class="flex items-center">
                        <button class="text-gray-400 px-2 py-1 bg-white dark:bg-churpy-night-box rounded whitespace-nowrap w-24 overflow-x-hidden truncate">
                          {{ value || placeholder }}</button>
                        <button v-if="value" @click="clear" class="flex h-4 w-4 rounded-full items-center justify-center p-2 bg-gray-300 hover:bg-gray-400/60 transition-all dark:bg-churpy-night-box ml-2">
                          <i class="fa-solid fa-close"></i>
                        </button>
                      </div>
                      </litepie-datepicker>

                    <div v-if="field.type === 'text' || field.type === 'number'" class="relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-300 dark:text-gray-600 sm:text-xs"> <i class="fa-solid fa-search"></i> </span>
                      </div>
                      <input :type="field.type" v-model="field.query" class="focus:ring-green-500 focus:border-green-500 block w-full pl-7 text-xs border-gray-300 placeholder-gray-400 dark:bg-churpy-night-box dark:border-gray-600 rounded leading-none py-1" :placeholder="`Search ${field.label}`" aria-describedby="price-currency" />
                    </div>

                    <select v-if="field.type === 'select' && field.options" class="mt-1 block w-full pl-3 pr-10 border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 py-1.5 leading-none text-xs rounded dark:bg-churpy-night-box dark:border-gray-600">
                      <option :key="opt+index" v-for="(opt, index) in field.options">{{ opt }}</option>
                    </select>

                </th>
                <th></th>
              </tr>
              </thead>
              <tbody id="recon" class="divide-y divide-gray-200 bg-white dark:bg-churpy-dark/60 h-9 overflow-auto">
              <template :key="index" @click="rowClicked(record)" v-for="(record, index) in records">
                <tr id="rec" :class="{'border-l-2 border-l-churpy-green odd:bg-gray-200 odd:dark:bg-gray-700 shadow-md' : record['show_nested'],
                      'even:bg-gray-200 even:dark:bg-gray-700' : !record['show_nested']}"
                    class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all text-left cursor-pointer">
                  <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium relative text-gray-900 dark:text-gray-400 sm:pl-8 max-w-[115px] overflow-x-hidden truncate group">

                    <button @click="record['show_nested'] = !record['show_nested']" class="invisible group-hover:visible absolute hover:shadow-md transition-all -ml-6 mt-1 h-4 w-4 rounded-full bg-gray-300 hover:bg-gray-400/70 focus:ring-1 focus:ring-churpy-green hover:dark:bg-gray-500 dark:bg-gray-600 flex items-center justify-center" :class="[record['show_nested'] ? 'hover:-translate-y-0.5' : 'hover:translate-y-0.5']">
                      <i class="fa-solid text-gray-600 dark:text-gray-300 text-xs" :class="[
                        record['show_nested'] ? 'fa-chevron-up' : 'fa-chevron-down'
                    ]"></i></button>

                    <span class="flex items-center">
                      <input type="checkbox" class="rounded mr-1 h-3 w-3 focus:ring-offset-1 focus:ring-churpy-green text-churpy-green checked:bg-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
                      <span>{{record.invoice_ref}}</span>
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500">{{record.date}}</td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500">{{record.currency}}</td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-right text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-bold">
                      {{currency(record.amount)}}
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-right text-sm text-gray-500">
                    <span class="text-churpy-green font-bold">{{currency(record.reconciled_amount)}}</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500">{{record.gl_account}}</td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500 truncate">{{record.customer}}</td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500">
                    <Badge :status="record.recon_status" class="text-xs" />
                  </td>
                  <td class="whitespace-nowrap px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500">
                    <span class="inline-flex tracking-widest items-center px-2 shadow-md rounded-full text-[9px] font-bold uppercase bg-green-500 text-white"> {{record.source}} </span>
                  </td>
                  <td class="relative whitespace-nowrap pl-3 py-2 pr-4 w-[115px] overflow-x-hidden truncate text-right text-sm font-medium sm:pr-6">
                    <div class="flex">
                     <span class="h-5 w-5 rounded-full flex justify-center items-center bg-green-200 mr-1 hover:bg-green-300 hover:
                     shadow-md hover:scale-105 cursor-pointer transition-all">
                       <i class="fa-solid fa-plus text-churpy-green text-[12px]"></i>
                     </span>
                      <span class="h-5 w-5 rounded-full flex justify-center items-center bg-green-200 hover:bg-green-300 hover:shadow-md hover:scale-105 cursor-pointer transition-all">
                       <i class="fa-solid fa-eye text-churpy-green text-[12px]"></i>
                     </span>
                    </div>
                  </td>
                </tr>

                 <ReconInnerTable
                     v-if="record['show_nested']"
                     :fields="trans_fields" />
              </template>
              </tbody>
            </table>
          </div>
          <!--pagination-->
         <div class="flex justify-between py-2 px-1 text-gray-400">
           <div id="paginator" class="flex flex-col lg:flex-row items-center">
            <div class="flex space-x-5 items-center">
              <button class="flex items-center justify-center hover:bg-gray-300 h-6 w-6 rounded-full transition-all focus:ring-1 focus:ring-green-500"><i class="fa-solid fa-chevron-double-left font-bold text-xs"></i></button>

              <div>
                <ul class="flex space-x-4 items-center">
                  <li :class="[
                      page === 1? 'h-6 w-6 flex items-center justify-center rounded-full bg-green-300/50 dark:text-green-200' : 'font-light',
                      'font-bold text-sm'
                  ]" v-for="page in [1,2,3,4,5]">
                    {{page}}
                  </li>
                </ul>
              </div>

              <button class="flex items-center justify-center hover:bg-gray-300 h-6 w-6 rounded-full transition-all focus:ring-1 focus:ring-green-500"><i class="fa-solid fa-chevron-double-right font-bold text-xs"></i></button>
            </div>
             <div class="flex items-center space-x-1">
               <p class="text-xs mr-2">Rows per page:</p>
               <select class="text-xs py-1 rounded leading-none border-gray-400 dark:bg-churpy-night-box focus:ring-1 focus:ring-churpy-green focus:border-none">
                 <option :key="index" v-for="(val, index) in [5,10,15,20,40,50,100]">{{val}}</option>
               </select>
             </div>
           </div>

           <c-button @click="toggleCollapse" variant="success" class="px-2 py-1">
             <i :class="[collapsed? 'fa-arrow-up-right-and-arrow-down-left-from-center' : 'fa-arrow-down-left-and-arrow-up-right-to-center'] " class="fa-solid mr-1"></i>
             {{collapsed? 'Expand' : 'Collapse All'}}
           </c-button>
         </div>
        </div>
      </div>
    </div>

    <Alert v-else class="mt-4 w-1/2">
      Your table has no records yet
    </Alert>

  </div>
</template>


<script>
import { Popover, PopoverButton, PopoverPanel,
TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot
} from '@headlessui/vue'

import Alert from "@/components/parts/Alert.vue";
import {ref, inject} from "vue";
import CButton from "@/components/parts/CButton.vue";
import LitepieDatepicker from 'litepie-datepicker-tw3';
import Badge from "@/components/parts/Badge.vue";
import ReconInnerTable from "@/components/page/Recon/ReconInnerTable.vue";
import {useTableStore} from '@/db/tables'

export default{
  name: "ReconTable",
  components:{
    ReconInnerTable,
    Badge,
    CButton,
    Alert, Popover, PopoverButton, PopoverPanel,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
    LitepieDatepicker, TransitionRoot
  },
  setup(){
     const tableStore = useTableStore();
    const helpers = inject('helpers')

    let fields = tableStore.invoice_fields

    let records = ref([
      {invoice_ref:'9923764783', date:'12/3/22', currency:'KES', amount:3443450, reconciled_amount:4783682, gl_account:'GL-56273GJ67', customer:'Customer N', recon_status:'pending', source:'ERP',show_nested:false},
      {invoice_ref:'562357283', date:'2/3/20', currency:'USD', amount:42456, reconciled_amount:786493, gl_account:'GL-56273GJ67', customer:'Customer X', recon_status:'suggested', source:'ERP',show_nested:false},
    ])

    function rowClicked(index){
      console.log(index)
    }

    let collapsed = ref(true) // all collapsed?
    function expandAll(){
      for (const record of records.value) {
        if (!record.show_nested){
          record.show_nested = true
        }
      }
      //set collapsed
      collapsed.value = false;
    }
    function collapseAll(){
      for (const record of records.value) {
        if (record.show_nested){
          record.show_nested = false
        }
      }
      collapsed.value = true;
    }

    function toggleCollapse(){
      collapsed.value?
        expandAll():
        collapseAll()
    }

    return {rowClicked, fields, trans_fields:tableStore.transaction_fields, records, currency: helpers.currency, toggleCollapse, collapsed}
  }
}



</script>