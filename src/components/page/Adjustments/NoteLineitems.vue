<template>
<div class="-mx-4 mt-8 flex flex-col flex-shrink-0 sm:-mx-6 md:mx-0 overflow-x-auto max-h-64 overflow-y-auto">
      <table class="min-w-full table-fixed divide-y divide-gray-300 whitespace-nowrap">
        <thead class="sticky z-10 top-0 bg-gray-200 dark:bg-gray-700">
          <tr class="pl-3">
            <th scope="col" class="py-1 pl-4 pr-3 text-left text-xs font-semibold sm:pl-6 md:pl-4">Description</th>
            <th scope="col" class="hidden py-1 px-3 text-left text-xs font-semibold sm:table-cell">Order Quantity</th>
            <th scope="col" class="py-1 pl-3 pr-4 text-left text-xs font-semibold sm:table-cell">Received Quantity</th>
            <th scope="col" class="py-1 pl-3 pr-4 text-left text-xs font-semibold sm:table-cell">Difference</th>
            <th scope="col" class="hidden py-1 px-3 text-left text-xs font-semibold sm:table-cell">Unit Price</th>
            <th scope="col" class="py-1 pl-3 pr-4 text-right text-xs font-semibold sm:pr-6 md:pr-4">Total</th>
          </tr>
        </thead>
        <tbody class="">
            <tr>
              <td class="py-2 pl-4 pr-3 text-xs sm:pl-6 md:pl-0">
                <div class="font-medium">ATTA MARK 2KG</div>
              </td>
              <td class="hidden py-4 px-3 text-right text-xs text-gray-500 dark:text-gray-400 sm:table-cell">100</td>
              <td class="py-4 pl-3 pr-4 text-right text-xs text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">
                <input v-if="editable" type="number" name="received" class="focus:ring-green-500 leading-none py-1.5 focus:border-green-500 block w-3/4 text-xs border-gray-300 rounded placeholder-gray-400 dark:bg-churpy-night-box dark:border-gray-500" placeholder="What quantity was received?" />
                <span v-else>60</span>
              </td>
              <td class="py-4 pl-3 pr-4 text-right text-xs text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">40</td>
              <td class="hidden py-4 px-3 text-right text-xs text-gray-500 dark:text-gray-400 sm:table-cell">1,434.00</td>
              <td class="py-4 pl-3 pr-4 text-right text-xs text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-2">86,744.00</td>
            </tr>

        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="5" class="hidden pl-6 pr-3 pt-6 text-right text-xs font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Subtotal</th>
            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-xs font-normal text-gray-500 dark:text-gray-300 sm:hidden">Subtotal</th>
            <td class="pl-3 pr-4 pt-6 text-right text-xs text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-2">$3,900.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="5" class="hidden pl-6 pr-3 pt-1 text-right text-xs font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Tax</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-xs font-normal text-gray-500 dark:text-gray-300 sm:hidden">Tax</th>
            <td class="pl-3 pr-4 pt-4 text-right text-xs text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-2">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="5" class="hidden pl-6 pr-3 pt-1 text-right text-sm font-bold text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Total</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-bold text-gray-500 dark:text-gray-300 sm:hidden">Total</th>
            <td class="pl-3 pr-4 pt-1 text-right text-sm font-bold text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-2">$585.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
</template>

<script>
export default {
  name: "NoteLineitems",
  props:{
    editable:{type:Boolean, default:false},
    items:{type:Array, default:[]},
    records:{type:Array, default:[
      {key: 'description',label:'Description'},
      {key: 'order_qty',label:'Order Quantity'},
      {key: 'received_qty',label:'Received Quantity'},
      {key: 'difference',label:'Difference'},
      {key: 'unit_price',label:'Unit Price'},
      {key: 'total',label:'Total'},
    ]}
  },

}
</script>

<style scoped>

</style>