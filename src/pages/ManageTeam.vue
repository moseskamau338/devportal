<template>
  <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-full">
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex">
          <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
              {name:'Manage Members', icon:'fa-solid fa-people-group'},
              {name:'Manage Roles', icon:'fa-solid fa-poll-people'}]" :key="index">
            <button :class="{'text-churpy-green border-b-4 border-churpy-green':selected}" class="mr-6 delay-[20ms] transition-colors duration-500">

              <i :class="item.icon" class="mr-2"></i>
              {{ item.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel as="div" class="transition-all px-14">
            <p class="prose-base">
              Team management allows you to include workmates across the board to cater for different aspects of your workflow. You will be able to <strong>invite, assign roles</strong> and <strong>manage role permissions</strong> as you please.
            </p>

            <Members class="mt-12" />


          </TabPanel>
          <TabPanel class="transition-all">
                <p class="prose">
                  Check the appropriate box to assign permissions to roles as categorized below
                </p>
                <div class="flex justify-between w-full">
                      <Permissions class="mx-5" :groups="groups" />

                      <div id="summary" class="w-[500px] rounded px-4 py-2 bg-white border-gray-100 shadow dark:bg-churpy-night-box">
                        <h1 class="font-bold">Manage user groups</h1>
                        <p class="prose text-sm mt-2">
                          You can create as many groups as needed to manage your users. <br>
                          When <code class="px-1 py-0.5 bg-red-200 rounded">removing</code> groups, note that <span class="font-semibold">only groups with no users can be removed</span>
                        </p>

                        <form @submit.prevent="addGroup" class="my-2">
                          <label for="name" class="font-semibold">Add a new group</label>
                          <div class="flex relative items-center">
                            <input type="text" name="name" id="name" v-model="group_name" autocomplete="name" class="max-w-sm w-[50%] block w-full shadow-sm focus:ring-churpy-green focus:border-churpy-green sm:max-w-xs sm:text-sm mr-2 border-gray-300 rounded-md text-sm h-8 placeholder-gray-400" placeholder="Group name">

                            <button @click="addGroup" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-night-box hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-night-box transition-all h-fit" :disabled="processing">
                              <span v-if="processing"><i class="animate-spin fa-duotone fa-spinner-third"></i> processing..</span>
                              <span v-else><i class="fa-solid fa-user-plus mr-2"></i>Create group</span>
                            </button>

                          </div>
                        </form>

                        <ul class="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
                          <li :key="index" v-for="(group, index) in groups">
                            <div class="flex flex-col">
                              <div class="flex justify-between">
                                <span class="font-bold"><i class="fa-solid fa-dash"></i> {{ capitalize(group.name) }}</span>

                                <small>Created: <span class="text-gray-400">{{group.created_at}}</span></small>

                              </div>
                              <div class="flex justify-between group">
                                <span class="ml-2 mt-1 text-xs text-gray-400"><i class="fa-solid fa-users mr-2"></i> {{ group.users }} users</span>
                                <button @click="removeGroup(group)" v-show="group.users <= 0" class="hidden group-hover:flex transition-all bg-red-300 shadow h-4 w-4 text-red-700 rounded-full justify-center items-center"><i class="fa-solid fa-trash-alt text-[9px]"></i></button>
                              </div>
                            </div>
                          </li>

                        </ul>

                      </div>

                </div>

          </TabPanel>
        </TabPanels>
      </TabGroup>
  </div>
</template>

<script>
import {ref, inject} from "vue";
import moment from 'moment'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Members from "@/components/page/Teams/Members.vue";
import Permissions from "@/components/page/Teams/Permissions.vue";
import capitalize from 'lodash/capitalize'
import remove from 'lodash/remove'


export default{
  name: 'ManageTeam',
  components:{
    Permissions,
    Members,
    TabGroup, TabList, Tab, TabPanels, TabPanel
  },

  setup(){
    const emitter = inject('emitter')
    const processing = ref(false)

    let group_name = ref('')
    let groups = ref([
        {name:'Admin', users:12, created_at:moment('12/03/2022').format('MMMM Do YYYY')}
    ])

    const removeGroup = (group) => {remove(groups.value, group)}

    function addGroup(){
      if (group_name.value.length>0){
        processing.value = true
        setTimeout(()=>{
          groups.value.push({name: group_name.value, users:0, created_at:moment().format('MMMM Do YYYY')})
          //reset
          group_name.value = ''
          //emitter.emit('toast', {title:'Group added successfully', type:'success'})
          processing.value = false
        }, 2000)
      }else{
        emitter.emit('toast', {title:'Group name is required', type:'danger'})
      }
    }

    return {
      addGroup,
      removeGroup,
      groups,
      group_name,
      processing,
      capitalize,
    }
  }

}
</script>


