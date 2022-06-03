<template>
  <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4">
    <div class="bg-gradient-to-tr from-green-500 via-green-700 to-churpy-night/90 text-white md:col-span-3 lg:col-span-5 rounded shadow-md px-3 py-2">
      <div class="flex flex-row py-2 items-center">
        <span class="h-1 w-[30px] bg-white rounded-full"></span>
        <span class="h-1 w-[20px] bg-white rounded-full ml-1"></span>
        <h2 class="font-bold ml-2">Reconciliation</h2>
      </div>

      <div>

        <div class="flex">
          <div class="h-18 w-18 p-2 rounded-full flex items-center justify-center bg-white/60 ring-2 ring-offset-1 ring-green-300 flex-shrink-0">
            <img src="/images/pages/engine.png" class="w-28" alt="">
          </div>
          <p class="text-sm px-4">
            <b>Churpy’s Reconciliation Module</b> is one of a kind. It provides a robust
            <b>A.I driven</b> technology base to consume a vast variety of datasets and
            provide a clean result-set and <b>soothed conscience :)</b>
          </p>
        </div>
        <div class="mt-2 flex justify-end items-baseline space-x-2">
          <span class="underline font-semibold text-xs">View the documentation</span>
          <c-button variant="dark" class="items-center group">Reconciliation <span class="ml-2 group-hover:translate-x-0.5 transition-all">&rightarrow;</span></c-button>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-churpy-night-box md:col-span-3 lg:col-span-3 rounded px-3 py-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias deserunt dolores enim eos facere illo, iste minima minus officia omnis quasi quo, ratione rem, sequi vero. Aliquam, explicabo.
    </div>

  </div>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
export default {
  components: {CButton}
}
</script>