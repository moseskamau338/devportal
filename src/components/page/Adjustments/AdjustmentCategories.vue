<template>
<section>
  <TabGroup as="div" class="mt-8">
      <TabList class="flex w-full flex-col xl:flex-row xl:items-center xl:justify-between space-y-3 xl:space-y-reverse whitespace-nowrap">
        <div class="flex space-x-2 flex-wrap items-center">
          <div class="flex items-center py-2 px-3 space-x-1 dark:bg-churpy-dark bg-gray-200 rounded-lg">
            <Tab
              v-for="category in categories"
              as="template"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-24 truncate md:w-fit px-4 py-1.5 text-xs font-medium rounded-sm relative',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-churpy-green dark:ring-offset-churpy-night ring-white ring-opacity-60 transition-all duration-800 ease-out',
                  selected
                    ? 'bg-white dark:bg-churpy-night dark:text-gray-400 shadow'
                    : 'bg-gray-300 dark:bg-gray-800 text-churpy-dark dark:text-gray-500',
                ]"
              >
                {{ category.name }}
              </button>
            </Tab>
          </div>

          <!--Rules here-->
          <ExportButton class="mt-2 lg:mt-0 xl:hidden" />
        </div>

        <div class="flex space-x-2 items-center flex-wrap">
          <div class="mt-1 relative rounded-md shadow-sm w-full xl:w-[200px]">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500 sm:text-sm"> <i class="fa-solid fa-search"></i> </span>
              </div>
              <input type="text" class="dark:bg-churpy-night-box dark:border-gray-500 focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-5 sm:text-sm border-gray-300 rounded-md" placeholder="Search records...">
            </div>
          <ExportButton class="invisible xl:visible" />
        </div>

      </TabList>

        <TabPanels as="section" class="w-full h-full p-2">
          <template :key="category.name" v-for="category in categories">
              <TabPanel>
               <keep-alive>
                 <component :is="category.component" :key="category.name" />
               </keep-alive>
              </TabPanel>
          </template>
        </TabPanels>
    </TabGroup>

</section>
</template>

<script>
import {ref} from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import ExportButton from "@/components/parts/ExportButton.vue";
import CButton from "@/components/parts/CButton.vue";
import NotesTable from "@/components/page/Adjustments/NotesTable.vue";
import AdjustmentsTable from "@/components/page/Adjustments/AdjustmentsTable.vue";

export default {
  name: "AdjustmentCategories",
  components:{
    TabGroup, TabList, ExportButton,
    Tab, TabPanels, TabPanel, CButton,
    AdjustmentsTable, NotesTable
  },

  setup(){
    const categories = ref([
        {name:'Credit Notes', component:NotesTable},
        {name:'Debit Notes', component: NotesTable},
        {name:'Other Adjustments', component: AdjustmentsTable}
    ])

    return {categories}
  }
}
</script>

<style scoped>

</style>