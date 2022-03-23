<template>
<teleport to="#banners">
    <TransitionRoot
        as="template"
        :show="message"
        enter="transition-height transition-opacity duration-5000 ease-in-out"
        enter-from="h-0 opacity-0"
        enter-to="h-100"
        leave="transition-height transition-opacity duration-700 ease-in-out"
        leave-from="opacity-100 h-100"
        leave-to="h-0 opacity-0"
    >
        <div class="bg-churpy-dark z-20" v-show="message">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg bg-gray-700">
                <i class="fa-duotone fa-bullhorn text-lg text-white" aria-hidden="true" />
                </span>
                <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden"> We announced a new product! </span>
                <span class="hidden md:inline"> Big news! We're excited to announce a brand new product. </span>
                </p>
            </div>
            <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a href="#" class="flex items-center transition-colors duration-300 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700"> Learn more </a>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button @click="message = !message" type="button" class="mr-2 transition-colors duration-300 flex p-auto hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 h-8 w-8 pl-[6px] pt-[2px] rounded-full">
                <span class="sr-only">Dismiss</span>
                <i class="fa-duotone fa-circle-xmark text-white text-xl" aria-hidden="true"></i>
                </button>
            </div>
            </div>
        </div>
        </div>
    </TransitionRoot>
</teleport>
</template>
<script>
 import { TransitionRoot } from '@headlessui/vue'
export default{
    components:{TransitionRoot},
  data(){
    return {
      message: false
    }
  }

}
</script>
