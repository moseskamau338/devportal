<template>
  <p v-if="loaded" class="text-prose">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ex facilis quidem voluptate sed, repellat quibusdam voluptatem natus dicta? Explicabo natus ratione, delectus odit quo officiis. Numquam nam non iusto!
  </p>
  <DashboardLoader v-else />

</template>

<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import DashboardLoader from '../components/loaders/DashboardLoader.vue';
let loaded = ref(false)
 setTimeout(() => {
   console.log('loaded');
    loaded.value = true
  }, 3000);
</script>

<style>

</style>