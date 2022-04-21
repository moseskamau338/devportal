<template>
<TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-churpy-dark dark:bg-churpy-night-box">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <i class="fa-solid fa-xmark text-xl text-white" aria-hidden="true"></i>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <!-- <img class="h-8 w-auto" src="/images/logo-icon.png" alt="Churpy.co" /> -->
              <img class="h-8 w-auto ml-2 sm:hidden md:block" src="/images/logo-light.svg" alt="Churpy.co" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <NavList :navs="navs"/>
              </nav>

              <div class="text-white absolute bottom-0 p-2 border-t-2 border-gray-500 flex w-full justify-between">
                <a class="flex items-center hover:text-green-600 cursor-pointer transition-all">
                  <i class="fa-solid fa-gear mr-2"></i>
                  <h5>Settings</h5>
                </a>
                <span class="flex items-center">
                  <Toggler />
                </span>
              </div>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

   <div class="hidden md:flex md:w-42 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 bg-churpy-dark dark:bg-churpy-night-box overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto md:hidden" src="/images/logo-icon.png" alt="Churpy.co" />
            <img class="h-8 w-auto ml-2 sm:hidden md:block" src="/images/logo-light.svg" alt="Churpy.co" />
        </div>
        <div class="mt-5 flex-1 flex flex-col">
            <nav class="flex-1 px-2 pb-4 space-y-1">
              <NavList :navs="navs" />
            </nav>
        </div>
      </div>

    <!-- sandbox indicator-->
     <div class="bg-yellow-600 flex justify-between h-fit w-full px-2 py-0.5 space-x-2 items-center relative">
      <span class="text-white font-bold text-xs">Sandbox Account</span>
       <button type="button" class="inline-flex mt-4 items-center px-2.5 py-1.5 text-xs font-medium rounded bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">
         <i class="fa-solid fa-power-off mr-2"></i>
         Go LIVE</button>
     </div>
    </div>
</template>


<script>
export default{
  name:'Sidebar'
}
</script>

<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ref,onMounted } from "vue";
import navs from '@/navigation';

import { inject } from 'vue';
import NavList from '../parts/navList.vue';
import Toggler from '../parts/Toggler.vue';
const emitter = inject('emitter')

  const sidebarOpen = ref(false);
    
  onMounted(()=>{
    emitter.on('open_side_bar', () => {
      sidebarOpen.value = true
    })
})
</script>

<style>

</style>