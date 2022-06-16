<template>
<div>
  <h3 class="font-bold text-sm">Create mappings</h3>
  <div class="grid grid-cols-1 gap-y-3 md:grid-cols-12 mt-4 md:w-1/2">
    <div class="col-span-4">
      <label>GL Account</label>
        <select class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs rounded-md">
          <option v-for="(name, index) in ['GL-CU67236827', 'GL-EF7236839', 'GL-20398390']" :key="index">{{ name }}</option>
        </select>
    </div>
    <div class="col-span-2 flex px-4 items-end justify-center mb-1">
      <i class="fa-duotone fa-arrow-up-arrow-down md:fa-arrow-right-arrow-left text-gray-700 dark:text-gray-100 text-xl"></i>
    </div>
    <div class="col-span-4">
      <label>Bank Account</label>
        <select class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs rounded-md">
          <option v-for="(name, index) in ['NCBA*****23423', 'KCB*****23642', 'CITI*******34647']" :key="index">{{ name }}</option>
        </select>
    </div>
    <div class="col-span-2 flex px-4 justify-end md:items-end mb-1">
      <c-button variant="success">Save</c-button>
    </div>
  </div>
  <div>
    <TableLite actioned :headers="[
        {key:'gl_account', label:'GL Account'},
        {key:'bank_account', label:'Bank Account'},
        {key:'created_at', label:'Created At'},
    ]" :records="[
        {gl_account:'GL-CUS675382', bank_account:'NCBA******2346', created_at:'12/02/2022'},
        {gl_account:'GL-TYU902830', bank_account:'CITI******2346', created_at:'12/02/2022'},
        {gl_account:'GL-EDF293892', bank_account:'SIDIAN******2346', created_at:'12/02/2022'},
    ]">

      <template #row_actions="{record}">
        <button class="flex h-8 w-8 shadow-md hover:scale-105 transition-all rounded-full items-center justify-center bg-red-200 text-red-500">
          <i class="fa-solid fa-unlink"></i>
        </button>
      </template>

    </TableLite>
  </div>
</div>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
import TableLite from "@/components/widgets/Tables/TableLite.vue";
export default {
name: "MapGl",
  components: {TableLite, CButton}
}
</script>

<style scoped>

</style>