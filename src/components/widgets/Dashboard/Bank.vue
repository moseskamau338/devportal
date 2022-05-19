<template>
    <div 
        :class="`col-span-${width}`"
        class="min-w-full min-h-full bg-white dark:bg-churpy-night-box
        p-1 shadow-sm rounded flex overflow-hidden
        ">
        <div class="h-full p-2 m-auto">
            <div class="bg-light-green dark:bg-gray-500 hover:shadow-md h-8 w-8 rounded-full flex justify-center items-center">
                <i class="fa-solid fa-building-columns text-success dark:text-white text-lg"></i>
            </div>
        </div>
        <div class="flex flex-col mx-auto w-full px-4">
            <h2 class="text-lg font-medium">NCBA Bank</h2>
            <p class="text-prose dark:text-gray-300">
                Ksh 0.00
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
    const width = ref(1)
    // const initialWidth = ref(7)

</script>