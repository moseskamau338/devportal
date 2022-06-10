<template>
  <div
    class="sticky top-0 z-10 flex-shrink-0 flex h-8 md:h-12 bg-white/75 backdrop-blur shadow-sm rounded-md mx-auto mt-4 dark:bg-churpy-night-box/75 dark:text-white w-[98%]"
  >
    <button
      type="button"
      class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-churpy-green md:hidden"
      @click="openSidebar"
    >
      <span class="sr-only">Open sidebar</span>
      <i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex max-w-fit">
        <div class="my-auto">
           <Toggler class="hidden md:inline-flex" />
        </div>
      </div>

      <!-- branding -->
      <div class="flex items-center">
        <h1 class="text-brand-gray dark:text-gray-400 text-xs md:text-lg">
          <span class="font-brand ">Churpy</span> Reconciliation Engine
        </h1>
      </div>

      <div class="ml-4 flex items-center md:ml-6">

        <button
          type="button"
          @click="$emit('toggle-sidebar')"
          class="bg-gray-400/40 rounded-full text-churpy-dark dark:text-gray-400 h-6 w-6 md:h-7 md:w-7 flex justify-center items-center hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green"
        >
          <span class="sr-only">View notifications</span>
          <i class="fa-solid fa-bell text-xs md:text-lg" aria-hidden="true"></i>
        </button>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="md:h-8 md:w-8 h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem
                v-for="item in userNavigation"
                :key="item.name"
                v-slot="{ active }"
              >
                <router-link
                  :to="item.route"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >{{ item.name }}</router-link
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button @click="keycloak.logout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign out</button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { inject } from 'vue';
import Toggler from '../parts/Toggler.vue';
const emitter = inject('emitter')
const keycloak = inject('keycloak')


const userNavigation = [
  { name: "Settings", route: "settings" },
];

function openSidebar(){
  emitter.emit('open_side_bar')
}

</script>
