<template>
    <Modal :show="show">
    <template #title>
      <span class="text-md">
        <i class="fa-solid fa-user-shield mr-2"></i>
        Edit {{member.name}}
      </span>
    </template>
    <template #body>
      <div class="mb-10 lg:mb-0">
        <div class="sm:grid grid-cols-1 grid-flow-col sm:grid-cols-2 px-8">
          <div class="col-start-1 sm:col-start-2 flex justify-self-end">
            <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit mr-3">
              <i class="fa-solid fa-save mr-1"></i>
              Save changes
            </button>

            <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 transition-all h-fit">
              <i class="fa-solid fa-user-slash mr-1"></i>
              Disable User
            </button>
          </div>

          <div class="col-start-2 sm:col-start-1">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-400">{{ member.name }}</dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-400">{{ member.email }}</dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Phone</dt>
                <dd class="mt-1 text-sm text-gray-400">{{ member.phone }}</dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Role</dt>
                <dd class="mt-1 text-sm text-gray-400">{{ member.role.name }}</dd>
              </div>
            </dl>
          </div>

        </div>
        <div class="w-full px-8 py-8">
         <permissions :groups="groups" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="pr-8">
          <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green mr-3">
            <i class="fa-solid fa-save mr-1"></i>
              Create User
            </button>
        <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs rounded shadow-sm text-gray-500 border-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green">
            <i class="fa-solid fa-user-plus mr-1"></i>
              Save and add new
            </button>
      </div>
    </template>
  </Modal>

</template>

<script>
import Modal from "../Modal.vue";
import Permissions from "./Permissions.vue";
import {ref} from "vue";
import dayjs from 'dayjs'

export default {
  name: "EditMember",
  components: {Permissions, Modal},
  props:{
    show:{
      required: true,
      type: Boolean
    },
    member: {
      required: true,
      type: Object
    }
  },

  setup(props){
    let groups = ref([
        {name:'Admin', users:12, created_at:dayjs('12/03/2022').format('MMMM Do YYYY')}
    ])
    return {props, groups}
  }
}
</script>

<style scoped>

</style>