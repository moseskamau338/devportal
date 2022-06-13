<template>
  <tippy theme="churpy">
    <slot></slot>

    <template #content>
      <span v-if="content && content.length">
        {{ content }}
      </span>
      <slot v-else name="html"></slot>
    </template>
  </tippy>
</template>

<script>
import {ref} from 'vue'
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

export default {
  name: "ToolTip",
  components: {Tippy},
  props:{content: {default: '', type: String}},
}
</script>

<style>
.tippy-box[data-theme~=churpy]{
  @apply bg-churpy-night-box border shadow-xl
}
.tippy-box[data-theme~=churpy][data-placement^=top]>.tippy-arrow:before{
  @apply border-t-churpy-night-box dark:border-t-gray-100
}.tippy-box[data-theme~=churpy][data-placement^=bottom]>.tippy-arrow:before{
  @apply border-b-churpy-night-box dark:border-b-gray-100
 }.tippy-box[data-theme~=churpy][data-placement^=left]>.tippy-arrow:before{
  @apply border-l-churpy-night-box dark:border-l-gray-100
   }.tippy-box[data-theme~=churpy][data-placement^=right]>.tippy-arrow:before{
  @apply border-r-churpy-night-box dark:border-r-gray-100
       }.tippy-box[data-theme~=churpy]>.tippy-backdrop{@apply bg-churpy-night}
.tippy-box[data-theme~=churpy]>.tippy-svg-arrow{@apply fill-churpy-night-box dark:fill-gray-400}
</style>