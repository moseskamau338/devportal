<template>

    <!-- toaster: error, success, info -->
    <teleport to="#notifications">
        <TransitionRoot
            enter="transition transform duration-800 ease-out" 
            enter-from="translate-x-4 opacity-0" enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
            :show="notify" :class="themeGenerator.borderColor" class="fixed bg-white dark:bg-gray-500 ring-2 flex z-50 top-0 right-5 shadow-xl my-5 h-auto p-1 rounded-md max-w-[400px] overflow-hidden"
        >
          <div class="w-auto mx-auto mr-1">
            <TransitionChild as="template"
              enter="transition transform duration-400 ease-out" 
              enter-from="rotate-90 scale-50 opacity-0" enter-to="rotate-0 scale-100 opacity-100"
              leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
            >
              <div :class="themeGenerator.iconContainer" class="w-6 h-6 m-1.5 rounded-full ring-2 flex justify-center items-center">
                  <i class="fa-solid text-lg" :class="themeGenerator.icon"></i>
              </div>
            </TransitionChild>
          </div>
          <TransitionChild as="template"
            enter="transition transform duration-600 ease-out" 
            enter-from="translate-x-8 opacity-0" enter-to="translate-x-0 opacity-100"
            leave="transition transform duration-400 ease-in" leave-from="opacity-100" leave-to="opacity-0"
          >
            <div class="pl-2 pt-2 flex flex-col">
              <div class="flex justify-between">
                <div class="mr-2">
                <h1 class="font-sm text-brand-gray dark:text-gray-300">{{content.title}}</h1>

                  <p class="text-prose text-xs mt-2">
                    {{ content.message }}
                  </p>
                </div>
                <span @click="notify = !notify" class="mr-2 bg-red-50 hover:bg-red-200 hover:cursor-pointer shadow-md h-6 w-6 rounded-full flex justify-center items-center transition-all">
                  <i class="fa-solid fa-circle-xmark text-red-500"></i>
                </span>
              </div>
            </div>
          </TransitionChild>
        </TransitionRoot>
    </teleport>
</template>

<script>
 import { TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ref, inject, computed } from 'vue'

export default{
  components: {
    TransitionRoot,
    TransitionChild
  },
    setup(){
      const emitter = inject('emitter')
      const notify = ref(false)
      const type = ref('success')

      let content = ref({
        title:'' || '👋 Hello There, you need a title',
        message:'',
      })

      const themeGenerator = computed(() => {
        return {
          borderColor:type.value === 'success'?
            'ring-churpy-green':type.value = 'danger'?
                  'ring-red-500':type.value === 'warning'?
                      'ring-yellow-600':'ring-indigo-300',
          icon:type.value === 'success'?
            'fa-check text-churpy-green':type.value = 'danger'?
                  'fa-hexagon-minus text-red-500':type.value === 'warning'?
                      'fa-triangle-exclamation text-yellow-700':'fa-info text-brand-gray',

          iconContainer:type.value === 'success'?
            'bg-green-200 ring-green-500':type.value = 'danger'?
                  'bg-red-100 ring-red-300':type.value === 'warning'?
                      'bg-yellow-100 ring-yellow-300':'bg-indigo-100 ring-indigo-300',
        }
      })


      emitter.on('toast', (notifications)=>{
        content.value.title = notifications.title
        content.value.message = notifications.message || ''
        type.value = notifications.type

        notify.value = true;

        setTimeout(()=>{
          notify.value = false;
        },4000)
      })
      return {
        notify,
        themeGenerator,
        content
      }
    }
}
</script>
