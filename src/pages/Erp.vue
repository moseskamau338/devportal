<template>
 <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-[98%] lg:w-full">
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex">
          <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
              {name:'Connect ERP', icon:'fa-solid fa-file-invoice'},
              {name:'Link Bank Acc.', icon:'fa-solid fa-piggy-bank'},
              {name:'Map GL to Bank', icon:'fa-solid fa-shuffle'},
              ]" :key="index">
            <button :class="{'text-churpy-green border-b-4 border-churpy-green':selected}" class="mr-6 delay-[20ms] transition-colors duration-500">

              <i :class="item.icon" class="mr-2"></i>
              {{ item.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="p-4 min-h-[500px]">
          <TabPanel as="div" class="transition-all">
            <!--show this if nothing connected-->
            <erp-onboard />
            <!--<erp-connections />-->
          </TabPanel>
          <TabPanel as="div" class="transition-all">
            <span class="font-bold my-1 flex justify-between">Linking bank accounts is disabled in Sandbox mode.
            <span type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm rounded-sm shadow-sm text-white font-bold bg-orange-400 h-fit">Sandbox Account</span>
            </span>
            <p class="mb-2">However, we have 2 options that you can use to explore with:</p>
            <ul class="list-['-'] marker:text-lg marker:mr-3 ml-3 font-bold">
              <li>Use Churpy's Sandbox <a href="#" class="text-green-600 hover:underline">bank statements</a></li>
              <li>Upload your own bank statements
                <a href="#" class="text-green-600 hover:underline">here <sup><i class="fa-duotone fa-up-right-from-square text-[8px]"></i></sup></a>
              </li>
            </ul>
          </TabPanel>
          <TabPanel as="div" class="transition-all">
            Map GL to Bank
          </TabPanel>
        </TabPanels>
     </TabGroup>
 </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import ErpOnboard from "@/components/widgets/Dashboard/ErpOnboard.vue";

export default{
  name: 'ERP Settings',
  components:{
    ErpOnboard,
    TabGroup, TabList,
    Tab, TabPanels, TabPanel
  }
}
</script>
