<template>
    <h1>Current: dynamic tables</h1>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="px-4">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        Table sample design
        <p class="mt-2 text-sm text-gray-700">Table description goes here or maybe a <code class="bg-red-200/50 px-0.5 rounded px-1">slot</code>.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <div class="mt-1 relative rounded-md shadow-sm">
          <input type="text" name="account-number" id="account-number" class="focus:ring-churpy-green focus:border-churpy-green block w-full dark:bg-churpy-night-box dark:border-gray-500 pr-10 sm:text-sm border-gray-300 rounded-md leading-3 py-1.5" placeholder="Search records...">
          <div class=" flex absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
            <!-- Heroicon name: solid/question-mark-circle -->
            <i class="fa-solid fa-search dark:text-gray-600"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 md:rounded-lg h-80 overflow-y-auto">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-200 dark:bg-churpy-dark sticky z-10 top-0">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 dark:text-gray-400 sm:pl-6">Invoice ID</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-churpy-dark dark:text-gray-400">Date</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Currency</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Invoice Amount</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Reconciled Amount</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">GL/Bank Account</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Customer</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Recon. Status</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-400">Source</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:bg-churpy-dark/60 h-9 overflow-auto">
                <tr :key="index" @click="rowClicked(record)" v-for="(record, index) in data" class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all cursor-pointer">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-400 sm:pl-6">
                  {{record.id}}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{record.date}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{record.ccy}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-bold">
                    {{$filters.number(record.amount,'0.00',{ thousandsSeparator: ',' })}}
                  </span>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span class="text-churpy-green font-bold">{{$filters.number(record.recon_amount, '0.00')}}</span>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{record.gl}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">{{record.customer}}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span class="inline-flex items-center px-2 shadow-md rounded-full text-[9px] font-bold uppercase bg-red-500 text-white">{{record.recon_status}}</span>

                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span class="inline-flex items-center px-2 shadow-md rounded-full text-[9px] font-bold uppercase bg-green-500 text-white"> {{record.source}} </span>
                </td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
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
              </tbody>
            </table>
          </div>
        <!--pagination-->
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
              <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">97</span>
                  results
                </p>
              </div>
              <div class="flex items-center">
                <select class="h-fit py-1 top-0 mr-3 border-gray-400 rounded text-xs text-center align-middle focus:ring-churpy-green focus-visible:ring-churpy-green dark:bg-churpy-night-box dark:border-gray-500">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>50</option>
                  <option>100</option>
                </select>

                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-churpy-night-box dark:border-gray-500 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: solid/chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a href="#" aria-current="page" class="z-10 bg-churpy-green/30 border-churpy-green text-churpy-dark relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-churpy-night-box dark:text-churpy-green dark:border-gray-500"> 1 </a>
                  <a href="#" class="bg-white border-gray-300 hover:bg-churpy-green/30 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium dark:bg-churpy-night-box dark:border-gray-500"> 2 </a>
                  <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-churpy-green/30 dark:bg-churpy-night-box dark:border-gray-500"> ... </span>
                   <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-churpy-green/30  dark:bg-churpy-night-box dark:border-gray-500"> 9 </a>
                  <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-churpy-green/30 dark:bg-churpy-night-box dark:border-gray-500"> 10 </a>
                  <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-churpy-green/30 hover:bg-gray-50 dark:bg-churpy-night-box dark:border-gray-500">
                    <span class="sr-only">Next</span>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default{
    name: "WorkArea"
}
</script>

<script setup>
import {ref} from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
const data = ref([
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Customer X', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
  {id:'910043527', date:'29/03/2022', ccy:'KSH',amount:340000, recon_amount:0, gl:'GL-34434534', customer:'Unga farmcare LTD - Nairobi Feeds', recon_status: 'pending',source:'SAP'},
])
 function rowClicked(index){
   console.log(index)
   data.value[data.value.indexOf(index)].id = 'Clicked'
  // alert('Row clicked!', JSON.stringify(index))
 }
</script>