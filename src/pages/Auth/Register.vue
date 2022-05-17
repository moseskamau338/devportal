<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-0 min-h-screen w-screen bg-white relative">
    <!--left-->
    <div class="w-full bg-[#A7E5EB]/60 lg:pl-8 hidden lg:block">
      <nav class="py-3">
        <img src="/images/logo-full.png" alt="Churpy full color logo" class="h-12 w-auto">
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">Churpy Eco-system</h1>
        <p class="mt-2 text-xl text-gray-600 pr-8">
          <span class="font-brand">Churpy</span> offers you a variety of products to suite any challenge you might have during your reconciliation workflows.
        </p>
        
        <div id="sliders_area" class="mt-8 relative items-center justify-center">
          <img src="/images/pages/features.png" class="w-[80%]" alt="">
          <img src="/images/pages/green-plant.png" class="absolute -right-2 h-48 -bottom-10" alt="">
        </div>
      </div>

       <div class="absolute bottom-0 pb-8 flex space-x-6">
        <span class="flex text-gray-700 hover:text-blue-500 cursor-pointer">
          <i class="fa-brands fa-twitter text-xl mr-2"></i>
          <h5 class="font-brand">ChurpyInc</h5>
        </span>
          <span class="flex text-gray-700 hover:text-blue-600 cursor-pointer">
          <i class="fa-brands fa-linkedin text-xl mr-2"></i>
          <h5 class="font-brand">ChurpyInc</h5>
        </span>
      </div>
    </div>

    <!--navigators-->
    <div class="w-2 h-44 bg-gradient-to-br from-churpy-green via-emerald-600 to-churpy-night-box hidden lg:flex flex-col absolute mx-auto rounded-full left-0 right-0 top-0 bottom-0 my-auto overflow-visible">
      <div class="absolute grid grid-cols-1 gap-4 w-32 my-auto top-0 bottom-0 h-fit">
         <button type="button" @click="steps = 1" :class="[
              steps === 1? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-700 border border-churpy-green',
              'inline-flex -ml-4 items-center px-2 py-1.5 text-xs font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit shadow-lg']">
            <i class="fa-solid fa-user-tag mr-3"></i>
            Personal Details
         </button>
        <button @click="steps = 2" type="button" :class="[
            steps === 2? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-700 border border-churpy-green',
            'inline-flex -ml-4 items-center px-2 py-1.5 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit shadow-lg']">
          <i class="fa-solid fa-house-building mr-3"></i>
          Company
        </button>
      </div>

    </div>

    <!--right-->
    <div class="w-full px-4 md:pl-32 xl:px-32">
      <nav class="flex justify-between lg:justify-end px-6 py-6">
        <img src="/images/logo-full.png" alt="Churpy full color logo" class="h-12 w-auto lg:hidden">
        <a href="/auth/login" class="font-bold hover:underline text-gray-700">Signin</a>
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">Welcome aboard!</h1>

        <div class="flex lg:hidden px-8 mt-3 space-x-6">
          <button type="button" @click="steps = 1" :class="[
              steps === 1? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-700 border border-churpy-green',
              'inline-flex items-center px-2 py-1.5 text-xs font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit shadow-lg']">
            <i class="fa-solid fa-user-tag mr-3"></i>
            Personal Details
         </button>
        <button @click="steps = 2" type="button" :class="[
            steps === 2? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-700 border border-churpy-green',
            'inline-flex items-center px-2 py-1.5 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit w-fit shadow-lg']">
          <i class="fa-solid fa-house-building mr-3"></i>
          Company
        </button>
        </div>

        <div v-show="steps === 1" class="pt-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">First, a bit about yourself</h3>
                  <p class="mt-1 text-sm text-gray-500">Tell us a bit about who you are and how you want to use the account.</p>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700"> First name </label>
                    <div class="mt-1">
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="Jane" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
                    <div class="mt-1">
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="Doe" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                    <div class="mt-1">
                      <input type="email" name="email" id="email" autocomplete="email" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="e.g +1 234 3445 3553" />
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
                          <div
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
                          </div>
                        </div>
                      </Combobox>

                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="tel" class="block text-sm font-medium text-gray-700"> Phone </label>
                    <div class="mt-1">
                      <input type="tel" v-maska="'###############'" required name="tel" id="tel" autocomplete="tel" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="+1-202-555-0152" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="city" class="block text-sm font-medium text-gray-700"> Password </label>
                    <div class="mt-1">
                      <input type="password" name="city" id="city" autocomplete="address-level2" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="*****" />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <RadioGroup v-model="selectedEnvironment">
                      <RadioGroupLabel class="text-base font-medium text-gray-900"> Select account type </RadioGroupLabel>

                      <div class="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <RadioGroupOption as="template" v-for="environment in environments" :key="environment.id" :value="environment" v-slot="{ checked, active }">
                          <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-churpy-green ring-2 ring-churpy-green' : '', 'relative bg-white border rounded-lg shadow-sm p-3 flex cursor-pointer focus:outline-none duration-700']">
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

                 <div class="sm:col-span-6 mb-5">
                    <div class="relative flex py-1 items-center">
                      <div class="flex-grow border-t border-gray-400"></div>
                      <span class="flex-shrink mx-4 text-gray-400">Or use social media</span>
                      <div class="flex-grow border-t border-gray-400"></div>
                  </div>


                  <div class="flex flex-row space-x-5 items-center justify-center w-full mt-5 mb-14">
                    <button class="flex flex-row items-center font-bold justify-center space-x-5 bg-white border text-green-800 rounded shadow-sm hover:opacity-80 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto" viewBox="-40.446 -22.19 350.532 133.14"><path d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/><path d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/><path d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/><path d="M224.64 2.53v65h-9.5v-65z" fill="#34A853"/><path d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/><path d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z" fill="#4285F4"/></svg>
                    </button>
                    <button class="flex flex-row items-center font-bold justify-center space-x-5 bg-blue-500 text-white px-3 py-2 rounded shadow-sm hover:opacity-80 transition-all">
                      <i class="fa-brands fa-linkedin mr-3"></i>
                      Linked In
                    </button>
                  </div>
                 </div>

                </div>
              </div>

        <!--  panel 2 company-->
              <div v-show="steps === 2" class="pt-6">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Company Details</h3>
                  <p class="mt-1 text-sm text-gray-500">Do you represent a company? Tell us a bit about it.</p>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                   <div class="sm:col-span-3">
                    <label for="tel" class="block text-sm font-medium text-gray-700"> Company Name </label>
                    <div class="mt-1">
                      <input type="text" required name="company" id="company" autocomplete="company" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="Company X" />
                    </div>
                  </div>

                     <div class="sm:col-span-3">
                    <label for="country2" class="block text-sm font-medium text-gray-700"> Where is it based? </label>
                    <div class="mt-1">
                      <Combobox id="country2" v-model="selected">
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
                          <div @after-leave="query = ''">
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
                          </div>
                        </div>
                      </Combobox>

                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="city" class="block text-sm font-medium text-gray-700"> Pick bank to integrate to</label>
                    <div class="mt-1">
                      <input type="text" name="banks" id="banks" autocomplete="address-level2" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="e.g KCB, Standard Chartered, NCBA" />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <div class="flex items-center h-5">
                      <input id="terms" aria-describedby="terms-description" name="terms" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-churpy-green border-gray-300 rounded" />
                         <span class="ml-2 text-gray-500">
                           I have read and do agree to <span class="font-brand">Churpy</span>'s <a href="#" class="text-churpy-green hover:underline">Terms and Conditions</a>
                         </span>
                    </div>

                  </div>

                </div>
              </div>

      </div>

      <div class="absolute bottom-0 xl:pb-8">
        <p class="text-gray-500">Your data is protected by our <span class="text-churpy-green">Privacy Policy</span> and <span class="text-churpy-green">Terms and Conditions</span></p>
      </div>

    </div>
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