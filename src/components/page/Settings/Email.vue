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
                <input id="small" aria-describedby="small-description" name="method" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 dark:border-gray-400 dark:bg-churpy-night-box">
              </div>
              <div class="ml-3 text-sm">
                <label for="small" class="font-medium text-gray-700 dark:text-gray-400">By Email</label>
              </div>
            </div>

            <div class="relative flex items-start">
              <div class="flex items-center h-5">
                <input id="large" aria-describedby="large-description" name="method" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 dark:border-gray-400 dark:bg-churpy-night-box">
              </div>
              <div class="ml-3 text-sm">
                <label for="large" class="font-medium text-gray-700 dark:text-gray-400">By SMS</label>
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
        <h3>Create you message templates here. Need some guidance? <tool-tip class="text-green-600 cursor-pointer">
          <template #html>
            <div class="py-2 px-3">
              <h1 class="font-bold text-md mb-2">Writing custom templates</h1>
              <p class="mb-1">
                Here are some easy guidelines to consider as you develop your message templates:
              </p>
              <ul class="list-decimal px-2 mx-4">
                <li class="text-xs">Each entry will be used to target selected customers, so be careful not to add duplicates.</li>
                <li class="text-xs">To personalise a message, use <code class="bg-red-100/60 px-1 py-px rounded"><b>//</b></code> to see a list of accessible details such as <strong>customer details, company details and invoice fields</strong></li>
              </ul>
            </div>
          </template>
          Check this out
        </tool-tip></h3>

        <form class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <div class="col-span-3 md:col-span-2 lg:col-span-1">
              <label for="plus" class="block text-sm font-medium text-gray-700 dark:text-gray-400">No. Of Days</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <span class="text-gray-500 sm:text-sm"> <i class="fa-solid fa-minus"></i> </span>
                </div>
                <input type="number" name="days" id="plus" class="focus:ring-green-500 focus:border-green-500 block w-full px-12 sm:text-sm border-gray-300 rounded text-center plain text-sm py-2 leading-none dark:border-gray-400 dark:bg-churpy-night-box" placeholder="0" aria-describedby="add" />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <span class="text-gray-500 sm:text-sm" id="add"> <i class="fa-solid fa-plus"></i> </span>
                </div>
              </div>
            </div>

            <div class="col-span-3 md:col-span-2 lg:col-span-1">
              <label for="timing" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Timing</label>
              <select id="timing" name="timing" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night-box">
                <option>---Choose timing---</option>
                <option>Before</option>
                <option>After</option>
              </select>
            </div>

            <div class="col-span-3 md:col-span-2 lg:col-span-1">
              <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Customer Targets</label>
              <search-select />
            </div>

          <div class="col-span-3 md:col-span-2 lg:col-span-1">
              <label for="location" class="block text-sm font-medium text-gray-700 dark:text-gray-400">Notification Type</label>
              <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:border-gray-400 dark:bg-churpy-night-box">
                <option>---Choose one---</option>
                <option>New invoice Notification</option>
                <option>Invoice Overdue Notification</option>
                <option>Invoice Due Notification</option>
                <option>Invoice Paid Notification</option>
              </select>
            </div>

          <div class="col-span-3">
             <label class="block text-sm font-medium text-gray-700 dark:text-gray-400">Message</label>
            <small class="text-sm">Draft your <b>notification message</b></small>
            <Editor class="mt-4" v-model="form.message" />
          </div>

        </form>
      </div>

      <div class="col-span-3 mt-5">
        <h3 class="font-bold">Template list</h3>
        <TableLite actioned :headers="[
              {key:'type', label:'Type'},
              {key:'timing', label:'Timing'},
              {key:'timing_period', label:'Timing Period'},
              {key:'customers', label:'Customers Targeted'},
              {key:'message', label:'Message'},
              {key: 'actions'}
            ]" :records="[
                {type:'Invoice Overdue Notification', timing: 'before', timing_period: '15 days', customers:'All customers', message:form.message}
            ]">
          <template #row_actions="{record}">
            <div class="flex space-x-2">
              <button class="w-6 h-6 hover:shadow-md hover:scale-105 transition-all rounded-full bg-green-200 flex justify-center items-center p-2"><i class="fa-solid fa-eye text-green-600 text-xs"></i></button>
              <button class="w-6 h-6 hover:shadow-md hover:scale-105 transition-all rounded-full bg-red-200 flex justify-center items-center p-2"><i class="fa-solid fa-trash-alt text-red-600 text-xs"></i></button>
            </div>
          </template>
        </TableLite>
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
import ToolTip from "@/components/parts/ToolTip.vue";
import TableLite from "@/components/widgets/Tables/TableLite.vue";

export default {
  name: "Payments",
  components: {
    TableLite,
    ToolTip,
    Editor,
    SearchSelect, CButton, Badge, Alert, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption},
  setup(){

    let form = ref({message: 'Engage your customer...'})
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