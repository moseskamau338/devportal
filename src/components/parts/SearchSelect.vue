<template>
  <Combobox as="div" v-model="selectedPerson">
    <ComboboxLabel class="block text-sm font-medium text-gray-700 dark:text-gray-400">
      <slot name="label"></slot>
  </ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput class="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:border-green-500 sm:text-sm" @change="query = $event.target.value" :display-value="(person) => person.name" />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <i class="fa-solid fa-sort text-gray-400" aria-hidden="true"></i>
      </ComboboxButton>

      <ComboboxOptions v-if="filteredPeople.length > 0" class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-churpy-night-box">
        <ComboboxOption v-for="person in filteredPeople" :key="person.id" :value="person" as="template" v-slot="{ active, selected }">
          <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-green-600 text-white' : 'text-gray-900']">
            <div class="flex items-center">
              <img :src="person.imageUrl" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ person.name }}
              </span>
            </div>

            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-green-600']">
              <i class="fa-solid fa-check text-lg" aria-hidden="true"></i>
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script>
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import {computed, ref} from "vue";
export default {
  name: "SearchSelect",
  components:{
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
  },
  setup(){
    const people = [
      {
        id: 1,
        name: 'Client X Ltd',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      // More users...
    ]

    const query = ref('')
    const selectedPerson = ref()
    const filteredPeople = computed(() =>
      query.value === ''
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
          })
    )

    return {
      query,
      selectedPerson,
      filteredPeople,
    }
  }
}
</script>

<style scoped>

</style>