<template>
    <Banner />
    <!-- toaster: error, success, info -->
    <Toast />

  <div class="dark:bg-churpy-night">
    <!-- Static sidebar for desktop -->
      <Sidebar />

    <div :class="{
      'md:pl-[13rem]' : store.mainSidebarOpen,
      'md:pl-[5rem]' : !store.mainSidebarOpen
    }" class="flex flex-col flex-1 transition-all">
     <TopBar @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <main class="mb-auto">
        <div class="py-6">
          <Breadcrumb />

          <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
            <!-- Replace with your content -->
             <slot />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>

    <footer class="max-w-8xl w-[85%] h-16 mx-auto items-center absolute bottom-0 flex justify-between">
          <div>
            <h6 class="text-xs text-brand-gray">COPYRIGHT © 2022 <a href="https://churpy.co" target="_blank"
            class="text-churpy-green">Churpy Inc.</a>, All rights Reserved</h6>
            <!-- <button @click="notify = !notify">{{notify ? 'Hide' : 'Show'}} Notification</button> -->
          </div>
          <div>
            <h6 class="text-xs text-brand-gray">
              <i class="fa-solid fa-microchip font-semibold text-churpy-green"></i>
              Churpy Reconciliation Engine
              </h6>
          </div>
        </footer>
  </div>

</template>

<script>
import Breadcrumb from '@/components/page/Breadcrumb.vue'
import TopBar from '@/components/page/TopBar.vue'
import Sidebar from '@/components/page/Sidebar.vue'
import Banner from '@/components/page/Banner.vue'
import Toast from '../page/Toast.vue'
import {useUiStore} from "@/db/ui";


export default{
  components: {
    Breadcrumb,
    TopBar,
    Sidebar,
    Banner,
    Toast
  },

  setup(){
    const store = useUiStore()
    return {store}
  }
}


</script>