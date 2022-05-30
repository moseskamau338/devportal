<template>
  <div class="mx-4 my-2 space-y-5 divide-y divide-gray-100">
    <div>
      <h2 class="font-bold">Setup email templates</h2>
      <p>This section helps you add templates for communication with your customers. You can add as many as you please.</p>
    </div>

    <!--actions-->
    <div class="grid grid-cols-1  lg:grid-cols-3 py-5">
      <div class="col-span-1 pr-5">
        <h3>Contact Email</h3>
        <Alert variant="warning" class="mt-2 text-xs">
          Please note that <b>SMS</b> will cost <b>KES 1.00</b> each <b>billed monthly.</b> Email is free.
        </Alert>
      </div>

      <div class="col-span-1 lg:col-span-2 mt-4 lg:mt-0">
        <div class="space-y-5">
          <h3>How do you want to reach your customers?</h3>
          <div class="flex flex-col md:flex-row space-y-5 space-x-reverse md:space-y-reverse md:space-x-5">
            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="small" aria-describedby="small-description" name="method" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
              </div>
              <div class="ml-3 text-sm">
                <label for="small" class="font-medium text-gray-700">By Email</label>
              </div>
            </div>

            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="large" aria-describedby="large-description" name="method" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
              </div>
              <div class="ml-3 text-sm">
                <label for="large" class="font-medium text-gray-700">By SMS</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- card section-->
    <div class="grid grid-cols-1 lg:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Message Templates</h3>
        <small class="mt-4">Templates you create here will be used in the system to contact your customers at specific times or events.
          <br>Think of them as <b>reminders</b>. </small>
      </div>

      <div class="col-span-1 lg:col-span-2 mt-4 lg:mt-0">
        <h3>Create you message templates here. Need some guidance? Check this out</h3>

        <form class="grid grid-cols-3 gap-5 mt-5">
            <div>
              <label for="plus" class="block text-sm font-medium text-gray-700">No. Of Days</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <span class="text-gray-500 sm:text-sm"> <i class="fa-solid fa-minus"></i> </span>
                </div>
                <input type="number" name="days" id="plus" class="focus:ring-green-500 focus:border-green-500 block w-full px-12 sm:text-sm border-gray-300 rounded text-center plain text-sm py-2 leading-none" placeholder="0" aria-describedby="add" />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <span class="text-gray-500 sm:text-sm" id="add"> <i class="fa-solid fa-plus"></i> </span>
                </div>
              </div>
            </div>

            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Timing</label>
              <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>---Choose timing---</option>
                <option>Before</option>
                <option>After</option>
              </select>
            </div>

            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Customer Targets</label>
              <search-select />
            </div>

          <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Notification Type</label>
              <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                <option>---Choose one---</option>
                <option>New invoice Notification</option>
                <option>Invoice Overdue Notification</option>
                <option>Invoice Due Notification</option>
                <option>Invoice Paid Notification</option>
              </select>
            </div>

          <div class="col-span-3">
             <label class="block text-sm font-medium text-gray-700">Message</label>
            <small class="text-sm">Draft your <b>notification message</b></small>
            <Editor class="mt-4" v-model="form.message" />
          </div>

        </form>
      </div>

    </div>

  <!--save-->
    <div class="py-5 space-x-2 flex justify-end">
      <c-button variant="danger" class="text-lg">Cancel</c-button>
      <c-button variant="success" class="text-lg">Save Settings</c-button>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/parts/Alert.vue";
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import {ref} from "vue";
import Badge from "@/components/parts/Badge.vue";
import CButton from "@/components/parts/CButton.vue";
import SearchSelect from "@/components/parts/SearchSelect.vue";
import Editor from "@/components/parts/Editor.vue";

export default {
  name: "Payments",
  components: {
    Editor,
    SearchSelect, CButton, Badge, Alert, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption},
  setup(){
    let form = ref({message: 'Something here'})
    const cards = [
        { name: 'Visa Card', expiry: '06/24', card_number: '4242 4242 4242 4242', holder: 'James Musyimi', icon: 'fa-cc-visa', disabled:false },
        { name: 'Master Card', expiry: '02/23', card_number: '5555 5555 5555 4444', holder: 'James Musyimi', icon: 'fa-cc-mastercard', disabled:false },
      ]

    const selected = ref(null)

    return {cards,selected, form}
  }
}
</script>

<style scoped>

</style>