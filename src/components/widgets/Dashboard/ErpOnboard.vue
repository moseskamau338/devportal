<template>
   <div class="bg-transparent dark:bg-churpy-night-box h-[500px] rounded-md relative overflow-y-auto">
   <TabGroup as="div" vertical class="min-h-[300px] grid grid-cols-6">
      <TabList as="div" class="grid grid-cols-1 lg:col-span-1 gap-1 items-center h-[500px] relative">
        <div class="absolute h-[80%] flex space-y-3 flex-col justify-center border-r-2">
          <Tab as="template" :key="index" v-for="(action, index) in [
              {name:'Connect ERP', icon:'fa-file-invoice'}, {name:'Authenticate', icon:'fa-lock-keyhole'}, {name:'Authorize Data Transfer', icon:'fa-shield-halved'}]" v-slot="{ selected }"
          >
            <div class="flex items-center w-[90%] py-1.5 px-2 rounded cursor-pointer" :class="{'bg-green-300/30' : selected}">

              <h2 class="text-xs" :class="{'font-semibold text-churpy-green flex': selected}">
                <i class="fa-solid mr-1" :class="action.icon"></i>
                <span>{{ action.name }}</span>
              </h2>
            </div>
          </Tab>
        </div>

      </TabList>
      <TabPanels as="div" class="pl-6 lg:col-span-5">
        <TabPanel>
          <h1 class="font-semibold text-lg">Select your accounting system below and proceed to authentication.</h1>
          <!--alert-->
          <alert variant="warning">
             Make sure you authorize only data from your <b>TEST/QA</b> account.
          </alert>

          <div class="mt-4 grid grid-cols-1 md:grid-cols-2">

            <div class="h-full w-full px-4 py-3 overflow-y-auto max-h- rounded bg-gray-50">

              <input v-model="query" type="text" placeholder="Search ERP..." class="my-2 transition-all rounded border border-gray-200 leading-none focus:border-churpy-green focus:ring-churpy-green placeholder-gray-300 w-full mb-5">
              
              <RadioGroup class="max-h-[300px]" v-model="selected">
                <RadioGroupLabel class="sr-only">ERP</RadioGroupLabel>
                <div class="space-y-2">
                  <RadioGroupOption
                    as="template"
                    v-for="erp in filtered"
                    :key="erp.name"
                    :value="erp"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active
                          ? 'ring-2 ring-gray-300 ring-offset-2'
                          : '',
                        checked ? 'border-2 border-churpy-green bg-opacity-75 ' : '',
                      ]"
                      class="relative flex cursor-pointer rounded px-5 py-2 shadow-md focus:outline-none"
                    >
                      <div class="flex w-full items-center justify-between">
                        <div class="flex items-center">
                          <div class="text-md">
                            <RadioGroupLabel
                              as="p"
                              class="font-medium text-gray-600"
                            >
                              {{ erp.name }}
                            </RadioGroupLabel>
                          </div>
                        </div>
                        <div v-show="checked" class="shrink-0 text-churpy-green">
                          <i class="fa-duotone fa-check-circle text-lg"></i>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
            <div class="border border-gray-700 rounded border-dashed min-h-[200px] h-[280px] p-4 mx-5">
              <h2 class="my-2 text-gray-700 font-bold text-xl">Can't find your ERP?</h2>
              <p>
                All accounting platforms listed here have been officially integrated by Churpy.
                If you can't find yours, schedule a call with us below for further assistance
              </p>
              <div class="flex flex-col w-[50%] mt-4">
                <label class="font-light">Enter ERP name</label>
                <input type="text" placeholder="E.g SAP ECC..." class="mt-3 border-gray-400 text-sm py-1 rounded focus:ring-churpy-green focus:border-churpy-green placeholder-gray-400">
              </div>

              <div class="mt-4 flex relative">
                <button type="button" class="inline-flex absolute right-0 items-center px-2.5 py-1.5 border border-transparent text-xs rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">
                  <i class="fa-solid fa-phone mr-2"></i>
                  Schedule a call</button>
              </div>
            </div>

          </div>

        </TabPanel>
        <TabPanel>
          Authenticate

        </TabPanel>
        <TabPanel>
         Authorize

        </TabPanel>
      </TabPanels>
    </TabGroup>
 </div>



</template>

<script>
import {computed, ref} from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel, RadioGroup,
    RadioGroupLabel, RadioGroupOption, } from '@headlessui/vue'
import Alert from "@/components/parts/Alert.vue";
import {find} from "lodash";

export default {
  name: "ErpOnboard",
  components:{
    Alert,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
    RadioGroup, RadioGroupLabel, RadioGroupOption,
  },
  setup(){
    const query = ref('')
    const erps = [
      {name: 'Microsoft Dynamics'},
      {name: 'Oracle'},
      {name: 'Quickbooks Online'},
      {name: 'Sage 200'},
      {name: 'Xero'},
      {name: 'Zoho'},
      {name: 'Zoho1'},
      {name: 'Zoho2'},
      {name: 'Zoho3'},
      {name: 'Zoho4'},
      {name: 'Zoho5'},
    ]
    const filtered = computed(()=>{
      if (query.value.length === 0) return erps

      return erps.filter(erp => erp.name.toLowerCase().includes(query.value.toLowerCase()))

    })

const selected = ref(erps[0])

    return {erps, selected, filtered, query}
  }
}
</script>

<style scoped>

</style>