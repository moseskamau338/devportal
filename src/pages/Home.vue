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
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]"
        >
          <div class="grid grid-flow-row grid-cols-3 grid-rows-3">
            <div class="col-span-2 bg-green-400">01</div>
            <div class="col-span-2 bg-pink-400">02</div>
            <div class="bg-orange-400">03</div>
            <div class="bg-slate-400">04</div>
            <div class="bg-red-400">05</div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  <DashboardLoader v-else />

</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import DashboardLoader from '../components/loaders/DashboardLoader.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

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