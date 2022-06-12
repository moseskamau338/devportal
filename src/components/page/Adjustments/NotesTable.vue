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
      <div class="-z-10">
          <Dropdown class="bg-gray-700 rounded hover:bg-opacity-80 focus:ring-offset-1 focus:ring focus:ring-gray-600 rounded-sm" name="Manage" :options="[
              {name:'Approve', icon:'fa-circle-check text-green-600'},
              {name:'Decline', icon:'fa-ban text-red-600'},
              {name:'View', icon:'fa-eye'},
              {name:'Edit', icon:'fa-edit'},
          ]"></Dropdown>
      </div>
    </template>
  </TableLite>

  <ViewNote />

</template>

<script>
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import Dropdown from "@/components/parts/Dropdown.vue";
import {inject} from "vue";
import Badge from "@/components/parts/Badge.vue";
import ViewNote from "@/components/page/Adjustments/ViewNote.vue";
export default {
  name: "NotesTable",
  components: {ViewNote, Badge, Dropdown, TableLite},
  setup(){
    const helpers = inject('helpers')
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
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
        {invoice_id:'4567283923', supplier:'Supplier 1', date:'12/12/20', amount:234234223, reconciled_amount:236453, description:'', recon_status:'user-p', approved: true},
    ]


    return {headers, records, currency: helpers.currency}
  }
}
</script>

<style scoped>

</style>