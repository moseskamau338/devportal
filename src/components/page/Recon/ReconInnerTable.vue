<template>
   <template :key="index" v-for="(record, index) in records">
        <tr id="rec" class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all text-left cursor-pointer border-l-2 border-l-churpy-green odd:bg-gray-200 odd:dark:bg-gray-700">
          <td class="whitespace-nowrap py-2 pl-2 pr-3 text-sm font-medium relative text-gray-900 dark:text-gray-400 sm:pl-8 w-[115px] overflow-x-hidden truncate group">


            <span class="flex items-center">
              <input type="checkbox" class="rounded mr-1 h-3 w-3 focus:ring-offset-1 focus:ring-churpy-green text-churpy-green checked:bg-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
              <span>{{record.transaction_ref}}</span>
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
      </template>
</template>

<script>
import {inject, ref} from "vue";
import Badge from "@/components/parts/Badge.vue";
export default {
  name: "ReconInnerTable",
  components:{
    Badge
  },
  props:{
    actioned:{default: false},
    fields:{required: true, type: Array}
  },
  setup(){
    const helpers = inject('helpers')

    const records = ref([
      {transaction_ref:'TR-235628-23t6276', date:'12/3/22', currency:'KES', amount:3443450, reconciled_amount:4783682, gl_account:'GL-56273GJ67', customer:'Customer N', recon_status:'pending', source:'ERP',show_nested:false},
    ])

    return {records, currency:helpers.currency}
  }
}
</script>

<style scoped>

</style>