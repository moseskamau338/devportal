<template>
 <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-[98%] max-w-full overflow-x-auto lg:overflow-x-hidden relative">
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex items-center justify-between">
          <div class="flex">
            <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
                {name:'Connect ERP', icon:'fa-solid fa-file-invoice'},
                {name:'Link Bank Acc.', icon:'fa-solid fa-piggy-bank'},
                {name:'Map GL to Bank', icon:'fa-solid fa-shuffle'},
                ]" :key="index">
              <button :class="{'text-churpy-green border-b-4 border-churpy-green':selected}" class="text-xs md:text-md mr-6 delay-[20ms] transition-colors duration-500 w-20 md:w-max truncate">

                <i :class="item.icon" class="mr-2"></i>
                {{ item.name }}
              </button>
            </Tab>
          </div>

          <Badge status="warning" class="hidden md:block -mt-2">Sandbox Account</Badge>

        </TabList>
        <TabPanels class="p-4 min-h-[500px]">
          <TabPanel as="div" class="transition-all">
            <!--show this if nothing connected-->
            <erp-onboard />
            <!--<erp-connections />-->
          </TabPanel>
          <TabPanel as="div" class="transition-all">
            <div class="w-[80%]">
              <span class="font-bold my-1 flex md:justify-between">Linking bank accounts is disabled in Sandbox mode.
              </span>
              <p class="mb-2">However, we have 2 options that you can use to explore with:</p>
              <ul class="list-['-'] marker:text-lg marker:mr-3 ml-3 font-bold">
                <li>Use Churpy's Sandbox <router-link :to="{name:'erp-settings'}" class="text-green-600 hover:underline">bank statements</router-link></li>
                <li>Upload your own bank statements
                  <router-link :to="{name:'marketplace-upload-data'}" class="text-green-600 hover:underline">here <sup><i class="fa-duotone fa-up-right-from-square text-[8px]"></i></sup></router-link>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel as="div" class="transition-all">
            <MapGl />
          </TabPanel>
        </TabPanels>
     </TabGroup>
 </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import ErpOnboard from "@/components/widgets/Dashboard/ErpOnboard.vue";
import Badge from "@/components/parts/Badge.vue";
import MapGl from "@/components/widgets/Dashboard/MapGl.vue";

export default{
  name: 'ERP Settings',
  components:{
    MapGl,
    Badge,
    ErpOnboard,
    TabGroup, TabList,
    Tab, TabPanels, TabPanel
  }
}
</script>
