<template>
  <header class="flex justify-between">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <label class="my-3">Select project</label>
        <div
          class="relative md:w-fit cursor-default overflow-hidden rounded-md bg-white dark:bg-churpy-night-box dark:text-gray-500 text-left shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 dark:bg-churpy-night-box dark:text-gray-300 focus:ring-0"
            :displayValue="(person) => person.name"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
           <i class="fa-solid fa-sort text-gray-400 dark:text-gray-600"></i>
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white dark:bg-churpy-night-box dark:text-gray-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-gray-500"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople"
              as="template"
              :key="person.id"
              :value="person"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-churpy-green text-white': active,
                  'text-gray-900 dark:text-gray-300': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                  <i class="fa-solid fa-check"></i>
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>

    <span class="w-fit">
      <label>Date range</label>
       <litepie-datepicker />
    </span>
  </header>

  <div class="bg-white dark:bg-churpy-night-box py-3 px-4 mt-5 rounded shadow">
    <header class="flex justify-between">
      <h2 class="font-bold text-lg">Statistics</h2>
      <div class="flex space-x-2">
        <i class="fa-solid text-sm text-churpy-green fa-check-circle"></i>
        <span class="text-sm">Project live on Sanbox</span>
      </div>
    </header>

    <div class="py-5 mt-4 flex justify-between items-baseline">
      <div class="flex items-center space-x-12">
        <!--item 1-->
        <div class="flex items-center">
          <span class="bg-green-500/20 text-churpy-green h-12 w-12 flex justify-center items-center rounded-full">
            <i class="fa-solid fa-wave-pulse"></i>
          </span>
          <div class="flex flex-col ml-4">
            <span class="font-bold text-lg">0</span>
            <small>Successful API calls</small>
          </div>
        </div>
        <!--item 2-->
        <div class="flex items-center">
          <span class="bg-red-500/20 text-red-500 h-12 w-12 flex justify-center items-center rounded-full">
            <i class="fa-solid fa-arrow-trend-down"></i>
          </span>
          <div class="flex flex-col ml-4">
            <span class="font-bold text-lg">0</span>
            <small>Failed API calls</small>
          </div>
        </div>
      </div>

      <c-button variant="success">View Project &rightarrow;</c-button>
    </div>

  </div>



</template>

<script>
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import LitepieDatepicker from 'litepie-datepicker-tw3';
import {inject, ref, computed} from "vue";
import CButton from "@/components/parts/CButton.vue";

export default {
  name:'Dashboard',
  components:{
    CButton,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    LitepieDatepicker,
  },
  setup(){
    //const axios = inject('axiosInstance')
    const projects = [
      { id: 1, name: 'Wade Cooper' },
      { id: 3, name: 'Devon Webb' },
      { id: 4, name: 'Company XZ' },
      { id: 5, name: 'Another Company' },
      { id: 6, name: 'Schmidt Enterprises' },
    ]

    let selected = ref(projects[0])
    let query = ref('')

    let filteredPeople = computed(() =>
      query.value === ''
        ? projects
        : projects.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.value.toLowerCase().replace(/\s+/g, ''))
          )
    )

    //axios('/developer')
    //.then(({data}) => {
    //  console.log('Axios response: ', data)
    //})

    return {
      selected, filteredPeople, query, projects
    }

  }
}

</script>