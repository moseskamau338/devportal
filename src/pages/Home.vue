<template>
  <TabGroup >
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
        <template :index="index" v-for="(row, index) in gridConfig">
          <GridRow :class="`${row.commonRowClasses} ${row.commonColClasses}`">
          <template :key="index2" v-for="(widget, index2) in row.widgetConfigurations">
            <!-- import widget -->
            <component 
            v-for="count in widget.count"
            v-bind="{widgetClass:widget.widgetClasses}" :is="widgetRegister[widget.widget]"
            ></component>
          </template>
          </GridRow>
          </template>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  <!-- <DashboardLoader v-else /> -->

</template>

<script setup>
import { ref } from '@vue/runtime-core';
// import DashboardLoader from '@/components/loaders/DashboardLoader.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
// import Bank from '@/components/widgets/Dashboard/Bank.vue';
import GridRow from '../components/widgets/GridRow.vue';
import { defineAsyncComponent } from 'vue';

const widgetRegister = ref({
  testWidget: defineAsyncComponent(() => import('@/components/widgets/TestWidget.vue')),
  bankWidget: defineAsyncComponent(() => import('@/components/widgets/Dashboard/Bank.vue')),
})


let loaded = ref(false)
const categories = ref([
  'Dashboard', 'Analytics'
])

const gridConfig = ref(
  [
    {
      commonRowClasses:'gap-2 grid-rows-1',
      commonColClasses:'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      widgetConfigurations:
        [
          {
            widget: 'testWidget',
            count:3, //this could be based on data count etc eg 3 banks[]
            widgetClasses: ''
          }
        ], //bank section
    },
     {
        commonRowClasses:'gap-2 grid-rows-1',
        commonColClasses:'my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        widgetConfigurations:
        [{
          widget: 'testWidget', // widget would change: stats
          count:4,
          widgetClasses: ''
        }]//stats
    },
      {
        commonRowClasses:'gap-2 grid-rows-1',
        commonColClasses:'my-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-5',
        widgetConfigurations:
          [
            {
              widget: 'testWidget', // widget would change: customer
              count:1,
              widgetClasses: 'md:col-span-2 lg:col-span-2'
            },
            {
              widget: 'testWidget', // widget would change: aging
              count:1,
              widgetClasses: 'md:col-span-2 lg:col-span-3'
            }
          ]//customer + aging
      },
      {
        commonRowClasses:'gap-2 grid-rows-1',
        commonColClasses:'my-4 grid-cols-1',
        widgetConfigurations:
        [
          {
            widget: 'testWidget', // widget would change: match-rate
            count:1,
            widgetClasses: ''
          }
        ] //match-rate
      }
    ]
)


 setTimeout(() => {
  //  console.log('loaded');
    loaded.value = true
  }, 3000);
</script>

<style>

</style>