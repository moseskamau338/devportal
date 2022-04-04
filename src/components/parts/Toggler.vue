<template>
     <Switch
        v-model="switch_val"
        :class="switch_val ? 'bg-churpy-dark' : 'bg-churpy-green'"
        class="relative md:inline-flex flex-shrink-0 h-[25px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
        <span class="sr-only">Use setting</span>
        <span
        aria-hidden="true"
        :class="switch_val ? 'translate-x-2 md:translate-x-6' : '-translate-x-3 md:translate-x-0'"
        class="pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        >

        <i class="fa-solid fa-moon dark:text-churpy-dark" v-if="switch_val"></i>
        <i class="fa-solid fa-sun" v-else ></i>

        </span>
    </Switch>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import { ref, watch } from 'vue'
import {useUiStore} from '@/db/ui'
// const uiStore = useUiStore();

// localStorage.setItem('uiStore.theme', "light")

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
    // uiStore.changeTheme(theme)
    // localStorage.uiStore.theme = theme

})
</script>