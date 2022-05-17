<template>
   <div class="bg-transparent dark:bg-churpy-night-box h-[500px] rounded-md relative overflow-y-auto">
   <TabGroup as="div" vertical class="min-h-[300px] grid grid-cols-6">
      <TabList as="div" class="grid grid-cols-1 lg:col-span-1 gap-1 items-center h-[500px] relative">
        <div class="absolute h-[80%] flex space-y-3 flex-col justify-center border-r-2">
          <Tab as="template" :key="index" v-for="(action, index) in [
              {name:'Connect ERP', icon:'fa-file-invoice'}, {name:'Authenticate', icon:'fa-lock-keyhole'}, {name:'Authorize Data Transfer', icon:'fa-shield-halved'}]" v-slot="{ selected }"
          >
            <div class="flex items-center  mr-2 py-1.5 px-2 rounded cursor-pointer" :class="{'bg-green-300/30' : selected}">

              <h2 class="text-xs flex items-center" :class="{'font-semibold text-churpy-green': selected}">
                <i class="fa-solid mr-1" :class="action.icon"></i>
                <span>{{ action.name }}</span>
              </h2>
            </div>
          </Tab>
        </div>

      </TabList>
      <TabPanels as="div" class="pl-6 lg:col-span-5 relative overflow-hidden">
        <Transition
          enter-active-class="transform ease-out duration-300 transition delay-100 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition opacity-100 ease-in duration-100"
          leave-to-class="opacity-0"
          appear
        >
          <TabPanel>
            <h1 class="font-semibold text-md text-gray-500">Select your accounting system below and proceed to authentication.</h1>
            <!--alert-->
            <alert variant="warning" class="mt-2">
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
        </Transition>
        <Transition
          enter-active-class="transform ease-out duration-300 transition delay-100 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition opacity-100 ease-in duration-100"
          leave-to-class="opacity-0"
          appear
        >
          <TabPanel>
            Authenticate your ERP connection

          </TabPanel>
        </Transition>
        <Transition
          enter-active-class="transform ease-out duration-300 transition delay-100 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition opacity-100 ease-in duration-100"
          leave-to-class="opacity-0"
          appear
        >
          <TabPanel class="mr-14">
           <span class="text-md font-semibold flex items-center text-gray-500"><i class="fa-solid fa-shield-halved mr-2"></i>Secure Data Transfer</span>
            <p>
              Once you agree to transfering your accounting data to Churpy, the process will take a while in the background as you explore other features of the platform.
              Once done, you will see your data within the <b>Reconciliation</b> view as wel as the <b>Marketplace</b>
            </p>
            <div class="flex justify-between items-center w-[80%] mt-5">
              <div class="w-fit">
                <h3 class="font-bold text-3xl">{{selected.name}}</h3>
              </div>
              <div class="w-14 flex justify-center">
                <i class="fa-duotone fa-arrow-right-arrow-left text-gray-700 text-3xl"></i>
              </div>
              <div class="w-fit mx-4 flex">
                <img class="h-20" src="/images/logo-full.png" alt="">
              </div>
            </div>

             <div class="relative flex items-start mt-5">
              <div class="flex items-center h-5">
                <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-400 rounded" />
              </div>
              <div class="ml-3 text-sm">
                <span id="comments-description" class="text-gray-500">
                By checking this box, you agree to Churpy's <a href="#" class="text-green-600 hover:underline">data privacy and protection policies.</a>
                </span>

              </div>
            </div>
          </TabPanel>
        </Transition>
        <!--buttons-->
        <div class="absolute bottom-0 md:w-[900px] py-2 px-2 flex justify-between">
          <button type="button" class="inline-flex items-center px-4 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-churpy-dark bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 transition-all h-fit">&leftarrow; Back</button>

        <button type="button" class="inline-flex items-center px-4 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">Next &rightarrow;</button>

        </div>
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
      //change to search via API
      return erps.filter(erp => erp.name.toLowerCase().includes(query.value.toLowerCase()))

    })

const selected = ref(erps[0])

    return {erps, selected, filtered, query}
  }
}
</script>

<style scoped>

</style>