<template>
<Modal :show="open">
  <template #title>View Credit Note</template>

  <template #body>
    <section class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-8 h-fit max-h-[500px] overflow-y-auto px-2">
        <h2 class="font-bold">Line Items</h2>
         <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <NoteLineitems />

        <div class="w-full relative">
          <!-- discussions -->
          <header class="flex justify-between items-center border-b mt-2">
            <h2 class="font-bold">Discussion</h2>
          </header>

          <div class="mt-5 pb-20">

            <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
              <span class="absolute -mx-8 h-8 w-8 flex items-center justify-center bg-cyan-600 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box text-xs text-white">
                {{helpers.getRandomColor('Moses Kamau').character}}
              </span>
              <header class="flex justify-between ml-2">
                  <input type="text" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-3/4 sm:text-sm border-2 border-gray-300 placeholder-gray-400 rounded-md dark:bg-churpy-night-box dark:border-gray-500" placeholder="Write your comments here …" />

                <!--<small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>-->
              </header>
            </div>

            <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
              <span class="absolute -mx-8 h-8 w-8 flex items-center justify-center bg-cyan-600 p-2 rounded-full border-2 border-gray-100 dark:border-churpy-night-box text-xs text-white">
                {{helpers.getRandomColor('Grace Chim').character}}
              </span>
              <header class="flex justify-between ml-2">
                <h2 class="text-sm font-bold">Grace Chim</h2>
                <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
              </header>
              <p class="prose text-sm ml-2 pr-16 text-gray-500 dark:text-gray-300">
                Hi Moses, I recounted the line-items and confirmed that there was a mistake.
              </p>
            </div>

          </div>

        </div>

      </div>
      <div class="col-span-4 mt-4 md:mt-0 px-3">
        <h2 class="font-bold">Adjustment Metadata</h2>
        <div class="mt-4">
          <table class="w-1/2 table-auto border-separate border-spacing-2">
            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-check mr-1"></i>
                  Status
                </span>
              </th>
              <td class="text-xs">  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"> RECONCILED </span></td>
            </tr>
            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-user mr-1"></i>
                  Raised by
                </span>
              </th>
              <td class="text-xs">
                Moses Kamau
              </td>
            </tr>

            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-file-invoice mr-1"></i>
                  Invoice
                </span>
              </th>
              <td class="text-xs">
                <span class="font-bold text-green-600 hover:underline cursor-pointer">994537467 <sup>
                  <i class="fa-solid fa-square-arrow-up-right text-[8px]"></i>
                </sup></span>
              </td>
            </tr>
            <tr class="whitespace-nowrap">
              <th class="text-xs font-bold">
                <span class="flex items-center">
                  <i class="fa-solid fa-calendar mr-1"></i>
                  Date
                </span>
              </th>
              <td class="text-xs">
                07/04/2022
              </td>
            </tr>
          </table>
        </div>

        <div class="mt-5">
        <!-- files-->
          <h2 class="font-bold">Attachments</h2>

          <table class="table-auto w-full">
            <tr class="hover:bg-gray-100">
              <th class="text-xs font-bold text-green-600 pl-2 py-1.5">file.pdf</th>
              <td class="text-xs pr-2 text-center py-1.5">
                <div>
                  <button class="flex items-center justify-center hover:scale-105 h-5 w-5 bg-green-200 rounded-full focus:ring-1 focus:ring-green-500">
                    <i class="fa-solid fa-download text-xs text-green-600"></i>
                  </button>
                </div>
              </td>
            </tr>
          </table>

          <FileUploader class="mt-5">
            <h6 class="dark:text-gray-400">Upload</h6>
          </FileUploader>
        </div>
      </div>
    </section>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import NoteLineitems from "@/components/page/Adjustments/NoteLineitems.vue";
import {inject} from "vue";
import FileUploader from "@/components/parts/FileUploader.vue";

export default {
  name: "ViewNote",
  props:{
    open:{required: true, type: Boolean}
  },
  components:{
    FileUploader,
    NoteLineitems,
    Modal
  },
  setup(props, {emit}){
    const emitter = inject('emitter')
    const helpers = inject('helpers')

    emitter.on('close_modal', ()=>{
        emit('close')
    })

    return {helpers}
  }
}
</script>

<style scoped>

</style>