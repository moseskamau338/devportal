<template>
  <label :for="id" class="block h-32 relative overflow-hidden rounded">
    <!--
    * The input has an "overlayed" class which we define using @apply in the style block below
    * This ensures that no matter where you drag inside of the "drop zone" the default browser behavior for file inputs will kick in and assign that file(s) to the input
    * If we didn't do this the browser would instead just attempt to open the file in the window
    -->
    <input
      :id="id"
      type="file"
      class="overlayed"
      :multiple="multiple"
      @change="handleUpload"
    />

    <!-- The pointer-events-none class here is very important as it allows our drags and clicks to pass through to the input underneath -->
    <span
      :class="`overlayed bg-${color}-100 border-${color}-300 border-2 border-dashed text-${color}-800 pointer-events-none flex justify-center items-center dark:border-gray-400 dark:bg-churpy-night-box`"
    >
      <div class="text-center flex justify-center items-center h-full">
        <!-- Let's use a slot here to make our component a little more flexible (maybe the end developer would live to add an icon in there, etc) -->
        <slot v-if="!files.length>0">
          <div class="space-y-1 text-center">
            <i class="fa-duotone fa-file-circle-plus text-gray-400 mx-auto text-3xl"></i>
              <div class="flex text-sm text-gray-600 dark:text-gray-400">
                  <span class="font-bold">Upload a file</span>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 2MB</p>
            </div>
        </slot>

        <!--
        * Print out the file name so the user gets the feedback that the input accepted the file appropriately
        * This is really the only part that relies on Vue,
        the actual drag and drop functionality is handled by the default browser behavior for the input.
        This puts the majority of the functionality on the browser which is great!
        That means we don't have to mess with it
        -->
        <small v-if="files.length" :class="`text-${color}-600 block`">
          <slot name="file" :files="files" :uploadInfo="uploadInfo">
            {{ uploadInfo }}
          </slot>
        </small>
      </div>
    </span>
  </label>
</template>


<script>
import { ref, computed } from 'vue'
export default {
  name: "FileUploader",
  // props seem best defined in the Object API style as we're used to
  props: {
    id: { type: String, default: 'drag-and-drop-input' },
    multiple: { type: Boolean, default: false },
    color: { type: String, default: 'gray' },
  },
  // Everything else goes in a setup function
  setup(props, { emit }) {
    // keep up with the files state (think data)
    const files = ref([])

    // display the uploaded file names (think computed)
    const uploadInfo = computed(() => {
      return files.value.length === 1
        ? files.value[0].name
        : `${files.value.length} files selected`
    })

    // handle the file upload event (think methods)
    const handleUpload = (e) => {
      files.value = Array.from(e.target.files) || []
      emit('input', files)
    }

    return { files, uploadInfo, handleUpload }
  },
}
</script>

<style scoped>
/* Finally we use Tailwind CSS to create our overlayed class */
.overlayed {
  @apply absolute top-0 left-0 right-0 bottom-0 w-full block;
}
</style>
<style scoped>

</style>