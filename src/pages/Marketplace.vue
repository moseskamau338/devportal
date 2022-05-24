<template>
    <div class="bg-white dark:bg-churpy-night-box rounded shadow-md">
      <header class="pt-3 pb-1 px-3 w-full border-b">
        <h2 class="flex space-x-2 pr-5 items-center border-b-4 border-churpy-green w-fit -mb-1.5 text-churpy-green text-md">
          <i class="fa-solid fa-users"></i>
          <span>Clients</span>
        </h2>
      </header>

      <div class="mx-3 pb-5">
        <p class="mt-2">
        Customer records pulled from your accounting platform
      </p>

        <TableLite actioned :headers="[
          {key:'id', label:'Client ID'},
          {key:'name', label:'Name'},
          {key:'date', label:'Since'},
          {key:'country', label:'Country'},
          {key:'status', label:'Status'},
          {key:'action', label:'Action'},
        ]" :records="[
            {id: '40000022', name:'Client X Ltd', date:'04/22/2016', country: 'Kenya', status:'active'}
        ]">
          <template #actions>
            <div class="mt-1 relative rounded-md">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa-solid fa-search text-lg text-gray-400"></i>
              </div>
              <input type="text" name="query" id="text" class="focus:ring-green-500 focus:border-green-500 block w-[90%] focus:w-full pl-10 sm:text-sm border-gray-300 rounded-md transition-all dark:bg-churpy-night dark:border-gray-500" placeholder="Search clients" />
            </div>
          </template>

          <template #id="{record}">
            <span class="font-bold">{{record.id}}</span>
          </template>
          <template #name="{record}">
            <div class="flex items-center font-bold">
              <span class="h-4 w-4 shadow rounded-full text-xs flex items-center justify-center mr-2 p-4" :style="`background-color: ${helpers.getRandomColor(record.name).color}`">{{helpers.getRandomColor(record.name).character}}</span>
               {{ record.name }}
            </div>
          </template>

          <template #status="data">
            <Badge :themes="[{name:'active', status:'success'},]" :status="data.record.status" />
          </template>

          <template #row_actions>
            <CButton variant="success">View</CButton>
          </template>
        </TableLite>
      </div>
    </div>
</template>

<script>
import TableLite from "@/components/widgets/Tables/TableLite.vue";
import CButton from "@/components/parts/CButton.vue";
import Badge from "@/components/parts/Badge.vue";
import {inject} from "vue";
export default {
  name:'MarketPlace',
  components: {Badge, CButton, TableLite},
  setup(){
    const helpers = inject('helpers')

    return {helpers}
  }
}
</script>
