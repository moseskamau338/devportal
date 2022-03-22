<template>
  <div>
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
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm shadow-churpy-green' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <i :class="item.icon" class="fa-solid mr-3 flex-shrink-0 text-indigo-100"></i>
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 bg-churpy-dark overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto md:hidden" src="/images/logo-icon.png" alt="Churpy.co" />
            <img class="h-12 w-auto ml-2 sm:hidden md:block" src="/images/logo-light.svg" alt="Churpy.co" />
        </div>
        <div class="mt-5 flex-1 flex flex-col">
            <nav class="flex-1 px-2 pb-4 space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm shadow-churpy-green' : 'text-indigo-100 hover:bg-green-400/30', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                <i :class="item.icon" class="fa-solid mr-3 flex-shrink-0 text-indigo-100"></i>
                {{ item.name }}
            </a>
            </nav>
        </div>
      </div>
    </div>

    <div class="md:pl-64 flex flex-col flex-1">
     <TopBar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <main>
        <div class="py-6">
          <Breadcrumb />

          <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
            <!-- Replace with your content -->
             <router-view />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import Breadcrumb from './components/page/Breadcrumb.vue'
import TopBar from './components/page/TopBar.vue'
// import SideBar from './components/page/SideBar.vue'
const navigation = [
  { name: 'Dashboard', href: '#', icon: 'fa-solid fa-objects-column', current: true },
  { name: 'Team', href: '#', icon: 'fa-solid fa-users', current: false },
  { name: 'Projects', href: '#', icon: 'fa-solid fa-folder-grid', current: false },
]

const sidebarOpen = ref(false)

</script>

