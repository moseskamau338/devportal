<template>
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
</template>

<script setup>
const navigation = [
  { name: 'Dashboard', href: '#', icon: 'fa-solid fa-objects-column', current: true },
  { name: 'Team', href: '#', icon: 'fa-solid fa-users', current: false },
  { name: 'Projects', href: '#', icon: 'fa-solid fa-folder-grid', current: false },
]

</script>

<style>

</style>