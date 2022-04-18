<template>
  <section class="w-screen bg-gray-100">
    <nav class="flex justify-between bg-gray-200 max-h-fit items-center w-screen lg:space-x-2 py-1.5 lg:p-3 px-5 lg:px-10 fixed top-0">
      <a href="https://churpy.co" type="button" class="flex relative items-center px-4 py-1.5 text-xs hover:opacity-80 cursor-pointer font-medium rounded bg-green-100 text-gray-600 shadow-sm md:mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit space-x-2 sm:mr-5">
            <i class="fa-solid fa-arrow-left mr-5"></i>
            Home Page
          </a>
      <h1><span class="font-brand">Churpy</span> Reconciliation</h1>
    </nav>
      <div class="lg:grid lg:place-content-center ml-4 mt-20">
        <h1 class="font-semibold text-xl ml-0">Signup and get the most out of <span class="font-brand">Churpy</span></h1>
        <p class="prose mb-2">Can't wait to have you onboard! This will be a <strong>minimal setup</strong> to get you operational as quick as possible.</p>
      </div>
    <section class="mx-auto flex justify-center">
      <div class="flex flex-col lg:flex-row lg:justify-center lg:-ml-32 space-x-5 w-screen lg:fit mb-96 md:mb-0">
        <div class="flex lg:flex-col space-x-2 lg:space-x-0 lg:items-start lg:place-content-center mt-4 px-5 lg:w-[300px] items-center">
          <button type="button" @click="steps = 1" :class="[
              steps === 1? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800',
              'inline-flex items-center px-2.5 py-1.5 text-sm lg:text-md font-medium rounded mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit lg:w-full']">
            <i class="fa-solid fa-user-tag mr-3"></i>
            Personal Details
          </button>
          <button @click="steps = 2" type="button" :class="[
              steps === 2? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800',
              'inline-flex items-center px-2.5 py-1.5 text-sm lg:text-md font-medium rounded mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit lg:w-full']">
            <i class="fa-solid fa-house-building mr-3"></i>
            Company
          </button>
        </div>
        <div class="h-[500px] w-screen py-3 max-w-2xl">
          <div>
            <div class="-ml-1.5 mr-2.5">
              <!--Panels-->
              <TransitionRoot as="div" :show="steps === 1"
                  enter="transition transform duration-800 ease-out"
                  enter-from="translate-x-4 opacity-0" enter-to="translate-x-0 opacity-100"
                  leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
                  class="pt-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Details</h3>
                  <p class="mt-1 text-sm text-gray-500">Tell us a bit about who you are and how you want to use the account.</p>
                </div>
                <TransitionChild as="div"
                   enter="transition transform duration-400 ease-out"
                    enter-from="rotate-90 scale-50 opacity-0" enter-to="rotate-0 scale-100 opacity-100"
                    leave="transition transform duration-400 ease-in"
                   leave-from="opacity-100" leave-to="opacity-0"
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700"> First name </label>
                    <div class="mt-1">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Jane" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
                    <div class="mt-1">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Doe" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                    <div class="mt-1">
                      <input type="email" name="email" id="email" autocomplete="email" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="e.g +1 234 3445 3553" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700"> Country </label>
                    <div class="mt-1">
                      <Combobox id="country" v-model="selected">
                        <div class="relative mt-1">
                          <div
                            class="relative w-full text-left bg-white border focus:ring-churpy-green focus:border-churpy-green border-gray-300 shadow-sm rounded cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden"
                          >
                            <ComboboxInput
                              class="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                              :displayValue="(person) => person.name"
                              @change="query = $event.target.value"
                            />
                            <ComboboxButton
                              class="absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                              <i class="fa-solid fa-sort text-md text-gray-400" aria-hidden="true" />
                            </ComboboxButton>
                          </div>
                          <TransitionRoot
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            @after-leave="query = ''"
                          >
                            <ComboboxOptions
                              class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                              <div
                                v-if="filteredCountries.length === 0 && query !== ''"
                                class="cursor-default select-none relative py-2 px-4 text-gray-700"
                              >
                                Nothing found.
                              </div>

                              <ComboboxOption
                                v-for="person in filteredCountries"
                                as="template"
                                :key="person.id"
                                :value="person"
                                v-slot="{ selected, active }"
                              >
                                <li
                                  class="cursor-default select-none relative py-2 pl-10 pr-4"
                                  :class="{
                                    'text-white bg-churpy-green': active,
                                    'text-gray-900': !active,
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
                                    <i class="fa-solid fa-check text-md" aria-hidden="true"></i>
                                  </span>
                                </li>
                              </ComboboxOption>
                            </ComboboxOptions>
                          </TransitionRoot>
                        </div>
                      </Combobox>

                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="tel" class="block text-sm font-medium text-gray-700"> Phone </label>
                    <div class="mt-1">
                      <input type="tel" v-maska="'###############'" required name="tel" id="tel" autocomplete="tel" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="+1-202-555-0152" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="city" class="block text-sm font-medium text-gray-700"> Password </label>
                    <div class="mt-1">
                      <input type="password" name="city" id="city" autocomplete="address-level2" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="*****" />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <RadioGroup v-model="selectedEnvironment">
                      <RadioGroupLabel class="text-base font-medium text-gray-900"> Select account type </RadioGroupLabel>

                      <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                        <RadioGroupOption as="template" v-for="environment in environments" :key="environment.id" :value="environment" v-slot="{ checked, active }">
                          <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-churpy-green ring-2 ring-churpy-green' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none duration-700']">
                            <div class="flex-1 flex">
                              <div class="flex flex-col">
                                <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">
                                  {{ environment.title }}
                                </RadioGroupLabel>
                                <RadioGroupDescription as="span" class="mt-1 flex items-center text-sm text-gray-500">
                                  {{ environment.description }}
                                </RadioGroupDescription>
                              </div>
                            </div>
                            <i class="fa-solid fa-check-circle text-lg" :class="[!checked ? 'invisible' : '', 'text-green-600']" aria-hidden="true"></i>
                            <div :class="[active ? 'border' : 'border-2', checked ? 'border-green-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none duration-1000']" aria-hidden="true" />
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>

                  </div>

                 <div class="sm:col-span-3">
                    <div class="relative flex py-1 items-center">
                      <div class="flex-grow border-t border-gray-400"></div>
                      <span class="flex-shrink mx-4 text-gray-400">Or signin with social media</span>
                      <div class="flex-grow border-t border-gray-400"></div>
                  </div>


                  <div class="flex flex-row space-x-5 items-center justify-center w-full">
                    <button class="flex flex-row items-center font-bold justify-center space-x-5 bg-white text-green-800 rounded shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto" viewBox="-40.446 -22.19 350.532 133.14"><path d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/><path d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/><path d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/><path d="M224.64 2.53v65h-9.5v-65z" fill="#34A853"/><path d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/><path d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z" fill="#4285F4"/></svg>
                    </button>
                    <button class="flex flex-row items-center font-bold justify-center space-x-5 bg-blue-600 text-white px-3 py-2 rounded shadow-sm">
                      <i class="fa-brands fa-facebook mr-3"></i>
                      Facebook
                    </button>
                  </div>
                 </div>

                </TransitionChild>
              </TransitionRoot>

            <!--  panel 2 company-->
              <TransitionRoot as="div" :show="steps === 2"
                  enter="transition transform duration-800 ease-out"
                  enter-from="translate-x-4 opacity-0" enter-to="translate-x-0 opacity-100"
                  leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
                  class="pt-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Company Details</h3>
                  <p class="mt-1 text-sm text-gray-500">Do you represent a company? Tell us a bit about it.</p>
                </div>
                <TransitionChild as="div"
                   enter="transition transform duration-400 ease-out"
                    enter-from="rotate-90 scale-50 opacity-0" enter-to="rotate-0 scale-100 opacity-100"
                    leave="transition transform duration-400 ease-in"
                   leave-from="opacity-100" leave-to="opacity-0"
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem, delectus dolores error incidunt laudantium necessitatibus obcaecati optio praesentium quas quibusdam, recusandae rerum tempora tenetur voluptate? Dolorem iure quia sint.
                </TransitionChild>
              </TransitionRoot>

            </div>

          </div>
        </div>
      </div>
    </section>
    <footer class="bg-white flex justify-end fixed bottom-0 py-1 items-center h-fit w-screen pr-10">
      <button type="button" class="inline-flex items-center px-4 py-1.5 text-md hover:opacity-80 cursor-pointer font-medium rounded bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit space-x-2">
            Next
            <i class="fa-solid fa-arrow-right ml-3"></i>
          </button>
    </footer>
  </section>

