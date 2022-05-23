<template>
  <div class="flex justify-between items-center mt-10">
    <div id="right-actions pt-10">
      <button @click="showCreate = !showCreate" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white hover:bg-green-600 bg-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">
        <i class="fa-solid fa-user-plus mr-2 text-sm"></i>
        Add Member</button>
    </div>

    <div id="left-actions" class="flex">
      <div class="mt-1 relative rounded-md">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i class="fa-solid fa-search text-lg text-gray-400"></i>
      </div>
      <input type="text" name="query" id="text" class="focus:ring-green-500 focus:border-green-500 block w-[90%] focus:w-full pl-10 sm:text-sm border-gray-300 rounded-md transition-all" placeholder="Search members" />
    </div>
    </div>
  </div>

  <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th v-for="(head, index) in ['Name', 'Phone', 'Email', 'Role', 'Actions']" :key="index"  scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      {{ head }}
                      <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(member, index) in members" :key="index">
                  <td class="whitespace-nowrap flex items-center py-4 pl-4 pr-3 text-sm font-medium text-gray-700 sm:pl-6">
                    <div class="h-6 w-6 rounded-full text-sm flex items-center justify-center mr-2 p-4" :style="`background-color: ${helpers.getRandomColor(member.name).color}`">{{helpers.getRandomColor(member.name).character}}</div>
                    {{ member.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ member.phone }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ member.email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                    <Listbox as="div" v-model="member.role">
                      <div class="mt-1 relative">
                        <ListboxButton class="bg-white relative w-full border border-gray-300 rounded shadow-sm pl-3 pr-10 py-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-churpy-green focus:ring-green-500 focus:border-green-500 sm:text-sm">
                          <span class="block truncate">{{ member.role.name }}</span>
                          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <i class="text-gray-400 fa-solid fa-sort" aria-hidden="true"></i>
                          </span>
                        </ListboxButton>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-md max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                            <ListboxOption as="template" v-for="role in [
                                {id:1, name: 'Admin'},
                                {id:2, name: 'Manager'},
                                {id:3, name: 'Finance'},
                                {id:4, name: 'I.T'},
                            ]" :key="role.id" :value="role" v-slot="{ active, selected }">
                              <li :class="[active ? 'text-white bg-green-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                <span :class="[member.role.name.toLowerCase() === role.name.toLowerCase() ? 'font-semibold' : 'font-normal', 'block truncate']">
                                  {{ role.name }}
                                </span>

                                <span v-if="member.role.name.toLowerCase() === role.name.toLowerCase()" :class="[active ? 'text-white' : 'text-green-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                  <i class="fa-solid fa-check text-md" aria-hidden="true"></i>
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>

                  </td>

                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                      <button @click="actions.showEditForm(member)" type="button" class="inline-flex items-center px-2 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white hover:bg-green-600 bg-churpy-green focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">
                        Manage
                      </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  <!--modals-->
  <CreateMember :show="showCreate" />
  <EditMember :show="edit.show" :member="edit.member" />
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import Modal from "@/components/page/Modal.vue";
import {ref, inject, onMounted} from "vue";
import CreateMember from "@/components/page/Teams/CreateMember.vue";
import EditMember from "@/components/page/Teams/EditMember.vue";
export default {
  name: "Members",
  components: {
    CreateMember,
    EditMember,
    Modal,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  },
  setup(){
    const emitter = inject('emitter')
    const helpers = inject('helpers')

    const members = ref([
      {name: 'Moses Kamau Muchiri', email: 'moseskamau338@gmail.com', phone:'+2547566453', role: {id:1,name:'Admin'}},
      {name: 'James Kamau', email: 'james@companyx.com', phone:'+2547236853', role: {id:1,name:'Admin'}}
    ])
    const showCreate = ref(false)
    const edit = ref({
      show: false,
      member: {}
    })
    const actions = {
      submitCreateForm : () =>{
        console.log('creating')
      },
      showEditForm: (member) => {
        edit.value.show = true;
        edit.value.member = member
      }
    }

    //hooks
    onMounted(()=>{
          emitter.on('close_modal', ()=>{
               showCreate.value = false
                edit.value.show = false
           })
        })


    return {members, showCreate, actions, edit, helpers}
  }
}
</script>

<style scoped>

</style>