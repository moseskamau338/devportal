<template>
<Modal :show="open" source="invite">
  <template #title>
    <h2 class="text-lg">Invite Members</h2>
  </template>
  <template #body>
    <div>
      <p class="pr-24">
        Members will receive invite links via emails through which they can authenticate and setup their <b>Churpy</b> account.
      </p>
    </div>
    <form @submit.prevent>
        <h2 class="mt-4 mb-2 font-semibold">Add contacts to invite</h2>
      <p class="text-red-600 py-1">{{errors}}</p>
      <div class="max-h-64 overflow-y-auto">
        <div class="flex lg:items-center mb-2" :key="index" v-for="(contact, index) in contacts">
          <div class="grid gap-y-3 gap-x-2 grid-cols-6 lg:grid-cols-12 px-4">
            <!--headers-->
            <div class="col-span-3">
              <input type="text" v-model="contact.name" name="name" id="name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Full Name" />
            </div>
            <div class="col-span-3">
              <input type="email" v-model="contact.email" name="email" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Email" />
            </div>
            <div class="col-span-3">
              <input type="text" name="phone" v-model="contact.phone" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Phone (optional)" />
            </div>
            <div class="col-span-3">
              <select id="location" v-model="contact.role" name="location" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>--- Choose Role ---</option>
                <option>Admin</option>
                <option>Accountant</option>
                <option>Marketing</option>
              </select>

            </div>
          </div>
          <div class="flex space-x-2">
            <button @click="removeContact(contact)" v-if="contacts.length > 1" class="focus:ring-1 focus:ring-red-500 rounded-full h-5 w-5 flex items-center justify-center">
              <i class="fa-solid fa-trash-circle text-red-500 hover:text-red-600 transition-all"></i>
            </button>
            <button v-if="index === contacts.length-1" @click="addContact(contact)" class="focus:ring-1 focus:ring-gray-500 rounded-full h-5 w-5 flex items-center justify-center">
              <i class="fa-solid fa-plus-circle text-gray-500 hover:text-gray-600 transition-all"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  </template>
  <template #footer>
    <div class="flex items-center space-x-2">
      <c-button variant="danger">Cancel</c-button>
      <c-button variant="success">Send Invites</c-button>
    </div>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import remove from "lodash/remove";
import {inject, ref} from "vue";
import CButton from "@/components/parts/CButton.vue";
export default {
  name: "ClientInvite",
  components: {CButton, Modal},
  props:{
    open:{type:Boolean, default: false, required: true },
  },
  setup(props, {emit}){
    const emitter = inject('emitter')

    const contacts = ref([
        {name:'', phone:'', email:'', role: ''}
    ])
    let errors = ref('')

    function removeContact(contact){
        remove(contacts.value, contact)
    }

    function addContact(record){
      // validate
      if (!(record.name && record.email && record.role)){
          errors.value = "Please fill out all the required details."
      }else{
        errors.value = ''
        //push to array
        contacts.value.push({name:'', phone:'', email:'', role: ''})
      }

    }

    emitter.on('close_modal', (source)=>{
      if (source === 'invite'){
        emit('close')
      }
    })

    return {contacts, addContact, errors, removeContact}
  }
}
</script>

<style scoped>

</style>