<template>
  <div class="mx-4 my-2 space-y-5 divide-y divide-gray-100">
    <div>
      <h2 class="font-bold">Update your payment details</h2>
      <p>These details will be used while you run transactions within Churpy.</p>

      <Alert variant="warning">Please note that in Sandbox, Churpy provides you with default test payment details</Alert>
    </div>

    <!--actions-->
    <div class="grid grid-cols-2 md:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Contact Email</h3>
        <small>Where should invioce notifications be sent?</small>
      </div>

      <div class="col-span-1 md:col-span-2">
        <div class="space-y-5">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input id="small" aria-describedby="small-description" name="card" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
            </div>
            <div class="ml-3 text-sm">
              <label for="small" class="font-medium text-gray-700">Send to my account email</label>
              <p id="small-description" class="text-gray-500">jeff@clientx.com</p>
            </div>
          </div>

          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input id="large" aria-describedby="large-description" name="plan" type="radio" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
            </div>
            <div class="ml-3 text-sm">
              <label for="large" class="font-medium text-gray-700">Send to an alternative email</label>
              <div id="large-description" class="text-gray-500">
                    <input type="email" name="email" id="email" class="shadow-sm py-2 px-3 leading-none focus:ring-green-500 focus:border-green-500 block w-full sm:text-xs border-gray-300 rounded-md" placeholder="you@example.com">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- card section-->
    <div class="grid grid-cols-2 md:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Card details</h3>
        <small>Select default card</small>
      </div>

      <div class="col-span-1 md:col-span-2">
        <RadioGroup v-model="selected">
          <RadioGroupLabel class="sr-only"> Server size </RadioGroupLabel>
          <div class="space-y-4">
            <RadioGroupOption :disabled="card.disabled" as="template" v-for="card in cards" :key="card.name" :value="card" v-slot="{ disabled,checked, active }">
              <div :class="[
                  disabled ? 'opacity-50 pointer-events-none' : '',
                  checked ? 'border-transparent bg-green-50/60 text-green-600' : 'border-gray-300 bg-white',
                  active ? 'border-green-500 ring-2 ring-green-500 text-green-600' : '',
                  'relative block border border-dashed rounded shadow-sm px-6 py-4 cursor-pointer grid grid-cols-1 md:grid-cols-4 focus:outline-none']">
                <div class="col-span-1 flex items-center">

                  <i class="fa-brands text-5xl" :class="card.icon"></i>
                  <div class="leading-none ml-4">
                    <RadioGroupLabel as="h2" class="font-bold">{{ card.name }}</RadioGroupLabel>
                    <small class="text-xs">Expiry: {{ card.expiry }}</small>
                  </div>
                </div>
                <RadioGroupDescription as="div" class="col-span-3 mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 border-l-2 pl-8"
                  :class="[active||checked ? 'border-green-600' : 'border-gray-200']"
                >
                  <div class="relative">
                    <div>
                        <h3>Card No.: {{card.card_number}}</h3>
                        <small>Card Holder: {{card.holder}}</small>
                    </div>

                    <i v-if="checked" class="fa-solid fa-circle-check absolute top-0 right-0 text-lg"></i>
                    <i v-if="!checked" :class="{'text-gray-300':!checked}" class="fa-solid fa-circle-dot absolute top-0 right-0 text-lg"></i>
                  </div>
                  <div class="flex justify-end">
                    <Badge :themes="[{name:'sandbox', status:'warning'}]" status="sandbox" class="tracking-widest text-xs shadow-none"/>
                  </div>
                </RadioGroupDescription>
                <div :class="[active ? 'border' : 'border-2', checked ? 'border-green-500' : 'border-transparent', 'absolute -inset-px rounded pointer-events-none']" aria-hidden="true" />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>

    </div>

    <!-- Mobile payment section-->
    <div class="grid grid-cols-2 md:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Mobile Money Transfer</h3>
        <small>Configure your mobile money accounts here</small>
      </div>

      <div class="col-span-1 md:col-span-2 flex">
        <div class="mr-5">
          <img width="100" src="/images/brands/mpesa.svg" alt="">
          <div class="relative flex items-start mt-2">
            <div class="flex items-center h-5">
              <input aria-describedby="small-description" name="card" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
            </div>
            <div class="ml-3 text-sm">
              <label for="small" class="font-medium text-gray-700">Send to my account email</label>
            </div>
          </div>

          <div class="relative flex items-start mt-2">
            <div class="flex items-center h-5">
              <input aria-describedby="small-description" disabled name="card" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
            </div>
            <div class="ml-3 text-sm flex flex-col">
              <label class="font-medium text-gray-400">Connect production account</label>
              <p class="text-orange-500 text-xs">You need a <b>LIVE</b> account for this option</p>
            </div>
          </div>

        </div>

        <div class="ml-5 px-12 border-l-2">
          <img width="100" src="/images/brands/pesalink.svg" alt="">

          <div class="relative flex items-start mt-2">
            <div class="flex items-center h-5">
              <input aria-describedby="small-description" disabled name="card" type="radio" checked class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300">
            </div>
            <div class="ml-3 text-sm flex flex-col">
              <label class="font-medium text-gray-400">Connect production account</label>
              <p class="text-orange-500 text-xs">You need a <b>LIVE</b> account for this option</p>
            </div>
          </div>

        </div>
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

export default {
  name: "Payments",
  components: {CButton, Badge, Alert, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption},
  setup(){
    const cards = [
        { name: 'Visa Card', expiry: '06/24', card_number: '4242 4242 4242 4242', holder: 'James Musyimi', icon: 'fa-cc-visa', disabled:true },
        { name: 'Master Card', expiry: '02/23', card_number: '5555 5555 5555 4444', holder: 'James Musyimi', icon: 'fa-cc-mastercard', disabled:true },
      ]

    const selected = ref(null)

    return {cards,selected}
  }
}
</script>

<style scoped>

</style>