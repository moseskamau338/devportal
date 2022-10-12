<template>
<div class="">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-md font-semibold">Integrations Overview</h1>
      <p class="mt-2 text-sm">This list shows all the <b>banks</b> integrated in <b>Churpy</b> and will be updated from time to time.</p>
    </div>
  </div>
  <ServiceTable />
</div>

</template>

<script>
import Badge from "@/components/parts/Badge.vue";
import ServiceTable from "@/components/page/ServiceTable.vue";
export default {
  name: "Services",
  components: {ServiceTable, Badge},
  setup(){

  }
}
</script>

<style scoped>

</style>