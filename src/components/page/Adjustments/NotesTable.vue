<template>
  <TableLite actioned :headers="headers" :records="records">

    <template #invoice_id="{record}">
      <span class="font-bold text-green-600">{{ record.invoice_id }}</span>
    </template>

    <template #amount="{record}">
      <span class="font-bold">KES {{ currency(record.amount) }}</span>
    </template>

    <template #reconciled_amount="{record}">
      <span class="font-bold text-green-600">KES {{ currency(record.reconciled_amount) }}</span>
    </template>

    <template #recon_status="{record}">
      <Badge :status="record.recon_status" />
    </template>

    <template #approved="{record}">
      <Badge :themes="[{name:'approved', status:'success'}]" :status="record.approved? 'approved' : 'pending'" />
    </template>


    <template #row_actions="{record}">
      <div class="relative">
        <Popover>
          <PopoverButton>
            <c-button variant="dark">Options <i class="fa-solid fa-chevron-down ml-1"></i></c-button>
          </PopoverButton>

          <!-- Use the built-in <transition> component to add transitions. -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel class="absolute z-10 mt-1 w-fit max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-8">
              <div class="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="relative bg-white dark:bg-churpy-night">
                  <button
                      @click="option.action()"
                      :key="index"
                      v-for="(option, index) in [
                        {name:'Approve', icon:'fa-circle-check text-green-600', action: toggleNote},
                        {name:'Decline', icon:'fa-ban text-red-600', action: toggleNote},
                        {name:'View', icon:'fa-eye', action: toggleNote},
                        {name:'Edit', icon:'fa-edit', action: ()=>{showCreate = !showCreate}},
                      ]"
                    class="py-2 pl-2 pr-8 text-gray-900 dark:text-gray-400 flex w-full items-center rounded-sm px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-200"
                  >
                    <span class="flex items-center">
                      <i v-if="option.icon" class="fa-solid mr-2" :class="option.icon"></i>
                      {{option.name}}
                    </span>
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

      </div>
    </template>
  </TableLite>

  <ViewNote @close="toggleNote" :open="showNote" />
  <!--edit-->
  <ViewNote updating @close="showCreate = !showCreate" :open="showCreate" />

</template>

<script>
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import Dropdown from "@/components/parts/Dropdown.vue";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { ref,inject } from "vue";
import Badge from "@/components/parts/Badge.vue";
import ViewNote from "@/components/page/Adjustments/ViewNote.vue";
import CButton from "@/components/parts/CButton.vue";
export default {
  name: "NotesTable",
  components: {
    CButton,
    ViewNote, Badge,
    Dropdown, TableLite,
    Popover, PopoverButton,
    PopoverPanel
  },
  setup(){
    const helpers = inject('helpers')

    let showNote = ref(false)
    let showCreate = ref(false)

    let headers = [
      {key:'invoice_id', label:'Invoice ID'},
      {key:'supplier', label:'Supplier'},
      {key:'date', label:'Date'},
      {key:'amount', label:'Amount'},
      {key:'reconciled_amount', label:'Reconciled Amount'},
      {key:'description', label:'Description'},
      {key:'recon_status', label:'Recon. Status'},
      {key:'approved', label:'Approved'},
    ]

    let records = [
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
    ]

    let toggleNote = () =>{
      showNote.value = !showNote.value
    }


    return {
      headers, records,
      currency: helpers.currency,
      showNote, toggleNote,
      showCreate
    }
  }
}
</script>

<style scoped>

</style>