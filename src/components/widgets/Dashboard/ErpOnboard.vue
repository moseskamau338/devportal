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


        </TabPanel>
        <TabPanel>
           <h1 class="font-semibold text-lg">Bring in some data (Bank/ERP)</h1>
          <p class="prose-base">You can connect your accounting system and pull in invoice or bank data. Alternatively, you can upload formated records and speed up the process.</p>

          <div class="flex flex-col w-fit">
            <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-8">Connect accounting system &rightarrow;</button>

            <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-2 w-fit"><i class="fa-solid fa-cloud-upload mr-3"></i> Upload Data</button>
          </div>

        </TabPanel>
        <TabPanel>
          <h1 class="font-semibold text-lg">Invite and manage clients (Marketplace)</h1>
          <p class="prose-base">Your clients are key, inviting them to use Churpy's Marketplace early will smoothen your collection flows and make reconciliation a breeze.</p>
          <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-8">Add Clients &rightarrow;
          </button>

        </TabPanel>
        <TabPanel>
          <h1 class="font-semibold text-lg">GO LIVE</h1>
          <p class="prose-base">If you are all set and ready to run a <strong>LIVE</strong> account, hit the <b>GO LIVE</b> button and find out what you need for the process alongside billing details. If you need help, our <a href="#" class="text-green-700 hover:underline">support staff</a> are on standby</p>
          <button type="button" class="inline-flex mt-8 items-center px-2.5 py-1.5 text-sm font-medium rounded bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">
         <i class="fa-solid fa-power-off mr-2"></i>
         Go LIVE</button>
        </TabPanel>
      </TabPanels>
    </TabGroup>
 </div>



</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Alert from "@/components/parts/Alert.vue";

export default {
  name: "ErpOnboard",
  components:{
    Alert,
    TabGroup, TabList, Tab, TabPanels, TabPanel
  }
}
</script>

<style scoped>

</style>