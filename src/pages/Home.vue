<template>
 <div class="bg-white dark:bg-churpy-night-box md:mx-5 mb-14 min-h-[500px] rounded-md shadow-md pl-3 pt-4 relative">
  <h1 class="text-xl font-bold">Welcome to <span class="font-brand">Churpy</span> Reconciliation Engine</h1>
   <p class="prose-base mt-2">We have a few options to get you up and running fast. Feel free to skip any step.</p>

   <TabGroup as="div" vertical class="md:min-h-[300px] mt-8 md:mx-20 md:grid md:grid-cols-2">
      <TabList ref="tabs" as="div" class="flex flex-row overflow-x-auto mb-4 px-4 md:mb-0 md:grid md:grid-cols-1 md:gap-5 justify-items-start md:h-fit scroll-smooth">
        <Tab as="template" :key="index" v-for="(action, index) in ['Setup your team', 'Manage connections', 'Invite and manage clients', 'Go LIVE']" v-slot="{ selected }"
        >
          <div class="flex flex-shrink-0 items-center w-fit md:w-[90%] py-1.5 px-2 rounded cursor-pointer" :class="{'bg-gray-200 dark:bg-churpy-night' : selected}">
            <span :class="[
                selected ? 'bg-white' : 'bg-gray-200',
                'flex items-center justify-center h-6 w-6 rounded-full text-gray-800 shadow-md mr-3']">{{index+1}}</span>

            <h2 class="text-xs md:text-lg" :class="{'font-bold': selected}">{{ action }}</h2>
          </div>
        </Tab>

      </TabList>

      <TabPanels as="div" class="border rounded-md p-4">
        <TabPanel>
          <h1 class="font-semibold text-lg">Setting up team</h1>
          <p class="prose-base">You might need to invite your team over and assign roles as required. You can also define various role groups to better organize your account.</p>
          <router-link :to="{name:'team'}" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-8">Manage Team &rightarrow;</router-link>

        </TabPanel>
        <TabPanel>
           <h1 class="font-semibold text-lg">Bring in some data (Bank/ERP)</h1>
          <p class="prose-base">You can connect your accounting system and pull in invoice or bank data. Alternatively, you can upload formated records and speed up the process.</p>

          <div class="flex flex-col w-fit">
            <router-link :to="{name: 'erp-settings'}" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-8">Connect accounting system &rightarrow;</router-link>

            <router-link :to="{name:'upload-data'}" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-2 w-fit"><i class="fa-solid fa-cloud-upload mr-3"></i> Upload Data</router-link>
          </div>

        </TabPanel>
        <TabPanel>
          <h1 class="font-semibold text-lg">Invite and manage clients (Marketplace)</h1>
          <p class="prose-base">Your clients are key, inviting them to use Churpy's Marketplace early will smoothen your collection flows and make reconciliation a breeze.</p>
          <router-link :to="{name: 'marketplace'}" as="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mt-8">Add Clients &rightarrow;
          </router-link>

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

export default {
  name:'Dashboard',
  components:{
    TabGroup, TabList, Tab, TabPanels, TabPanel
  },
  setup(){

  }
}

</script>