<template>
<div class="flex flex-col hover:cursor-progress items-center mx-auto">

  <content-loader
    viewBox="0 0 1000 1000"
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
  import {computed} from "vue";


  export default {
    components: { ContentLoader },
    setup(){
     const primaryColor = computed(() => {
          return useUiStore().theme? '#1E293B': '#cfd2df'
     })
      const secondaryColor = computed(() => {
          return useUiStore().theme? '#283046': '#ffffff'
     })

      return {primaryColor, secondaryColor}
    },

  }
</script>