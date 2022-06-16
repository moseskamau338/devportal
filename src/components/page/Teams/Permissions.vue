<template>
  <div class="flex flex-col space-y-3 w-full max-h-[500px] overflow-y-auto">

    <div :key="index" v-for="(category, index) in permissionStack" class="bg-white dark:bg-churpy-night-box w-full shadow py-2 px-4">
      <header class="flex justify-between">
        <h3 class="font-bold text-gray-500 dark:text-gray-400">{{ capitalize(category.name) }}</h3>

        <div class="space-x-2">
          <button type="button" class="inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded shadow-sm text-churpy-night dark:text-white border border-churpy-night-box focus:ring-2 focus:ring-0 focus:text-white focus:bg-churpy-night-box transition-all h-fit">Cancel</button>

          <button type="button" class="inline-flex items-center px-1.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">Save changes</button>
        </div>
      </header>

      <div class="w-[40%] my-2">
        <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Choose Roles</label>
        <select v-model="selectedGroup" id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-churpy-dark focus:border-churpy-dark sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night">
          <option v-for="(group,index) in props.groups">{{group.name}}</option>
        </select>
      </div>

       <div class="px-4 mt-5">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <slot name="header"></slot>
          </div>
          <div class="mt-4 sm:mt-0 md:ml-4 sm:ml-16 sm:flex-none">
            <slot name="actions"></slot>
          </div>
        </div>
        <div class="mt-4 flex flex-col mx-2" v-if="category.variables.length > 0">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle">
              <div class="ring-1 ring-black ring-opacity-5 md:rounded-lg h-80 overflow-y-auto">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-200 dark:bg-churpy-dark sticky z-10 top-0">
                  <tr class="py-0">
                      <th  v-for="(field, index) in fields" scope="col" class="px-2 min-w-2 group py-3 text-xs font-semibold text-churpy-dark dark:text-gray-400 uppercase" :class="field.key !== 'description'? 'text-center':''">
                        <!--<i class="fa-solid fa-arrow-alt-down text-gray-400 cursor-pointer ml-0 mr-1 group-hover:scale-105 group-hover:text-gray-600 transition-all "></i>-->

                        <span v-if="!field.action" class="relative flex items-center justify-between">
                          <input v-show="field.selectable" type="checkbox" class="w-4 h-4 rounded focus:ring-offset-1 focus:ring-churpy-green focus:bg-churpy-green focus:border-churpy-green"/>
                          <span>{{field.label || field.key}}</span>

                        </span>

                      <span v-else class="sr-only">Edit</span>
                    </th>

                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white dark:bg-churpy-dark/60 h-9 overflow-auto">
                  <tr :key="index" v-for="(record, index) in category.variables" class="dark:hover:bg-gray-300/20 hover:bg-gray-100 transition-all cursor-pointer">
                    <td :key="ind" v-for="(key, ind) in Object.keys(record)" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" :class="key !== 'description'? 'text-center':''">
                      <!--key => row key-->
                      <!--headers[index].key => header index-->
                      <slot :name="key" v-bind:record="record">
                        <span v-if="key === 'description'">{{ record[key] }}</span>
                        <input v-else v-model="record[key]" name="permission" type="checkbox" :class="{
                          'focus:ring-green-400 text-churpy-green' : record[key],
                          'focus:ring-gray-500 text-gray-600' : !record[key],
                          ' h-4 w-4 border-gray-300 rounded-sm':true}">
                      </slot>
                    </td>

                  </tr>
                  </tbody>
                </table>
              </div>


            </div>
          </div>
        </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4" v-else>
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                  <span v-if="permissionStack.length === 0">
                    <strong>No records available</strong>
                  </span>
                  <span v-if="permissionStack.length > 0">
                    Your records structure might be incorrect
                  </span>
                </p>
              </div>
            </div>
          </div>


    </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import capitalize from "lodash/capitalize";
import TableLite from "@/components/widgets/Tables/TableLite.vue";
export default {
  name: "Permissions",
  components: {TableLite},
  props:{
    groups: {required: true}
  },

  setup(props){
    const permissionStack = ref([
      {name: 'Document Level Permissions',
        variables: [
            {description:'Invoices', view:true,create:false,update:false,approve:true,delete:false},
            {description:'Bank Transactions', view:true,create:false,update:false,approve:true,delete:false},
            {description:'Adjustments', view:true,create:false,update:false,approve:true,delete:false},
            {description:'Remitances', view:true,create:false,update:false,approve:true,delete:false},
            {description:'Withdrawals', view:true,create:false,update:false,approve:true,delete:false}
        ]},
      {name: 'User management', variables: [
          {description:'Company users', view:true,create:false,update:false,approve:true,delete:false},
          {description:'Clients', view:true,create:false,update:false,approve:true,delete:false},
        ]},
    ])
    const selectedGroup = ref(props.groups[0])

    const fields = ref([
      {key:'description'},
      {key:'view'},
      {key:'create'},
      {key:'update'},
      {key:'approve'},
      {key:'delete'},
    ])
    return {
      permissionStack,
      fields,
      capitalize,
      selectedGroup,
      props
    }
  }
}
</script>

<style scoped>

</style>