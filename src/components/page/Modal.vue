<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="close">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block bg-white dark:bg-churpy-night-box rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full min-h-[500px] align-middle sm:align-middle sm:max-w-4xl sm:w-full">
            <header class="bg-gray-200 dark:bg-gray-700 m-0 px-3 pt-3 pb-2 flex justify-between">
              <h3 class="font-bold">
                <slot name="title"></slot>
              </h3>
              <span>
                <slot name="title_side"></slot>
                <h6 class="font-brand">Churpy</h6>
              </span>
            </header>
            <div class="px-4 pt-4 pb-4">
             <slot name="body"></slot>
            </div>

            <div class="flex justify-end px-4 py-2 pb-3 w-full bottom-0 fixed">

              <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-churpy-green hover:bg-churpy-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green">
                <slot name="done-text">Done</slot>
              </button>


            </div>

          </div>

        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, toRef, inject } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  props: {
    show: {type: Boolean, required: true},
    source:{type:String, required: true},
    size: {type: String, default: 'lg'}
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup(props) {
    //preliminaries:
    const emitter = inject('emitter')
    const open = toRef(props, 'show')

    function close(){
      emitter.emit('close_modal', props.source)
    }
    /*
    * listening to close modal event
    * in your initiating component, add the following code:
    * import {inject} from 'vue'
    * const emitter = inject('emitter')
    *
      let showSetting = ref(false)
        onMounted(()=>{
          emitter.on('close_modal', (source)=>{
            if(source === 'table'){
              showSetting.value = false;
              }
           })
        })
    * */

    return {
      open,
      close
    }
  },
}
</script>