<template>
    <Modal :show="show">
    <template #title>
      <span class="text-md">
        <i class="fa-solid fa-user-plus mr-2"></i>
        Create User
      </span>
    </template>
    <template #body>
      <div class="grid grid-cols-1 md:grid-cols-2 mb-10 lg:mb-0">
        <div>
          <img class="w-1/3 md:w-1/2 mb-8 left-0 right-0 mx-auto rounded" src="/images/pages/create_user.png" alt="create churpy user">
          <p class="text-md font-light">
            Once registered, your members will receive an invite link where they can setup their account credentials as needed.
          </p>
        </div>
        <div class="w-full px-8 py-8">
          <form @submit.prevent class="space-y-3">
            <div class="col-span-6 sm:col-span-4 mb-4">
              <h3 class="font-bold">User details</h3>
            </div>
            <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-500 font-light dark:text-gray-300">Name</label>
                <input type="text" name="name" id="name" autocomplete="name" class="mt-1 block w-full dark:bg-churpy-night-box dark:border-gray-500 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm leading-tight">
              </div>

            <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-500 font-light dark:text-gray-300">Email address</label>
                <input type="email" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full dark:bg-churpy-night-box dark:border-gray-500 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
              </div>

            <div class="col-span-6 sm:col-span-4">
                <label for="tell" class="block text-sm font-medium text-gray-500 font-light dark:text-gray-300">Phone (optional)</label>
                <input type="tel" name="tell" id="tell" autocomplete="email" class="mt-1 block w-full dark:bg-churpy-night-box dark:border-gray-500 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-500 font-light dark:text-gray-300">Role</label>
                <select id="role" name="role" autocomplete="role" class="mt-1 block w-full dark:bg-churpy-night-box dark:border-gray-500 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
                  <option>Admin</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                </select>
              </div>

          </form>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="pr-8">
        <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs rounded shadow-sm text-gray-500 border-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green mr-3">
            <i class="fa-solid fa-user-plus mr-1"></i>
              Save and add new
            </button>
          <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green">
            <i class="fa-solid fa-save mr-1"></i>
              Create User
            </button>
      </div>
    </template>
  </Modal>

</template>

<script>
import Modal from "../Modal.vue";
export default {
  name: "CreateMember",
  components: {Modal},
  props:{
    show:{
      required: true,
      type: Boolean
    }
  },

  setup(props){
    return {props}
  }
}
</script>

<style scoped>

</style>