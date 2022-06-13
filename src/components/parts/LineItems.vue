<template>
<div class="mt-5">
    <slot name="header">
      <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">Invoice</h1>
        <p class="mt-2 text-sm">Some description here.</p>
      </div>
    </div>
    </slot>
    <div class="-mx-4 mt-8 flex flex-col flex-shrink-0 sm:-mx-6 md:mx-0 overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0">Description</th>
            <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold sm:table-cell">Hours</th>
            <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold sm:table-cell">Rate</th>
            <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold sm:pr-6 md:pr-0">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" class="border-b border-gray-200">
            <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
              <div class="font-medium">{{ item.name }}</div>
              <div class="mt-0.5 text-gray-500 sm:hidden">{{ item.hours }} hours at {{ item.rate }}</div>
            </td>
            <td class="hidden py-4 px-3 text-right text-sm text-gray-500 dark:text-gray-400 sm:table-cell">{{ item.hours }}</td>
            <td class="hidden py-4 px-3 text-right text-sm text-gray-500 dark:text-gray-400 sm:table-cell">{{ item.rate }}</td>
            <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">{{ item.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Subtotal</th>
            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">Subtotal</th>
            <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">$3,900.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Payments</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">Payments</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Credit Notes</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">Credit Notes</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Debit Notes</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">Debit Notes</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">Tax</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">Tax</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 dark:text-gray-300 sm:table-cell md:pl-0">Total</th>
            <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 sm:hidden">Total</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 dark:text-gray-400 sm:pr-6 md:pr-0">$4,485.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "LineItems",
  props:{
    items:{required: true, type: Array}
  },
}
</script>

<style scoped>

</style>