<template>
<div ref="popper" id="popper">
   <i ref="arrow" class="bg-red-600 h-2 w-2"></i>
    <slot name="content"></slot>
</div>
<div ref="reference">
  <slot></slot>
</div>
</template>

<script>
import {onMounted, ref} from "vue";
import { createPopper } from '@popperjs/core';

export default {
  name: "Pop",
  setup(){
    const reference = ref('reference');
    const popper = ref('popper');
    const arrow = ref('arrow');

    onMounted(() => {
      createPopper(reference.value, popper.value, {
        placement: 'left',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
          {
            name: 'arrow',
            options: {
              element: arrow.value,
              padding: 5
            },
          },
        ],

      });
    })

    return {reference, popper, arrow}
  }
}
</script>

<style scoped>

</style>