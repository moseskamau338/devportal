<template>
<div class="px-0 py-1">
  <table class="min-w-full divide-y divide-gray-300">
    <tbody class="divide-y divide-gray-200 bg-gray-100 dark:bg-churpy-dark/60 h-9 overflow-auto">
      <template :key="index" v-for="(record, index) in records">
        <tr class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all cursor-pointer">
          <template :key="ind" v-for="(field, ind) in fields" >
              <td v-if="ind === 0" class="whitespace-nowrap py-2 pl-8 text-sm font-medium relative text-gray-900 dark:text-gray-400 overflow-x-hidden truncate w-6">
                <span class="flex items-center">
                  <input type="checkbox" class="rounded mr-1 h-3 w-3 focus:ring-offset-1 text-churpy-green checked:bg-churpy-green focus:ring-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
                  <span>
                    <slot :name="field" v-bind:record="record">
                      {{record[field.key]}}
                    </slot>
                  </span>
                </span>
              </td>
               <td v-else class="whitespace-nowrap mx-2 px-3 py-2 w-[115px] overflow-x-hidden truncate text-left text-sm text-gray-500 dark:text-gray-400">
                  <!--field => row field-->
                  <!--headers[index].field => header index-->
                  <slot :name="field" v-bind:record="record">
                    {{record[field.key]}}
                  </slot>
                </td>
                <td v-if="actioned" class="whitespace-nowrap mx-2 px-3 py-2 w-[115px] overflow-x-hidden truncate text-right text-sm text-gray-500 dark:text-gray-400">
                  <slot name="row_actions" v-bind:record="record"></slot>
                </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</div>
</template>

<script>
import {inject, ref} from "vue";

export default {
  name: "ReconInnerTable",
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