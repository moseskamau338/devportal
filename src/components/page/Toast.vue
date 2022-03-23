<template>
        <!-- toaster: error, success, info -->
    <teleport to="#notifications">
        <TransitionRoot draggable
        enter="transition transform duration-800 ease-out" 
        enter-from="translate-x-4 opacity-0" enter-to="translate-x-0 opacity-100"
        leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
        :show="notify" class="fixed bg-white ring-2 ring-indigo-300 flex z-50 top-0 right-5 shadow-xl my-5 h-auto p-1 rounded-md max-w-[400px] overflow-hidden">
          <div class="w-auto mx-auto mr-1">
            <TransitionChild as="template"
              enter="transition transform duration-400 ease-out" 
              enter-from="rotate-90 scale-50 opacity-0" enter-to="rotate-0 scale-100 opacity-100"
              leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
            >
              <div class="w-8 h-8 m-1 bg-indigo-100 rounded-full ring-2 ring-indigo-300 flex justify-center items-center">
                  <i class="fa-solid fa-circle-info text-brand-gray text-lg"></i>
              </div>
            </TransitionChild>
          </div>
          <TransitionChild as="template"
            enter="transition transform duration-600 ease-out" 
            enter-from="translate-x-8 opacity-0" enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
          >
            <div class="pl-2 pt-2 flex flex-col">
              <div class="flex justify-between">
                <h1 class="font-medium text-brand-gray">👋 Hello There, am creating an alert</h1>
                <span @click="notify = !notify" class="mr-2 bg-red-50 hover:bg-red-200 hover:cursor-pointer shadow-md h-6 w-6 rounded-full flex justify-center items-center">
                  <i class="fa-solid fa-circle-xmark text-red-500"></i>
                </span>
              </div>
              <p class="text-prose text-xs mt-2">
                We recently got into a hadle trying a few options but now we are working on a different solution
              </p>
            </div>
          </TransitionChild>
        </TransitionRoot>
    </teleport>
</template>

<script>
 import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ref } from 'vue'

export default{
  components: {
    TransitionRoot,
    TransitionChild
  },
    setup(){
      const notify = ref(true)

      return {
        notify
      }
    }
}
</script>
