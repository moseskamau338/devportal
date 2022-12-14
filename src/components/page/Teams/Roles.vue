<template>
<p class="prose dark:text-gray-400">
  Check the appropriate box to assign permissions to roles as categorized below
</p>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 relative">
      <div id="summary" class="lg:w-[500px] lg:col-start-2 lg:row-start-1 relative w-full rounded px-4 py-2 bg-white border-gray-100 shadow dark:bg-churpy-night-box">
        <h1 class="font-bold">Manage user roles</h1>
        <p class="prose text-sm mt-2 dark:text-gray-400">
          You can create as many groups as needed to manage your users. <br>
          When <code class="px-1 py-0.5 bg-red-200 rounded">removing</code> groups, note that <span class="font-semibold">only groups with no users can be removed</span>
        </p>

        <form @submit.prevent="addGroup" class="my-2">
          <label for="name" class="font-semibold">Add a new role</label>
          <div class="flex relative items-center">
            <input type="text" name="name" id="name" v-model="group_name" autocomplete="name" class="max-w-sm w-[50%] block w-full shadow-sm focus:ring-churpy-green focus:border-churpy-green sm:max-w-xs sm:text-sm mr-2 border-gray-300 rounded-md text-sm h-8 placeholder-gray-400 dark:border-gray-400 dark:bg-churpy-night" placeholder="Group name">

            <button @click="addGroup" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-night-box hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-night-box dark:bg-churpy-night transition-all h-fit" :disabled="processing">
              <span v-if="processing"><i class="animate-spin fa-duotone fa-spinner-third"></i> processing..</span>
              <span v-else><i class="fa-solid fa-user-plus mr-2"></i>Create group</span>
            </button>

          </div>
        </form>

        <ul class="mt-3 space-y-2 lg:max-h-[300px] max-h-32 overflow-y-auto">
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
      <div>
        <h2 class="font-bold">Permissions</h2>
          <Permissions class="mx-5 lg:col-start-1 lg:row-start-1 w-full" :groups="groups" />
      </div>
</div>
</template>

<script>
import {ref, inject} from "vue";
import dayjs from 'dayjs'
import capitalize from 'lodash/capitalize'
import remove from 'lodash/remove'
import Permissions from "@/components/page/Teams/Permissions.vue";
export default {
  name: "Roles",
  components:{
    Permissions
  },
  setup(){
    const emitter = inject('emitter')
    const processing = ref(false)

    let group_name = ref('')
    let groups = ref([
        {name:'Admin', users:12, created_at:dayjs('12/03/2022').format('MMM D, YYYY')}
    ])

    const removeGroup = (group) => {remove(groups.value, group)}

    function addGroup(){
      if (group_name.value.length>0){
        processing.value = true
        setTimeout(()=>{
          groups.value.unshift({name: group_name.value, users:0, created_at:dayjs().format('MMM D, YYYY')})
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

<style scoped>

</style>