<template>
  <section class="p-4 bg-white dark:bg-churpy-night-box rounded shadow">
    <h2 class="text-lg font-bold">Manage Adjustments</h2>
    <p class="max-w-4xl">
      Administer all your adjustments from a central point. You can view both client-specific and general entries by making use of the filers below.
    </p>
      <button @click="testToast">Test toast</button>
    <div class="mt-4">
     <label for="client" class="block text-sm font-medium">Select Client</label>
      <select id="client" name="location" class="mt-1 block w-full pl-4 pr-12 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded w-min dark:bg-churpy-night-box dark:border-gray-500">
        <option selected="">---- Select Client ----</option>
        <option >Client D Ltd</option>
        <option>Another client</option>
      </select>
    </div>

  <!--adjustments table-->
    <AdjustmentCategories class="mt-2" />
  </section>
</template>

<script>
import {inject} from "vue";
import AdjustmentCategories from "@/components/page/Adjustments/AdjustmentCategories.vue";
export default {
  name: "Adjustments.vue",
  components: {AdjustmentCategories},
  setup(){
    const emitter = inject('emitter')

    const testToast = () =>{
      emitter.emit('toast', {title:'Testing toast', type:'success'})
    }

    return {testToast}
  }
}
</script>

<style scoped>

</style>