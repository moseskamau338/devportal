<template>
   <VueTippy>
    sghdvghsvhgvdhgvsg
     <template #trigger>
       ghvdhgvshgvg
     </template>

    <template #content>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa, non. Dignissimos fuga ipsum iusto nam omnis quidem quo. Atque delectus dolore eligendi eveniet ex, ipsa iusto necessitatibus nisi voluptatum!
    </template>
  </VueTippy>
</template>

<script>
import { Tippy } from "vue-tippy";
import 'tippy.js/dist/tippy.css'
import CButton from "@/components/parts/CButton.vue"; // optional for styling

export default {
  name: "TippyDropdown",
  components: {CButton, Tippy},
}
</script>

