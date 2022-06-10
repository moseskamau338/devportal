<template>
<p>Here is a list of all your registered rules along with their corresponding status. After any changes, make sure to click at the bottom</p>

  <h2 class="font-bold text-md mt-4">Rules Status</h2>

  <table class="w-full lg:w-3/4 mt-4">
    <tbody>
    <tr :key="index" v-for="(rule, index) in rules" class="[&>*]:py-1">
      <td>
        <h5 class="mr-20 text-sm font-medium">{{ rule.name }}</h5>
      </td>
      <td>
          <div class="flex flex-col md:flex-row">
            <div class="relative flex items-start mr-5">
              <div class="flex items-center h-5">
                <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded-sm" />
              </div>
              <div class="ml-3 text-sm">
                <label for="comments" class="text-gray-700 dark:text-gray-400">Active</label>
              </div>
            </div>
            <div class="space-y-2 mt-2 md:mt-0 sm:flex sm:items-center sm:space-y-0 sm:space-x-5">
                <div v-for="status in [{id:1, title:'Auto'}, {id:2, title:'Suggested'}]" :key="status.id" class="flex items-center">
                  <input :id="status.id" name="notification-method" type="radio" :checked="status.id === 1" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300" />
                  <label :for="status.id" class="ml-3 block text-sm text-gray-700 dark:text-gray-400">
                    {{ status.title }}
                  </label>
                </div>
              </div>
          </div>
      </td>
      <td>
         <div class="flex space-x-2">
              <span v-if="index > 2" class="h-5 w-5 rounded-full flex justify-center items-center bg-red-200 hover:bg-red-300 hover:shadow-md hover:scale-105 cursor-pointer transition-all">
               <i class="fa-solid fa-trash-alt text-red-600 text-[12px]"></i>
             </span>

             <span v-if="rules.length > 0" class="h-5 w-5 rounded-full flex justify-center items-center bg-green-200 mr-1 hover:bg-green-300 hover:
             shadow-md hover:scale-105 cursor-pointer transition-all">
               <i class="fa-solid fa-eye text-churpy-green text-[12px]"></i>
             </span>
            </div>
      </td>
    </tr>
    </tbody>
  </table>

  <section class="bg-gray-50 dark:bg-churpy-night rounded px-4 py-2 w-full shadow mt-8">
    <header class="flex justify-between">
      <h4 class="font-bold text-md">View Rule Mappings: <span class="text-green-500">Custom rule 3</span></h4>

      <div class="text-right leading-none">
        <p class="italic text-xs block">
          Last edited by: <b>Eric Muthemba</b>
        </p>
          <time class="italic text-[10px]">08/11/2021</time>

      </div>
    </header>

    <table class="w-full mt-2">
      <thead class="bg-gray-200 dark:bg-churpy-night-box text-xs uppercase text-gray-500 tracking-wide">
      <tr>
        <th colspan="2" class="pl-4 py-1">Invoice</th>
        <th colspan="4" class="border-l border-l-4 border-l-gray-600 px-4 py-1">Bank</th>
      </tr>
      <tr class="text-[10px]">
        <th class="pl-4">Variable</th>
        <th>Modifier</th>
        <th class="border-l border-l-4 border-l-gray-600 px-4">Variable</th>
        <th>Modifier</th>
        <th>offset/value</th>
        <th>range</th>
      </tr>
      </thead>

      <tbody class="text-xs">
      <tr class="[&:nth-child(even)]:bg-gray-200/60 dark:[&:nth-child(even)]:bg-gray-700/60 hover:bg-gray-200/70 dark:hover:bg-gray-600/50" :key="ind" v-for="ind in 3">
        <td class="pl-4">Invoice Amount</td>
        <td>equal_with_tolerance</td>
        <td class="pl-4">Transaction Amount</td>
        <td>equal_with_tolerance</td>
        <td>23</td>
        <td>0-0</td>
      </tr>
      </tbody>

    </table>


  </section>

</template>

<script>
import {ref} from "vue";
export default {
  name: "ExistingRules",
  setup(){
    const rules = ref([
      {name:'Churpy Teir 1 Ruleset'},
      {name:'Churpy Teir 2 Ruleset'},
      {name:'Churpy Teir 3 Ruleset'},
      {name:'Custom Ruleset 1'},
    ])
    return {rules}
  }

}
</script>

<style scoped>

</style>