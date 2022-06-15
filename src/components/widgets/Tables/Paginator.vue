<template>
<!--pagination-->
    <div class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <!--mobile view-->
      <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-medium">{{ paginateData.from }}</span>
            to
            <span class="font-medium">{{ paginateData.to }}</span>
            of
            <span class="font-medium">{{ paginateData.of }}</span>
            results
          </p>
        </div>
        <div class="flex items-center">
          <select v-model="perPage" class="h-fit py-0.5 top-0 mr-3 border-gray-400 rounded text-xs text-center align-middle focus:ring-churpy-green focus-visible:ring-churpy-green dark:bg-churpy-night-box dark:border-gray-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
            <option>100</option>
          </select>

          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center px-2 py-0.5 rounded-l-md border border-gray-300 bg-white dark:bg-churpy-night-box dark:border-gray-500 text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <a href="#" aria-current="page" class="z-10 bg-churpy-green/30 border-churpy-green text-churpy-dark relative inline-flex items-center px-4 py-1 border text-sm font-medium dark:bg-churpy-night-box dark:text-churpy-green dark:border-gray-500"> 1 </a>
            <a href="#" class="bg-white border-gray-300 hover:bg-churpy-green/30 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium dark:bg-churpy-night-box dark:border-gray-500"> 2 </a>
            <a href="#" class="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-churpy-green/30 hover:bg-gray-50 dark:bg-churpy-night-box dark:border-gray-500">
              <span class="sr-only">Next</span>
              <!-- Heroicon name: solid/chevron-right -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>

</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: "Paginator",
  props:{
    records:{type: Number, default:0}
  },
  setup(props){
    //variables
    let perPage = ref(20), currentPage = ref(1), perPageOptions = ref([20,40,50,100]);

    //computed
    const paginateData = computed(() => {
         return {
            from: parseInt(perPage.value * (currentPage.value - 1) + (perPage.value ? 1 : 0)),
            to: parseInt(perPage.value * (currentPage.value - 1) + perPage.value),
            of: props.records, //check pagination structure
          }
        })

        return {
          perPage,
          currentPage,
          perPageOptions,
          paginateData,
        }
    }
}
</script>

<style scoped>

</style>