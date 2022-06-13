<template>
<Modal :show="open" source="standard_adjustment" size="small">
  <template #title>
    Create Adjustment
  </template>

  <template #body>
    <div>
      <table class="w-1/2 table-auto border-separate border-spacing-2">

            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-user mr-1"></i>
                  Raised by
                </span>
              </th>
              <td class="text-xs">
                Moses Kamau
              </td>
            </tr>

            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-file-invoice mr-1"></i>
                  Invoice
                </span>
              </th>
              <td class="text-xs">
                <span class="font-bold text-green-600 hover:underline cursor-pointer">994537467 <sup>
                  <i class="fa-solid fa-square-arrow-up-right text-[8px]"></i>
                </sup></span>
              </td>
            </tr>
            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  Date
                </span>
              </th>
              <td class="text-xs">
                <span v-if="!creating">07/12/2021</span>
                <span v-else>{{dayjs().format('DD/MM/YYYY')}}</span>
              </td>
            </tr>
          </table>
    </div>
    <div class="py-2">
      <h4 class="font-bold text-sm">Adjustment details</h4>
    </div>
    <form @submit.prevent="saveAdjustment" class="pb-12">
      <div class="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
        <label for="type" class="block text-xs font-medium">Transaction type</label>
        <select id="type" name="type" class="mt-1 dark:bg-churpy-night-box block w-full pl-3 pr-10 py-2 text-base border-0 focus:outline-none focus:ring-0 sm:text-sm rounded-md">
          <option>Bank Charge</option>
          <option selected="">VAT</option>
          <option>Withholding-Tax</option>
          <option>Withholding-VAT</option>
        </select>
      </div>

      <div class="border border-gray-300 rounded-md px-3 py-2 mt-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
        <label for="description" class="block text-xs font-medium">Describe the transaction</label>
        <textarea rows="2" name="comment" id="description" class="focus:ring-0 focus:border-none block w-full dark:bg-churpy-night-box sm:text-sm border-none" placeholder="Describe this entry for clarity.."/>
      </div>
      <div class="border border-gray-300 rounded-md px-3 py-2 mt-2 focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
        <label for="price" class="block text-xs font-medium">Enter Amount</label>
        <div class="mt-1 relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm"> Ksh </span>
          </div>
          <input type="number" name="price" id="price" class="focus:ring-0 dark:bg-churpy-night-box block w-full pl-12 pr-2 sm:text-sm border-0" placeholder="0.00" aria-describedby="price-currency" />
        </div>
      </div>


    </form>
  </template>

    <template #footer>
    <div class="flex space-x-5">
      <c-button variant="danger">Cancel</c-button>
      <c-button variant="success">
        Save
      </c-button>
    </div>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import CButton from "@/components/parts/CButton.vue";
import {inject} from "vue";
export default {
  name: "CreateStandardAdjustment",
  components:{
    Modal, CButton
  },
  props:{
    open:{required: true, type: Boolean},
  },
  setup(props, {emit}){
    const emitter = inject('emitter')

    const saveAdjustment = () => {
      console.log('saving logic')
    }

    emitter.on('close_modal', (modal_source)=>{
      if (modal_source === 'standard_adjustment'){
          emit('close')
      }
    })

    return {saveAdjustment}
  }
}
</script>

<style scoped>

</style>