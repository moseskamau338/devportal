<template>
  <div class="bg-white dark:bg-churpy-night-box rounded shadow-md">
    <header class="flex justify-between pt-3 pb-1 px-3 w-full border-b">
      <h2 class="flex space-x-2 pr-5 items-center border-b-4 border-churpy-green w-fit -mb-1.5 text-churpy-green text-md">
        <i class="fa-solid fa-user"></i>
        <span>{{ name }}</span>
      </h2>

    <!--far right 😂-->
      <div class="flex space-x-2">
        <button class="flex space-x-2 pr-5 items-center w-fit text-churpy-green text-md">
          <i class="fa-solid fa-file-circle-check"></i>
          <span>Credit/Debit</span>
        </button>

        <button @click="viewDetails = !viewDetails" class="flex space-x-2 pr-5 items-center w-fit text-churpy-green text-md">
          <i class="fa-solid fa-eye"></i>
          <span>View details</span>
        </button>

      </div>
    </header>

    <div class="mx-3 mt-8 pb-5">

      <InvoiceTable>
        <template #headerx>
          <c-button variant="success">Generate CRN</c-button>
          <Menu as="div" class="relative inline-block text-left ml-3">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center items-center rounded-md bg-churpy-green px-4 py-1 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all"
                >
                  Pay With
                  <i class="fa-solid fa-chevron-down ml-2 -mr-1 hover:text-violet-100" aria-hidden="true"></i>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
                >
                  <div class="px-1 py-1">
                    <MenuItem disabled v-slot="{ active, disabled }">
                      <span
                        :class="[
                          active ? 'bg-green-300 text-green-600' : 'text-gray-900',
                          disabled ? 'opacity-50' :'opacity-100',
                          'group flex flex-col w-full justify-start rounded-md px-2 py-2 text-xs',
                        ]"
                      >
                        Payment Options
                        <alert variant="warning">Disabled in <b>Sandbox</b></alert>
                      </span>
                    </MenuItem>
                    <MenuItem disabled :key="index" v-for="(method, index) in [
                          {name:'MPESA', image:'/images/brands/mpesa.svg', customClass:'h-6'},
                          {name:'Card', image:'/images/brands/card.svg',customClass:'h-6'},
                          {name:'Pesalink', image:'/images/brands/pesalink.svg', customClass:'h-6'},
                        ]" v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-green-300 text-green-600' : 'text-gray-600',
                          'group flex w-full items-center rounded hover:bg-gray-100 px-2 py-2 text-sm',
                        ]"
                      >
                        <div class="w-12">
                          <img :class="method.customClass" :src="method.image" alt="">
                        </div>
                        <span class="text-md ml-2">{{ method.name }}</span>
                      </button>
                    </MenuItem>
                  </div>

                </MenuItems>
              </transition>
            </Menu>
        </template>
      </InvoiceTable>
    </div>

    <ClientDetails @close="viewDetails = false" :client="client" :open="viewDetails"/>

  </div>
</template>

<script>
import { inject, ref} from "vue";
import InvoiceTable from "@/components/widgets/InvoiceTable.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import CButton from "@/components/parts/CButton.vue";
import Alert from "@/components/parts/Alert.vue";
import ClientDetails from "@/components/page/ClientDetails.vue";

const loadName = async () => {
  return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve('Moses')
        }, 1000)
      })
}

export default {
  name: "MarketplaceClient",
  components: {ClientDetails, Alert, CButton, InvoiceTable, Menu, MenuButton, MenuItems, MenuItem},
  async setup(){
      const helpers = inject('helpers')
      let name = ref(await loadName())
      const viewDetails = ref(false)
    const client = ref({})

      return {helpers, name, viewDetails, client}
    }
}
</script>

<style scoped>

</style>