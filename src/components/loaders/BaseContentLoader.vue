<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    viewBox="0 0 450 350"
    :speed="2"
    primaryColor="#ebebeb"
    secondaryColor="#ffffff"
  >
    <slot></slot>
  </content-loader>
</template>