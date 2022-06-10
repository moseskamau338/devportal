<template>
  <p class="text-sm">
    This section allows you to <b>add rules</b> customized to your data set. Rules added here will be run against <b>Churpy’s existing rule set</b> as standardized by you.
  </p>
  <TabGroup as="div" vertical class="mt-5 md:grid md:grid-cols-6">
      <TabList as="div" class="grid md:grid-cols-1 md:col-span-1 md:gap-1 h-14 mb-2 border px-2 md:border-none md:relative">
        <div class="md:absolute flex md:space-y-3 md:flex-col flex-row md:justify-center border-r-2">
          <Tab as="template" :key="index" v-for="(action, index) in [
              {name:'Create new'},
              {name:'Update Existing'},
              ]" v-slot="{ selected }"
          >
            <div class="flex items-center py-1.5 px-2 cursor-pointer" :class="{'bg-green-300/30 border-r-4 border-r-green-500 -mr-0.5' : selected}">

              <h2 class="text-[10px] md:text-xs flex items-center w-full justify-end" :class="{'font-semibold text-green-600': selected}">
                <span>{{ action.name }}</span>
              </h2>
            </div>
          </Tab>
        </div>

      </TabList>
      <TabPanels as="div" class="pl-6 min-h-[300px] md:col-span-5 relative overflow-hidden border py-2 rounded">
        <TabPanel>
          <CustomForm />
        </TabPanel>
        <TabPanel>
          <CustomForm :updating="true" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import CustomForm from "@/components/page/Rules/CustomForm.vue";

export default {
  name: "ManageCustom",
  components:{
    CustomForm,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
  }
}
</script>

<style scoped>

</style>