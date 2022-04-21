<template>
  <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-full">
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex">
          <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
              {name:'Manage Members', icon:'fa-solid fa-users'},
              {name:'Manage Roles', icon:'fa-solid fa-poll-people'}]" :key="index">
            <button :class="{'text-churpy-green border-b-4 border-churpy-green':selected}" class="mr-6 delay-[20ms] transition-colors duration-500">

              <i :class="item.icon" class="mr-2"></i>
              {{ item.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel as="div" class="transition-all px-14">
            <p class="prose-base">
              Team management allows you to include workmates across the board to cater for different aspects of your workflow. You will be able to <strong>invite, assign roles</strong> and <strong>manage role permissions</strong> as you please.
            </p>

            <Members class="mt-12" />


          </TabPanel>
          <TabPanel class="transition-all">Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Members from "@/components/page/Teams/Members.vue";
export default{
  name: 'MeanTeam',
  components:{
    Members,
    TabGroup, TabList, Tab, TabPanels, TabPanel
  },

}
</script>


