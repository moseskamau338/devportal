<template>
  <div
    class="sticky top-0 z-10 flex-shrink-0 flex h-12 bg-white shadow-sm w-[98%] rounded-md mx-auto mt-4 dark:bg-churpy-night-box dark:text-white"
  >
    <button
      type="button"
      class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-churpy-green md:hidden"
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex max-w-fit">
        <div class="my-auto">
           <Switch
              v-model="switch_val"
              @change="() => console.log('Switched')"
              :class="switch_val ? 'bg-churpy-dark' : 'bg-churpy-green'"
              class="relative inline-flex flex-shrink-0 h-[25px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="switch_val ? 'translate-x-6' : 'translate-x-0'"
                class="pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
              >

                <i class="fa-solid fa-moon dark:text-churpy-dark" v-if="switch_val"></i>
                <i class="fa-solid fa-sun" v-else ></i>

              </span>
            </Switch>
        </div>
      </div>

      <!-- branding -->
      <div class="flex items-center">
        <h1 class="text-brand-gray dark:text-gray-400">
          <span class="font-brand text-2xl">Churpy</span> Reconciliation Engine
        </h1>
      </div>

      <div class="ml-4 flex items-center md:ml-6">
        <button
          type="button"
          @click="$emit('toggle-sidebar')"
          class="bg-gray-400/40 rounded-full text-churpy-dark dark:text-gray-400 h-8 w-8 justify-center items-center hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green"
        >
          <span class="sr-only">View notifications</span>
          <i class="fa-solid fa-bell text-xl" aria-hidden="true"></i>
        </button>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full"
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
                <a
                  :href="item.href"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >{{ item.name }}</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Switch } from "@headlessui/vue";
import { ref, watch } from 'vue'
import {useUiStore} from '@/db/ui'

const uiStore = useUiStore();

localStorage.setItem('theme', 'light')

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const switch_val = ref(false)

// watch works directly on a ref
watch(switch_val, async (newVal, oldVal) => {
    let theme = newVal? 'dark' : 'light'
    if (newVal) {
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    //set theme in store
    uiStore.changeTheme(theme)
    localStorage.theme = theme

})

</script>
