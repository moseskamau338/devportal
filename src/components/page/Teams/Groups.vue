<template>
  <p class="px-5">
    Groups help you to categorize and organize users into groups or departments for better management.
  </p>
  <section class="grid grid-cols-1 lg:grid-cols-12 mt-8">
      <div class="col-span-12 lg:col-span-8 px-5">
        <TableLite actioned :headers="[
            {key:'group_name', label:'Group Name', sortable: true},
            {key:'default_role', label:'Default Role', sortable: true},
            {key:'users', label:'Users', sortable: false},
            {key:'created_at', label:'Created At', sortable: true},
        ]" :records="[
            {group_name:'Managers', default_role:'Admin', users:['John Newton','Nganga', 'Charles Wesley'], created_at:'23/04/2021'}
        ]">
          <template #header>
            <div class="flex items-center -ml-3">
                <div class="mt-1 relative rounded-md">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fa-solid fa-search text-sm text-gray-400"></i>
                  </div>
                  <input type="text" name="query" id="text" class="focus:ring-green-500 focus:border-green-500 block w-[98%] focus:w-full pl-10 sm:text-xs leading-none border-gray-300 rounded transition-all dark:bg-churpy-night dark:border-gray-500" placeholder="Search groups.." />
                </div>
              </div>
          </template>

          <template #group_name="{record}">
            <span class="flex items-center text-green-600">
              <i class="fa-solid fa-folder mr-2"></i>
              {{record.group_name}}
            </span>
          </template>

          <template #users="{record}">
            <div class="flex">
              <tool-tip :content="name" :key="index" v-for="(name, index) in record.users" class="h-8 w-8 flex items-center rounded-full justify-center font-bold shadow-md transition-all hover:z-10 hover:scale-105 hover:-translate-y-1 [&+span]:-ml-3 dark:text-gray-700" :style="`background-color:${avatar(name, 0.8).color}`">
                  {{avatar(name, 0.8).character}}
              </tool-tip>
            </div>
          </template>

        </TableLite>
      </div>
      <div class="col-span-12 mt-8 lg:mt-0 lg:col-span-4 border px-3 py-2 border-gray-400 rounded">
        <h5 class="text-md font-bold">Create Group</h5>
        <form @submit.prevent>
          <div class="mt-2 grid grid-cols-1 gap-y-3 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="first-name" class="block text-sm"> Group name </label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500" placeholder="E.g Managers" />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="roles" class="block text-sm"> Roles </label>
              <div class="mt-1">
                <select id="roles" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500">
                  <option>Admin</option>
                  <option>Finance</option>
                  <option>Auditor</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6">
              <label class="block text-sm"> Add Members </label>
              <div class="mt-1">
                <select multiple name="members" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500">
                  <option>Member 1</option>
                  <option>Member 2</option>
                  <option>Member 3</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-6 flex">
               <tool-tip :content="name" :key="index" v-for="(name, index) in ['Moses','Harman']" class="h-8 w-8 flex items-center rounded-full justify-center font-bold shadow-md transition-all hover:z-10 hover:scale-105 hover:-translate-y-1 [&+span]:-ml-1" :style="`background-color:${avatar(name).color}`">
                    {{avatar(name).character}}
                </tool-tip>
            </div>

            <div class="sm:col-span-6 flex justify-end">
              <c-button variant="success">Save</c-button>
            </div>


            </div>
        </form>
      </div>
  </section>
</template>

<script>
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import CButton from "@/components/parts/CButton.vue";
import {inject} from "vue";
import ToolTip from "@/components/parts/ToolTip.vue";
export default{
  name: 'Groups',
  components: {ToolTip, CButton, TableLite},
  setup(){
    const helpers = inject('helpers')

    return {avatar:helpers.getRandomColor}
  }
}
</script>


