<template>
<section class="bg-white dark:bg-churpy-night-box grid grid-cols-1 lg:grid-cols-6 p-4 rounded">
    <!--main content-->
    <div class="col-span-4 lg:mx-5">

      <div class="flex flex-col lg:flex-row space-y-5 justify-between mt-2">
        <div class="flex items-center justify-between lg:block">
          <div class="flex items-center">
              <span class="h-6 w-6 rounded-full text-sm flex items-center justify-center mr-2 p-4 shadow" :style="`background-color: ${helpers.getRandomColor(client).color}`">{{helpers.getRandomColor(client).character}}</span>
                <span class="text-sm md:text-xl">{{ client }}</span>
          </div>
          <p class="mt-2">Invoice #9000832</p>
        </div>

        <div class="block">
          <h4 class="uppercase text-xs tracking-widest">Total Invoice Amount</h4>
          <h3 class="font-semibold text-green-600">KES 87,450.00</h3>
        </div>
      </div>

      <div class="flex space-x-20 mt-5 md:mt-2">
          <dl>
            <dt><small>Issued by:</small></dt>
            <dd>08th April 2022</dd>
          </dl>

          <dl>
            <dt><small>Due Date:</small></dt>
            <dd>11th April 2022 <span class="text-red-500 invisible md:visible">&bull; Due today</span></dd>
          </dl>
        </div>

    <!--  line items-->
      <line-items :items="projects" />
    <!--print-->
      <div class="mt-5">
        <c-button variant="success" class="bg-green-300">
          <i class="fa-solid fa-print mr-2"></i>
          Print
        </c-button>
      </div>
    </div>

    <!--sidebar-->
    <invoice-actions class="hidden lg:block" />
</section>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
import InvoiceActions from "@/components/parts/InvoiceActions.vue";
import LineItems from "@/components/parts/LineItems.vue";

import {inject, ref} from "vue";
const loadName = async () =>{
  return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve('Client X Ventures')
      }, 2000)
  })
}
export default {
  name: "InvoiceDetails",
  components:{LineItems, InvoiceActions, CButton},
  async setup(){
    const helpers = inject('helpers')
    const client = ref(await loadName())
    const projects = [
      { id: 1, name: 'New Advertising Campaign', hours: '12.0', rate: '$75.00', price: '$900.00' },
      { id: 2, name: 'Something else', hours: '12.0', rate: '$75.00', price: '$900.00' },
      // More projects...
    ]
    return {helpers, projects, client}
  }
}
</script>

<style scoped>

</style>