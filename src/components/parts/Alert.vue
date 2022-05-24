<template>
<div :key="variant" :class="themeGenerator.bgColor" class="border-l-4 px-2 py-1 w-fit shadow rounded">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <i class="fa-solid" :class="themeGenerator.icon"></i>
      </div>
      <div class="ml-3">
        <p :class="themeGenerator.text" class="text-sm">
          <slot></slot>
        </p>
      </div>

      <!--<span><i class="fa-solid fa-close"></i></span>-->
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
export default {
  name: "Alert",
  props:{
    variant:{
      default:'info',
      type: String
    },
    closable:{
      type:Boolean,
      default: false,
    }
  },
  setup(props){
      const themeGenerator = computed(() => {
        let variant = props.variant
        return {
          bgColor: (() => {
            switch(variant) {
            case 'success': return 'bg-green-100 border-green-400';
            case 'danger' :return 'bg-red-100 border-red-400';
            case 'warning' : return 'bg-yellow-100 border-yellow-400';
            default: return 'bg-blue-100 dark:bg-blue-300 border-blue-400';
            }
          })(),

          icon: (() => {
            switch(variant) {
            case 'success': return 'fa-check text-churpy-green';
            case 'danger' :return 'fa-hexagon-minus text-red-500';
            case 'warning' : return 'fa-triangle-exclamation text-yellow-700';
            default: return 'fa-circle-info text-blue-600';
            }
          })(),

          text: (() => {
            switch(variant) {
            case 'success': return 'text-churpy-green';
            case 'danger' :return 'text-red-500';
            case 'warning' : return 'text-yellow-700';
            default: return 'text-blue-600 dark:text-blue-800';
            }
          })()


        }
      })

    return {themeGenerator}
  }
}
</script>
