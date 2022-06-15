<template>
  <section class="px-4 py-5 bg-white dark:bg-churpy-night-box rounded shadow-md min-h-full">
    <header class="flex border-b border-b-gray-200">
      <select name="accounts" class="border-none dark:bg-churpy-night-box focus:border-none focus:outline-none focus:ring-0 font-bold text-green-600">
        <option>
          Company X Ltd
        </option>
        <option>Company Y</option>
        <option>Client Z</option>
      </select>
    </header>

      <div class="mt-5 ml-4">
        Applied filters
        <div class="w-fit flex flex-col md:flex-row px-4 py-2 space-y-1 md:space-x-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-300 text-gray-800 hover:scale-105 hover:shadow transition-all w-fit">
            <span>Transaction date: 23/4/22</span>
            <button class="flex h-4 w-4 rounded-full bg-gray-200 text-gray-500 items-center justify-center ml-2 hover:bg-red-400 hover:text-red-700 transition-all">
              <i class="fa-solid fa-close"></i>
            </button>
          </span>

          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-300 text-gray-800 hover:scale-105 hover:shadow transition-all w-fit">
            <span>Value date: 23/4/22</span>
            <button class="flex h-4 w-4 rounded-full bg-gray-200 text-gray-500 items-center justify-center ml-2 hover:bg-red-400 hover:text-red-700 transition-all">
              <i class="fa-solid fa-close"></i>
            </button>
          </span>

          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-300 text-gray-800 hover:scale-105 hover:shadow transition-all w-fit">
            <span>Status: 'USER'</span>
            <button class="flex h-4 w-4 rounded-full bg-gray-200 text-gray-500 items-center justify-center ml-2 hover:bg-red-400 hover:text-red-700 transition-all">
              <i class="fa-solid fa-close"></i>
            </button>
          </span>

        </div>
      </div>
      <!--<template #title>Overview of bank transactions discovered by Churpy</template>-->
      <InvoiceTable :headers="fields" :records="data" />
  </section>

</template>

<script>
import {inject, ref} from "vue";

//get the date picker docs here: https://litepie.com/
import CButton from "@/components/parts/CButton.vue";
import InvoiceTable from "@/components/widgets/InvoiceTable.vue";

export default{
    name: "ExpectedPayments",
  components:{
    InvoiceTable,
    CButton,
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
        ])

      return {data, fields,dateValue, helpers}
    }
  }
</script>