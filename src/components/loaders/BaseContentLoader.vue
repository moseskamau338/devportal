<template>
<div class="flex flex-col hover:cursor-progress w-screen h-screen m-auto">

  <content-loader
    viewBox="0 0 450 350"
    :speed="2"
    :primaryColor="primaryColor"
    :secondaryColor="secondaryColor"
  >
    <slot></slot>
  </content-loader>
</div>
</template>

<script>
  import { ContentLoader } from "vue-content-loader"
  import { useUiStore } from "@/db/ui"


  export default {
    components: { ContentLoader },
    computed:{
      primaryColor(){
        return useUiStore().theme === 'dark'?
          '#1E293B': '#ebebeb'
      },
      secondaryColor(){
        return useUiStore().theme === 'dark'?
          '#283046': '#ffffff'
      }
    }
  }
</script>