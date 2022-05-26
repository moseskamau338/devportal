<template>
  <button type="button" :class="themeGenerator.theme" class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all h-fit">
    <slot>Button</slot>
  </button>
</template>

<script>
import {computed} from "vue";
export default {
  name: "CButton",
  props:{
    variant: { type: String, required:true},
  },
   setup(props){
      const themeGenerator = computed(() => {
       let variant = props.variant
        return {
          theme: (() => {
              switch(variant) {
                case 'success': return 'text-white bg-churpy-green hover:bg-green-600 focus:ring-churpy-green';
                case 'danger' :return 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-500';
                case 'warning' : return 'text-white bg-orange-400 hover:bg-orange-500 focus:ring-orange-400';
                case 'dark' : return 'text-white bg-churpy-dark hover:bg-churpy-dark/90 focus:ring-churpy-dark';
                default: return 'text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500';
              }
            })(),
        }
      })

    return {themeGenerator}
  }
}
</script>

<style scoped>

</style>