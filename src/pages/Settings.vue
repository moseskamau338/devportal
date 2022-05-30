<template>
  <TabGroup @change="changeTab" vertical as="section" class="grid grid-cols-1 gap-3 lg:grid-cols-7">
    <div class="bg-white dark:bg-churpy-night-box col-span-1 rounded shadow-md py-2">
      <TabList as="div" class="flex flex-row lg:flex-col overflow-x-auto space-y-2 space-x-2 lg:space-x-reverse lg:space-y-reverse lg:mb-0 lg:grid lg:grid-cols-1 lg:gap-2 justify-items-start lg:h-fit scroll-smooth">
        <Tab as="template" v-for="(action, index) in options" v-slot="{ selected }"
        >
          <div class="flex flex-shrink-0 space-x-2 items-center lg:w-full py-2 px-2 cursor-pointer transition-all" :class="{
            'text-green-600 border-b-2 lg:border-l-2 lg:border-b-0 border-green-600' : selected}">
            <i :class="action.icon" class="fa-solid"></i>

            <h2 class="text-xs lg:text-md" :class="{'font-bold': selected}">{{ action.name }}</h2>
          </div>
        </Tab>

      </TabList>
    </div>


    <TabPanels class="col-span-6 bg-white dark:bg-churpy-night-box rounded shadow-md">
      <header class="flex justify-between pt-3 pb-1 px-3 w-full border-b">
        <h2 class="flex space-x-2 pr-5 items-center border-b-4 border-churpy-green w-fit -mb-1.5 text-churpy-green text-md">
          <i :class="currentTab.icon" class="fa-solid"></i>
          <span>{{ currentTab.name }}</span>
        </h2>

      </header>

      <TabPanel class="mx-3 mt-8 pb-5">
          <Profile />
      </TabPanel>

       <TabPanel class="mx-3 mt-8 pb-5">
         <Payments />
      </TabPanel>
      <TabPanel class="mx-3 mt-8 pb-5">
         <Email />
      </TabPanel>

    </TabPanels>
  </TabGroup>


</template>

<script>
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
import {ref} from "vue";
import Payments from "@/components/page/Settings/Payments.vue";
import Profile from "@/components/page/Settings/Profile.vue";
import Email from "@/components/page/Settings/Email.vue";
export default {
  name: "Settings",
  components: {Payments, TabPanel, TabPanels, Tab, TabList, TabGroup, Profile, Email},
  setup(){
    const options = ref([
      {name:'Profile', icon:'fa-user-gear'},
      {name:'Payments', icon:'fa-credit-card'},
      {name:'Email', icon:'fa-envelopes'},
    ])
    let currentTab = ref(options.value[0])

    function changeTab(index) {
      currentTab.value = options.value[index]
    }

    return {options, changeTab, currentTab}
  }
}
</script>

<style scoped>

</style>