<template>
  <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-[98%] lg:w-full">
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex">
          <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
              {name:'Manage Members', icon:'fa-solid fa-people'},
              {name:'Manage Roles', icon:'fa-solid fa-poll-people'},
              {name:'Groups', icon:'fa-solid fa-people-group'},
              ]"
               :key="index">
            <button :class="{'text-churpy-green border-b-4 border-churpy-green':selected}" class="mr-6 delay-[20ms] transition-colors duration-500">

              <i :class="item.icon" class="mr-2"></i>
              {{ item.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel as="div" class="transition-all px-14">
            <Members class="mt-12" />
          </TabPanel>
          <TabPanel class="transition-all">
            <Roles />
          </TabPanel>
          <TabPanel class="transition-all">
            <Groups />
          </TabPanel>
        </TabPanels>
      </TabGroup>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Members from "@/components/page/Teams/Members.vue";
import Roles from "@/components/page/Teams/Roles.vue";
import Groups from "@/components/page/Teams/Groups.vue";


export default{
  name: 'ManageTeam',
  components:{
    Groups,
    Roles,
    Permissions,
    Members,
    TabGroup, TabList,
    Tab, TabPanels, TabPanel
  },

}
</script>


