<template>

    <div class="px-4 mt-5 max-w-7xl">
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
          <div class="ring-1 ring-black ring-opacity-5 md:rounded h-fit overflow-y-auto">
            <table class="min-w-full table-auto divide-y divide-gray-300">
              <thead class="bg-gray-200 dark:bg-churpy-dark sticky z-10 top-0">
              <tr class="py-0">
                <th  v-for="(field, index) in headers" scope="col" class="px-2 min-w-2 group py-3 text-left text-xs font-semibold text-churpy-dark dark:text-gray-400">
                    <!--<i class="fa-solid fa-arrow-alt-down text-gray-400 cursor-pointer ml-0 mr-1 group-hover:scale-105 group-hover:text-gray-600 transition-all "></i>-->

                    <span v-if="!field.action" class="relative flex items-center justify-between">
                      <input v-show="field.selectable" type="checkbox" class="w-4 h-4 rounded focus:ring-offset-1 focus:ring-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
                      <span>{{field.label || field.key}}</span>

                       <!--<Popover v-slot="{ open }" class="relative">-->
                       <!--   <PopoverButton-->
                       <!--       :class="open ? '' : 'text-opacity-90'">-->
                       <!--     <i class="fa-solid fa-align-right text-gray-300 cursor-pointer ml-3 group-hover:scale-105 group-hover:text-gray-600 transition-all "></i>-->
                       <!--   </PopoverButton>-->

                       <!--   <transition-->
                       <!--       enter-active-class="transition duration-200 ease-out"-->
                       <!--       enter-from-class="translate-y-1 opacity-0"-->
                       <!--       enter-to-class="translate-y-0 opacity-100"-->
                       <!--       leave-active-class="transition duration-150 ease-in"-->
                       <!--       leave-from-class="translate-y-0 opacity-100"-->
                       <!--       leave-to-class="translate-y-1 opacity-0"-->
                       <!--   >-->
                       <!--     <PopoverPanel-->
                       <!--         class="absolute z-10 w-56 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"-->
                       <!--     >-->
                       <!--       <div-->
                       <!--           class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"-->
                       <!--       >-->
                       <!--         <div class="relative bg-white p-2">-->
                       <!--           <TabGroup>-->
                       <!--             <TabList class="flex p-1 space-x-1">-->
                       <!--               <Tab-->
                       <!--                   as="template"-->
                       <!--                   v-slot="{ selected }"-->
                       <!--               >-->
                       <!--                 <button-->
                       <!--                     :class="[-->
                       <!--                     'w-full py-1 text-xs font-medium transition-all',-->
                       <!--                     selected-->
                       <!--                       ? 'text-churpy-green border-b-2 border-churpy-green'-->
                       <!--                       : 'text-gray-700 hover:text-green-600/50',-->
                       <!--                   ]"-->
                       <!--                 >-->
                       <!--                   <i class="fa-solid fa-search"></i>-->
                       <!--                 </button>-->
                       <!--               </Tab>-->
                       <!--                <Tab-->
                       <!--                   as="template"-->
                       <!--                   v-slot="{ selected }"-->
                       <!--               >-->
                       <!--                 <button-->
                       <!--                     :class="[-->
                       <!--                     'w-full py-1 text-xs font-medium transition-all',-->
                       <!--                     selected-->
                       <!--                       ? 'text-churpy-green border-b-2 border-churpy-green'-->
                       <!--                       : 'text-gray-700 hover:text-green-600/50',-->
                       <!--                   ]"-->
                       <!--                 >-->
                       <!--                   <i class="fa-solid fa-filter"></i>-->
                       <!--                 </button>-->
                       <!--               </Tab>-->
                       <!--             </TabList>-->

                       <!--             <TabPanels class="mt-2">-->
                       <!--               <TabPanel>-->
                       <!--                 <ul role="list" class="divide-y divide-gray-200">-->
                       <!--                   <li class="px-0 py-0 sm:px-6">-->
                       <!--                     <input type="text" placeholder="Search column..." class="rounded border-gray-200 leading-3 py-1 text-xs focus:ring-churpy-green focus:border-churpy-green">-->
                       <!--                     <p class="text-gray-400 mt-1">-->
                       <!--                       Search this column by ID-->
                       <!--                     </p>-->
                       <!--                   </li>-->

                       <!--                   &lt;!&ndash; More items... &ndash;&gt;-->
                       <!--                 </ul>-->




                       <!--               </TabPanel>-->
                       <!--             </TabPanels>-->
                       <!--             <TabPanels class="mt-2">-->
                       <!--               <TabPanel>-->
                       <!--                 Filters 2-->
                       <!--               </TabPanel>-->
                       <!--             </TabPanels>-->
                       <!--           </TabGroup>-->



                       <!--         </div>-->

                       <!--       </div>-->
                       <!--     </PopoverPanel>-->
                       <!--   </transition>-->
                       <!-- </Popover>-->


                    </span>

                  <span v-else class="sr-only">Edit</span>
                </th>

              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:bg-churpy-dark/60 h-9 overflow-auto">
              <tr :key="index" v-for="(record, index) in records" class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all cursor-pointer">
                <td :key="ind" v-for="(key, ind) in Object.keys(record)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <!--key => row key-->
                  <!--headers[index].key => header index-->
                  <slot :name="key" v-bind:record="record">
                    {{record[key]}}
                  </slot>
                </td>
                <td v-if="actioned">
                  <slot name="row_actions" v-bind:record="record"></slot>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
          <!--pagination-->
          <div class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <!--mobile view-->
            <div class="flex-1 flex justify-between sm:hidden">
              <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
              <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <span class="font-medium">{{ paginateData.from }}</span>
                  to
                  <span class="font-medium">{{ paginateData.to }}</span>
                  of
                  <span class="font-medium">{{ paginateData.of }}</span>
                  results
                </p>
              </div>
              <div class="flex items-center">
                <select v-model="perPage" class="h-fit py-0.5 top-0 mr-3 border-gray-400 rounded text-xs text-center align-middle focus:ring-churpy-green focus-visible:ring-churpy-green dark:bg-churpy-night-box dark:border-gray-500">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>50</option>
                  <option>100</option>
                </select>

                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" class="relative inline-flex items-center px-2 py-0.5 rounded-l-md border border-gray-300 bg-white dark:bg-churpy-night-box dark:border-gray-500 text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: solid/chevron-left -->
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                  <a href="#" aria-current="page" class="z-10 bg-churpy-green/30 border-churpy-green text-churpy-dark relative inline-flex items-center px-4 py-1 border text-sm font-medium dark:bg-churpy-night-box dark:text-churpy-green dark:border-gray-500"> 1 </a>
                  <a href="#" class="bg-white border-gray-300 hover:bg-churpy-green/30 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium dark:bg-churpy-night-box dark:border-gray-500"> 2 </a>
                  <a href="#" class="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-churpy-green/30 hover:bg-gray-50 dark:bg-churpy-night-box dark:border-gray-500">
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
import {computed, ref} from "vue";

export default {
  name: "TableLite",
  props:{
    headers:{required:true, type:Array},
    actioned:{default:false, type:Boolean},
    records:{
      required:true,
      type:Array,
      default:[]
    }
  },
  setup(props){
    //variables
    let perPage = ref(20), currentPage = ref(1), perPageOptions = ref([20,40,50,100]);

    //computed

    const paginateData = computed(() => {
         return {
            from: parseInt(perPage.value * (currentPage.value - 1) + (perPage.value ? 1 : 0)),
            to: parseInt(perPage.value * (currentPage.value - 1) + perPage.value),
            of: props.records.length, //check pagination structure
          }
        })

        return {
          perPage,
          currentPage,
          perPageOptions,
          paginateData,
        }
    }

}
</script>

<style scoped>

</style>