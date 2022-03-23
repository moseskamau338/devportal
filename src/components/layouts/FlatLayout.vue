<template>
  <div>
    <breadcrumb />

      <h1>nothing here</h1>
      <slot />
  </div>
</template>

<script>
import Breadcrumb from "../page/Breadcrumb.vue"

export default 
 {
    name:'FlatLayout',
     components: { Breadcrumb },
}
</script>

<style>

</style>