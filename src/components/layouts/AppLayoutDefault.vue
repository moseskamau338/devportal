<template>
  <div>
    <!-- Static sidebar for desktop -->
      <Sidebar />

    <div class="md:pl-[10rem] flex flex-col flex-1">
     <TopBar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <main>
        <div class="py-6">
          <!-- <Breadcrumb /> -->

          <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
            <!-- Replace with your content -->
             <slot />
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
import Breadcrumb from '@/components/page/Breadcrumb.vue'
import TopBar from '@/components/page/TopBar.vue'
import Sidebar from '@/components/page/Sidebar.vue'


</script>

