<template>
<Modal :show="open">
  <template #title>
    <h2 class="text-lg">Client X</h2>
  </template>
  <template #body>
    <div class="w-full border border-gray-300 rounded-md px-4 py-2">
      <h2 class="font-bold">Client Stats</h2>
      <div class="flex flex-row space-x-24 mt-5">
        <div class="flex">
            <span class="h-6 w-6 shadow-md rounded-full bg-green-100 flex items-center justify-center p-4">
              <i class="fa-solid fa-dollar text-green-600"></i>
            </span>
          <div class="ml-2">
              <h3 class="font-semibold leading-none">KES 34,500</h3>
              <small>Monthly sales</small>
          </div>
        </div>

        <div class="flex">
            <span class="h-6 w-6 shadow-md rounded-full bg-green-100 flex items-center justify-center p-4">
              <i class="fa-solid fa-arrow-trend-up text-green-600"></i>
            </span>
          <div class="ml-2">
              <h3 class="font-semibold leading-none">12 days</h3>
              <small>DSO</small>
          </div>
        </div>

        <div class="flex">
            <span class="h-6 w-6 shadow-md rounded-full bg-yellow-400 flex items-center justify-center p-4">
              <i class="fa-solid fa-receipt text-yellow-800"></i>
            </span>
          <div class="ml-2">
              <h3 class="font-semibold leading-none">2 Invoices (KES 45,000)</h3>
              <small>Monthly Outstanding</small>
          </div>
        </div>
      </div>
    </div>

    <TableLite class="mb-8 mt-12" actioned :headers="headers" :records="records">
      <template #header>
        <span class="text-xl">Client Contacts</span>
      </template>
      <template #actions>
        <div>
          <div class="mt-1 flex rounded-md shadow-sm">
            <div class="relative flex items-stretch flex-grow focus-within:z-10">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa-solid fa-search text-gray-400" aria-hidden="true"></i>
              </div>
              <input type="text" name="query" class="focus:ring-green-500 focus:border-green-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="John Doe" />
            </div>
            <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
              <i class="fa-solid fa-send text-gray-400 -rotate-45" aria-hidden="true"></i>
              <span>Invite more</span>
            </button>
          </div>
        </div>
      </template>

      <template #name="{record}">
        <div class="flex items-center">
          <span class="h-6 w-6 rounded-full text-sm flex items-center justify-center mr-2 p-4" :style="`background-color: ${helpers.getRandomColor(record.name).color}`">{{helpers.getRandomColor(record.name).character}}</span>
                      {{ record.name }}
        </div>
      </template>

      <template #phone="{record}">
        <span class="font-semibold">{{ record.phone }}</span>
      </template>

      <template #email="{record}">
        <a :href="`mailto:${record.email}`" target="_blank" class="text-churpy-green hover:underline">{{ record.email }}</a>
      </template>

      <template #status="{record}">
        <Badge :themes="[{name:'active', status:'success'}]" :status="record.status" />
      </template>

      <template #row_actions>
        <button class="bg-green-100 rounded-full h-6 w-6 p-2 flex items-center justify-center shadow hover:bg-green-200 hover:scale-110 focus:ring focus:ring-1 focus:ring-green-500/30 focus:ring-offset-1">
          <i class="fa-solid fa-eye text-xs text-green-600"></i>
        </button>
      </template>

    </TableLite>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import {inject, ref} from "vue";
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import Badge from "@/components/parts/Badge.vue";
export default {
  name: "ClientDetails",
  components: {Badge, TableLite, Modal},
  props:{
    open:{type:Boolean, default: false, required: true },
    clients: {type: Object, required: true}
  },
  setup(props, {emit}){
    const emitter = inject('emitter')
    const helpers = inject('helpers')
    const headers = ref([
        {key: 'name', label: 'Name'},
        {key: 'phone', label: 'Phone'},
        {key: 'email', label: 'Email'},
        {key: 'status', label: 'Status'},
        {key: 'actions', label: 'Actions'},
    ])

    const records = ref([
        {name:'James Kamau', phone:'(+254) 757-XXX-978', email:'james@companyx.com', status: 'active'},
        {name:'Eric Muthanji', phone:'(+254) 745-XXX-123', email:'eric@companyx.com', status: 'active'},
        {name:'Grace Muthoni', phone:'(+254) 723-XXX-900', email:'grace@companyx.com', status: 'pending'},
    ])

    emitter.on('close_modal', ()=>{
      emit('close')
    })

    return {headers, records, helpers}
  }
}
</script>

<style scoped>

</style>