<template>
<div class="-mx-4 mt-5 ring-1 ring-gray-300 dark:ring-gray-600 sm:-mx-6 md:mx-0 md:rounded-md">
    <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
      <thead>
        <tr>
          <th colspan="1" class="border-r dark:border-r-gray-600"></th>
          <th colspan="4" class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell border-b dark:border-b-gray-600">Services</th>
        </tr>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 border-r dark:border-r-gray-600">Bank</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">Notifications</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">Full Statement</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">Mini Statement</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold lg:table-cell">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index+service.bank" v-for="(service, index) in services">
          <td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm border-r dark:border-r-gray-600">
            <div class="font-medium">{{ service.bank }}</div>
            <div class="mt-1 flex flex-row flex-wrap w-full text-gray-500 sm:block lg:hidden">
              <Badge :key="api.key" v-for="api in [
                  {key:'notifications', label: 'Notifications'},
                  {key:'full_statements', label: 'Full Statements'},
                  {key:'mini_statements', label: 'Mini Statements'},
                  {key:'balance', label: 'Balance'},
              ]" :status="service[api.key] ? 'success' : 'danger'" class="w-fit mx-2 my-1">
                {{api.label}}
              </Badge>
            </div>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
            <span
                :class="[
                    service.notifications ? 'bg-green-500/20 text-churpy-green' : 'bg-red-500/20 text-red-500'
                ]"
                class="h-8 w-8 flex justify-center items-center rounded-full">
              <i :class="[service.notifications ? 'fa-check' : 'fa-close']" class="fa-solid"></i>
            </span>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
            <span
                :class="[
                    service.full_statements ? 'bg-green-500/20 text-churpy-green' : 'bg-red-500/20 text-red-500'
                ]"
                class="h-8 w-8 flex justify-center items-center rounded-full">
              <i :class="[service.full_statements ? 'fa-check' : 'fa-close']" class="fa-solid"></i>
            </span>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
            <span
                :class="[
                    service.mini_statements ? 'bg-green-500/20 text-churpy-green' : 'bg-red-500/20 text-red-500'
                ]"
                class="h-8 w-8 flex justify-center items-center rounded-full">
              <i :class="[service.mini_statements ? 'fa-check' : 'fa-close']" class="fa-solid"></i>
            </span>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
            <span
                :class="[
                    service.balance ? 'bg-green-500/20 text-churpy-green' : 'bg-red-500/20 text-red-500'
                ]"
                class="h-8 w-8 flex justify-center items-center rounded-full">
              <i :class="[service.balance ? 'fa-check' : 'fa-close']" class="fa-solid"></i>
            </span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>


  <h2 class="mt-8 mb-4 font-semibold">Bank statement upload support</h2>
  <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-10">
      <div :key="index" v-for="(bank, index) in statement_support" class="col-span-6 md:col-span-2 lg:col-span-3 flex items-center space-x-2 bg-white dark:bg-churpy-night-box shadow rounded py-4 px-3">
        <span class="h-8 w-8 flex justify-center dark:bg-gray-700/30 bg-green-100 items-center rounded-full ring dark:ring-churpy-green ring-churpy-night-box/70">
          CB
        </span>
        <span class="font-bold">{{ bank }}</span>
      </div>

  </div>
</template>

<script>
export default {
  name: "ServiceTable",
  setup(){
    let services = [
      {bank:"CITI Bank",
        //services
        notifications: true, full_statements: true, mini_statements: false, balance: true,},
      {bank:"Co-operative Bank",
        //services
        notifications: true, full_statements: true, mini_statements: true, balance: true,},

      {bank:"NCBA Bank",
        //services
        notifications: false, full_statements: false, mini_statements: false, balance: true,},
      {bank:"Equity Bank",
        //services
        notifications: true, full_statements: true, mini_statements: true, balance: true,}

    ]
    let statement_support = [
      'Chase Bank', 'DCU Bank'
    ]
    return {services, statement_support}
  }
}
</script>

<style scoped>

</style>