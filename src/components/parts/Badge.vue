<template>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium shadow" :class="[
 helpers.parseTableStatus(status.toLowerCase(), themes)
]"> {{status.toUpperCase()}} </span>
</template>

<script>
import {inject} from "vue";
export default {
  name: "Badge",
  props:{
    status: {required: true, type: String},
    themes:{type: Array, default:[]}
  },
  setup(){
    const helpers = inject('helpers')

    return {helpers}
  }
}
</script>

<style scoped>

</style>