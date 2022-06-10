<template>
  <div v-if="updating">
     <h3 class="font-bold"> Update Existing Rule </h3>
      <select id="location" name="location" class="mt-1 block pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded dark:border-gray-400 dark:bg-churpy-night-box">
        <option>---- Choose Rule ----</option>
        <option selected="">Rule 1</option>
        <option>Rule 2</option>
      </select>
  </div>
  <div v-else>
    <h2 class="font-bold">Create New Rule</h2>
  </div>
  <div class="my-2 space-y-5 divide-y divide-gray-100 max-h-80 overflow-y-auto">

     <!--generals-->
     <div class="grid grid-cols-1 text-sm lg:grid-cols-12 py-5">
        <div class="col-span-3">
          <h3 class="font-semibold">Name and Context</h3>
        </div>
         <div class="col-span-1 lg:col-span-9 mt-4 md:mt-0">
          <div class="flex flex-col space-y-5 md:space-y-reverse md:space-x-5 md:flex-row md:flex-wrap wrap">
             <div class="md:w-fit">
                <label for="f-name" class="block text-xs text-gray-700 dark:text-gray-400">Rule Name</label>
                <div class="mt-1">
                  <input type="text" name="f-name" id="f-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 py-1 leading-none text-xs rounded placeholder-gray-400 dark:border-gray-400 dark:bg-churpy-night-box" placeholder="Sample rule" />
                </div>
              </div>
             <div class="md:w-fit">
                <label class="block text-xs text-gray-700 dark:text-gray-400">Level
                </label>
                <div class="mt-1">
                  <select name="location" class="mt-1 block w-full pl-3 pr-10 py-1 leading-none text-xs border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded dark:border-gray-400 dark:bg-churpy-night-box">
                      <option>----Choose Level----</option>
                      <option>Tier 1</option>
                      <option>Tier 2</option>
                    </select>
                </div>
              </div>
          </div>
          <div class="md:w-fit mt-4 md:mt-0">
            <span>Initial Status</span>
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
          </div>
       </div>
      </div>

    <!--Description-->
      <div class="grid grid-cols-1 text-sm lg:grid-cols-12 py-5">
        <div class="col-span-3">
          <h3 class="font-semibold">Description</h3>
        </div>
         <div class="col-span-1 lg:col-span-9 mt-4 md:mt-0">
          <div class="flex flex-col space-y-5 md:space-y-reverse md:space-x-5 md:flex-row md:flex-wrap wrap">
             <div class="md:w-fit">
                <div class="mt-1">
                  <textarea cols="46" rows="3" name="f-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 py-1 leading-none text-xs rounded placeholder-gray-400 dark:border-gray-400 dark:bg-churpy-night-box" placeholder="Describe your rule.." />
                </div>
              </div>
          </div>

       </div>
      </div>

      <!--Rule-set-->
      <div class="grid grid-cols-1 text-sm lg:grid-cols-12 py-5">
        <div class="col-span-3">
          <h3 class="font-semibold">Rule-set</h3>
        </div>
         <div class="col-span-1 lg:col-span-9 mt-4 md:mt-0">
          <div class="flex flex-col space-y-5 md:space-y-reverse md:space-x-5 md:flex-row md:flex-wrap wrap">
             <div class="md:w-fit">
               <p class="text-sm">
                 This set helps the engine relate fields  during matching to increase accuracy.
               </p>
               <p class="text-red-600 text-xs">{{errors}}</p>
                <div class="mt-1">
                  <div class="max-h-64 overflow-y-auto divide-y divide-gray-400">
                    <div class="flex mb-2" :key="index" v-for="(rule, index) in rulesets">
                      <div class="grid gap-y-3 gap-x-2 grid-cols-6 lg:grid-cols-12 p-4">
                        <!--headers-->
                        <div class="col-span-6">
                          <label class="text-xs font-bold">Invoice Fields</label>
                          <select v-model="rule.invoice_column" name="location" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night-box">
                            <option>--- Invoice Columns ---</option>
                            <option>Invoice ID</option>
                            <option>Invoice Ref</option>
                            <option>Invoice Amount</option>
                          </select>
                        </div>
                        <div class="col-span-6">
                          <label class="text-xs font-bold">Operand</label>
                          <select v-model="rule.operand" name="location" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night-box">
                            <option>--- Operands ---</option>
                            <option>Equal</option>
                            <option>Fuzzy</option>
                            <option>Date range</option>
                            <option>Date</option>
                          </select>
                        </div>
                        <div class="col-span-6">
                          <label class="text-xs font-bold">Transaction Fields</label>
                          <select v-model="rule.bank_column" name="location" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night-box">
                            <option>--- Bank Columns ---</option>
                            <option>Transaction ID</option>
                            <option>Transaction Ref</option>
                            <option>Transaction Amount</option>
                          </select>
                        </div>
                        <div class="col-span-6">
                          <label class="text-xs font-bold">Value to check against (optional)</label>
                          <input type="text" v-model="rule.value" name="name" id="name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-gray-400 dark:bg-churpy-night-box" placeholder="value" />

                        </div>
                      </div>
                      <div class="flex space-x-2 lg:mt-4">
                        <button @click="removeRule(rule)" v-if="rulesets.length > 1" class="focus:ring-1 focus:ring-red-500 rounded-full h-5 w-5 flex items-center justify-center">
                          <i class="fa-solid fa-trash-circle text-red-500 hover:text-red-600 transition-all"></i>
                        </button>
                        <button v-if="index === rulesets.length-1" @click="addRule(rule)" class="focus:ring-1 focus:ring-gray-500 rounded-full h-5 w-5 flex items-center justify-center">
                          <i class="fa-solid fa-plus-circle text-gray-500 hover:text-gray-600 transition-all"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

       </div>
      </div>

  </div>



</template>

<script>
import {ref} from "vue";
import remove from "lodash/remove";
export default {
  name: "CustomForm",
  props:{
    updating:{default: false},
  },
  setup(props){
    console.log(props.updating)
    const rulesets = ref([
      {invoice_column:'', operand:'', bank_column:'', value:''}
    ])
    let errors = ref('')

    function removeRule(rule){
        remove(rulesets.value, rule)
    }

    function addRule(rule){
      // validate
      if (!(rule.invoice_column && rule.operand && rule.bank_column)){
          errors.value = "Please fill out all the required details."
      }else{
        errors.value = ''
        //push to array
        rulesets.value.push({invoice_column:'', operand:'', bank_column:'', value:''})
      }

    }

    return {rulesets , removeRule, addRule, errors}
  }
}
</script>

<style scoped>

</style>