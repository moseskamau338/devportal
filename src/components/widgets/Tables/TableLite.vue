<template>
    <div class="px-4 max-w-7xl">
        <span v-if="sumSelected().value">Totals: {{sumSelected().formated}}</span>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <slot name="header"></slot>
      </div>
      <div class="mt-4 sm:mt-0 md:ml-4 sm:ml-16 sm:flex-none">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="mt-4 flex flex-col mx-4" v-if="records.length > 0">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="ring-1 ring-black ring-opacity-5 md:rounded min-h-[150px] max-h-80 overflow-y-auto">
            <table class="min-w-full table-fixed divide-y divide-gray-300 border-2 border-transparent border-collapse">
              <thead class="bg-gray-200 dark:bg-churpy-dark whitespace-nowrap sticky z-0 top-0">
              <tr class="py-0">
                <th  v-for="(field, index) in headers" scope="col" class="px-2 min-w-2 group py-3 text-left text-xs font-semibold text-churpy-dark dark:text-gray-400">

                    <div class="relative flex items-start">
                      <div class="flex items-center h-5" v-show="selectable && index === 0">
                        <input id="selection" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-churpy-green border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="selection" class="font-medium">{{field.label || field.key}}</label>
                      </div>
                    </div>

                </th>
                <th v-if="actioned">
                  <span class="sr-only">actions</span>
                </th>

              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:bg-churpy-dark/60 h-9 overflow-auto">
                <tr :key="index" v-for="(record, index) in data" @click="rowClicked(record)"
                    class="dark:hover:bg-gray-300/20 hover:bg-gray-100/60 dark:odd:bg-gray-600 odd:bg-gray-100 transition-all cursor-pointer"
                    :class="[record.selected? 'border-l-2':'']">
                <td :key="ind" v-for="(field, ind) in headers" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                  <slot :name="field.key" v-bind:record="record">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5" v-if="selectable && ind === 0">
                        <input v-model="record.selected" id="innerSelection" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-churpy-green border-gray-300 rounded" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="innerSelection" class="font-medium">{{record[field.key]}}</label>
                      </div>
                    </div>
                  </slot>
                </td>

                <td v-if="actioned" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                  <slot name="row_actions" v-bind:record="record"></slot>
                </td>

              </tr>
              </tbody>
            </table>
          </div>

            <paginator :records="records.length" />

        </div>
      </div>
    </div>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4" v-else>
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              <span v-if="records.length === 0">
                <strong>Table has no records</strong>
              </span>
              <span v-if="records.length > 0">
                Your records structure might be incorrect
              </span>
            </p>
          </div>
        </div>
      </div>

  </div>

</template>

<script>
import {toRef} from "vue";
import { useTables } from "@/library/tables";
import Paginator from "@/components/widgets/tables/Paginator.vue";

export default {
  name: "TableLite",
  components: {Paginator},
  props:{
    selectable:{default:false, type:Boolean},
    headers:{required:true, type:Array},
    actioned:{default:false, type:Boolean},
    records:{
      required:true,
      type:Array,
      default:[]
    }
  },
  setup(props){
    let data = toRef(props,"records")
    const {selectRow, sumSelected} = useTables()

    function rowClicked(record){
      if (props.selectable){selectRow(record)}
    }


    return {rowClicked, data, sumSelected}

  }

}
</script>

<style scoped>

</style>