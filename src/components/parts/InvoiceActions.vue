<template>
<div class="col-span-2 rounded-md bg-gray-100 border border-2 border-gray-400 dark:bg-churpy-dark dark:border-gray-500 border-dashed p-2">
    <header class="flex flex-col space-y-3 md:flex-row md:space-y-reverse justify-between items-center">
      <div class="space-x-2">
        <Badge status="USER" />
        <span class="text-churpy-green text-sm">Invoice Reconciled</span>
      </div>
    <dropdown name="Actions" :options="[
        {key:'raise_cn',name:'Raise Credit Note', },
        {key:'raise_dn',name:'Raise Debit Note'},
        {key:'pay_with_mpesa',name:'Pay Via MPESA'},
        {key:'generate_crn',name:'Generate CRN'},
    ]">
      <template #raise_cn>
        <button @click="showCreateCn = !showCreateCn" class="group flex w-full items-center rounded-sm px-2 py-2 text-sm hover:bg-gray-200 dark:bg-gray-700">
          Raise Credit Note
        </button>
      </template>
      <template #pay_with_mpesa>
        <button @click="showMpesa = !showMpesa" class="group flex w-full items-center rounded-sm px-2 py-2 text-sm hover:bg-gray-200 dark:bg-gray-700">
          Pay Via MPESA
        </button>
      </template>
      <template #generate_crn>
        <button @click="showCrn = !showCrn" class="group flex w-full items-center rounded-sm px-2 py-2 text-sm hover:bg-gray-200 dark:bg-gray-700">
          Generate CRN
        </button>
      </template>
    </dropdown>
    </header>
    <div id="inv_details" class="mt-6">
      <h2 class="underline">Counterparty address</h2>
      <div class="flex space-x-12 mt-2 px-4">
        <dl>
          <dt><small>Issued by:</small></dt>
          <dd>Company X Ltd</dd>
          <dt><small class="text-gray-500">Street XYZ,</small></dt>
          <dt><small class="text-gray-500">Nairobi, Kenya</small></dt>
        </dl>

        <dl>
          <dt><small>Issued to:</small></dt>
          <dd>Client Y Ventures</dd>
          <dt><small class="text-gray-500">Capital J Hill,</small></dt>
          <dt><small class="text-gray-500">Nairobi, Kenya</small></dt>
        </dl>
      </div>
    </div>

    <!--timeline-->
    <div class="mt-3">
      <h2 class="font-bold">History</h2>
      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-green-300 text-green-600 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box">
          <i class="fa-solid fa-check text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Invoice Fully Reconciled</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Initial batch pull of invoice.
        </p>
      </div>
      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-blue-300 text-blue-600 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box">
          <i class="fa-solid fa-piggy-bank text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">More payments added to invoice</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Bank CRN was used to pay for invoice
        </p>
      </div>
       <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-blue-300 text-blue-600 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box">
          <i class="fa-solid fa-piggy-bank text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Found matching bank records</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Invoice partially matched (#45678908989)
        </p>
      </div>

      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-churpy-green text-green-800 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box">
          <i class="fa-solid fa-file-invoice text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Invoice Uptake from SAP Business One</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 23rd March 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Invoice Uptake from SAP Business One
        </p>
      </div>
    </div>

    <div class="flex justify-end mt-8">
      <c-button variant="danger">Raise Dispute</c-button>
    </div>
  </div>

  <!--modals-->
  <ViewNote @close="showCreateCn = !showCreateCn" creating :open="showCreateCn" />
  <GenerateCrn @close="showCrn = false" :open="showCrn" :selection="selected" />
  <PayViaMpesa @close="showMpesa = false" :open="showMpesa" :selection="selected" />
</template>

<script>
import {ref} from 'vue'
import Badge from "@/components/parts/Badge.vue";
import CButton from "@/components/parts/CButton.vue";
import Dropdown from "@/components/parts/Dropdown.vue";
import ViewNote from "@/components/page/Adjustments/ViewNote.vue";
import GenerateCrn from "@/components/page/Payments/GenerateCrn.vue";
import PayViaMpesa from "@/components/page/Payments/PayViaMpesa.vue";

export default {
  name: "InvoiceActions",
  components: {ViewNote, CButton, Dropdown, Badge,GenerateCrn,PayViaMpesa},
  setup(){
    const showCreateCn = ref(false)
    const showCrn = ref(false)
    const showMpesa = ref(false)

    const selected = ref({selection: [{}]}) // switch to check for single and multiple

    return {showCreateCn, selected, showMpesa, showCrn}
  }
}
</script>

<style scoped>

</style>