</template>

<script>
import {
  Combobox, ComboboxInput, ComboboxButton,
  ComboboxOptions, ComboboxOption, TransitionRoot,
  RadioGroup, RadioGroupDescription,
  RadioGroupLabel, RadioGroupOption, TransitionChild
} from '@headlessui/vue'
import {ref,computed} from "vue";
//import axios from 'axios'
import debounce from "lodash/debounce";

export default {
  name: "Register",
  components:{
    TransitionChild,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
    RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption
  },
  setup(){
    const steps = ref(1)

    const countries = [
      { id: 1, name: 'Kenya' },
      { id: 2, name: 'Uganda' },
      { id: 3, name: 'Tanzania' },
      { id: 4, name: 'Nigeria' },
      { id: 5, name: 'USA' },
      { id: 6, name: 'Canada' },
    ]
    const environments = [
      { id: 1, title: 'Sandbox', description: 'Am just exploring'},
      { id: 2, title: 'LIVE', description: 'I will run live data'},
    ]

    const selectedEnvironment = ref(environments[0])
    let selected = ref(countries[0])
    let query = ref('')

    const getCountries = () => {
      console.log('Fetching countries')

      //axios.get('')
      //.then()
      //.catch(()=>{
      //  return [];
      //})
      //.finally()
      //
      //countries.filter((person) =>
      //      person.name
      //        .toLowerCase()
      //        .replace(/\s+/g, '')
      //        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      //    )
    }

    let filteredCountries = computed(async () =>
      query.value === ''
        ? [{ id: 1, name: 'Kenya' }]
        : await debounce(() =>{
              console.log('Found countries')
              return [{ id: 2, name: 'Uganda' },
              { id: 3, name: 'Tanzania' },
              { id: 4, name: 'Nigeria' },
              { id: 5, name: 'USA' },]
          }, 500)
    )
    return {
      selected, query, filteredCountries,
      environments: environments,
      selectedEnvironment, steps
    }
  }
}
</script>

<style scoped>

</style>