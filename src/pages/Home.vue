<template>
  <TabGroup v-if="loaded">
      <TabList class="flex p-1 space-x-1 dark:bg-churpy-dark bg-gray-200 
      rounded-lg max-w-fit">
        <Tab
          v-for="category in categories"
          as="template"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-fit px-4 py-1.5 text-xs font-medium rounded',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-churpy-green dark:ring-offset-churpy-night ring-white ring-opacity-60 transition-all duration-800 ease-out',
              selected
                ? 'bg-churpy-green text-white dark:text-churpy-dark shadow'
                : 'text-churpy-dark dark:text-gray-300',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2 bg-transparent">
        <TabPanel
          v-for="(cats, idx) in categories"
          :key="idx"
          :class="[
            'h-full p-3',
          ]"
        >
          <GridRow>
            <Bank class="col-span-7"/>
            <Bank />
            <Bank />
            <Bank class="bg-gray-500 text-white col-span-2 row-span-2" />
            <Bank />
            <Bank />
            <Bank />
            <Bank />
            <Bank />
            <Bank />
            <Bank />
            <Bank />
           
          </GridRow>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  <DashboardLoader v-else />

</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import DashboardLoader from '@/components/loaders/DashboardLoader.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Bank from '@/components/widgets/Dashboard/Bank.vue';
import GridRow from '../components/widgets/GridRow.vue';

let loaded = ref(false)
const categories = ref([
  'Dashboard', 'Analytics'
])
 setTimeout(() => {
   console.log('loaded');
    loaded.value = true
  }, 3000);
</script>

<style>

</style>