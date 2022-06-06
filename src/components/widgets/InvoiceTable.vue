<template>
    <TableLite :records="data" :headers="fields" actioned class="mt-8">

        <!--filters-->

        <template #header>
          <slot name="headerx">
            <h2 class="font-bold my-1">Filters</h2>
            <div class="flex flex-col md:flex-row space-y-1 md:space-y-reverse md:divide-x md:divide-gray-400">
              <div class="w-max px-2">
               <litepie-datepicker  as-single use-range v-model="dateValue">
                 <c-button variant="dark" class="text-xs">
                   <i class="fa-solid fa-calendar-days mr-1 text-md"></i>
                   Transaction Date
                 </c-button>
               </litepie-datepicker>

              </div>

              <div class="w-max px-2">
               <litepie-datepicker  as-single use-range v-model="dateValue">
                 <c-button variant="dark" class="text-xs">
                   <i class="fa-solid fa-calendar-days mr-1 text-md"></i>
                   Value Date
                 </c-button>
               </litepie-datepicker>
              </div>

              <div class="w-max px-2">
                 <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton
                      class="inline-flex w-full justify-center items-center rounded-md bg-churpy-dark px-4 py-1 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all"
                    >
                      <i class="fa-solid fa-check-square mr-2 hover:text-white" aria-hidden="true"></i>
                      Reconciliation Status

                      <i class="fa-solid fa-chevron-down ml-2 hover:text-white" aria-hidden="true"></i>
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
                    >
                      <div :key="index" v-for="(status, index) in ['USER','USER-P','PENDING','AUTO']" class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active ? 'bg-gray-300' : 'text-gray-900',
                              'group flex w-full items-center px-2 py-1 text-sm',
                            ]"
                          >
                            {{ status }}
                          </button>
                        </MenuItem>

                      </div>

                    </MenuItems>
                  </transition>
                </Menu>
              </div>

            </div>
          </slot>
        </template>
        <template #actions>
          <div class="flex items-center">
            <div class="mt-1 relative rounded-md">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa-solid fa-search text-lg text-gray-400"></i>
              </div>
              <input type="text" name="query" id="text" class="focus:ring-green-500 focus:border-green-500 block w-[90%] focus:w-full pl-10 sm:text-sm border-gray-300 rounded-md transition-all dark:bg-churpy-night dark:border-gray-500" placeholder="Search transactions" />
            </div>

          <!--  export-->
          <ExportButton />

          </div>


        </template>

        <template #paid="data">
          <Badge :themes="[{name:'tentative', status:'warning'}]" :status="data.record.recon_status" />
        </template>

         <template #recon_status="data">
           <Badge :status="data.record.recon_status" />
        </template>


        <template #row_actions>
          <div class="flex items-center space-x-2 justify-start">
            <router-link to="/invoice/marketplace/40000022/Invoice Y" class="w-6 h-6 hover:shadow-md hover:scale-105 transition-all rounded-full bg-green-100 flex justify-center items-center p-2"><i class="fa-solid fa-eye text-green-600 text-xs"></i></router-link>

            <!--<button class="w-6 h-6 hover:shadow-md hover:scale-105 transition-all rounded-full bg-red-200 flex justify-center items-center p-2"><i class="fa-solid fa-trash-alt text-red-600 text-xs"></i></button>-->
          </div>
        </template>
      </TableLite>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import LitepieDatepicker from 'litepie-datepicker-tw3'
import Badge from "@/components/parts/Badge.vue";
import CButton from "@/components/parts/CButton.vue";
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import ExportButton from "@/components/parts/ExportButton.vue";

import {inject, ref} from "vue";
export default {
  name: "InvoiceTable",
  components:{
    ExportButton,
    TableLite,
    CButton,
    Badge,
     Menu, MenuButton,
    MenuItems, MenuItem,
    LitepieDatepicker
  },
  setup(){
      const helpers = inject('helpers')

      const dateValue = ref([]);
      const data = ref([
        {id:'91004300', date:'29/03/2022',amount:'34,200', description:'Some description', paid:'pending', recon_status: 'pending'},
        {id:'938629193', date:'29/03/2022',amount:'43,442', description:'Another desc', paid:'tentative', recon_status: 'suggested'},
        {id:'92001200', date:'29/03/2022',amount:'23,200', description:'Some description', paid:'pending', recon_status: 'suggested'},
      ])


      const fields = ref([
          {type:'text',key:'id',label: 'Invoice ID', filterable: true, searchable:false},
          {type:'date',key:'trans_date',label: 'Date', filterable: true, searchable:false},
          {type:'number',key:'amount',label: 'Amount', filterable: true, searchable:false},
          {type:'text',key:'description',label: 'Description', filterable: true, searchable:false},
          {type:'text',key:'paid',label: 'Paid Status', filterable: true, searchable:false},
          {type:'text',key:'recon_status',label: 'Recon. Status', filterable: true, searchable:false},
          {type:'text',key:'action',label: 'Edit', action: true},
        ])

      return {data, fields,dateValue, helpers}
    }
}
</script>

<style scoped>

</style>