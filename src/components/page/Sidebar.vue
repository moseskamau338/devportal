<template>
<TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <i class="fa-solid fa-xmark text-xl text-white" aria-hidden="true"></i>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto" src="/images/logo-icon.png" alt="Churpy.co" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[$route.name === item.route_name ? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm shadow-churpy-green' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <i :class="item.icon" class="fa-solid mr-3 flex-shrink-0 text-indigo-100"></i>
                  {{ item.name }}
                </router-link>
              </nav>
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
              <template :key="index" v-for="(item, index) in navs">
                  <div 
                  class="text-slate-500 align-content-bottom text-center text-xs w-full h-6" v-if="item.header">
                      <span>{{item.header}}</span>
                  </div>

                  <div 
                    class="text-slate-500 group flex items-center px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1" v-if="item.disabled">
                      <span>
                         <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
                        {{ item.title }}
                      </span>
                      
                  </div>
                      
                    <router-link v-else :to="{name:item.route}" :class="[$route.name === item.route ? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4' : 'text-indigo-100 hover:bg-green-400/30 mb-2', 'group flex items-center px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1']">
                        <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
                        {{ item.title }}
                    </router-link>
              </template>
            </nav>
        </div>
      </div>
    </div>
</template>

<script>
import navs from '@/navigation'
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

export default {
    name:'Sidebar',
    components:{
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
    },
    data(){
        return {
            navs,
            sidebarOpen: false,
        }
    },
}
</script>

<style>

</style>