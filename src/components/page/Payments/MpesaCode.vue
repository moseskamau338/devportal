<template>
<Modal :show="open" source="mpesa_code" size="small">
  <template #title>
    <span class="flex items-center space-x-2">
     <span> Pay via</span>
      <svg class="h-8 w-auto pt-1.5" xmlns="http://www.w3.org/2000/svg" width="90.498" height="45.376" viewBox="0 0 90.498 45.376">
        <g id="Group_769" data-name="Group 769" transform="translate(0 0)">
          <path id="Path_107" data-name="Path 107" d="M4073.071,2448.934H4061.1a3.191,3.191,0,0,1-3.182-3.182v-35.079a3.191,3.191,0,0,1,3.182-3.181h11.972a3.219,3.219,0,0,1,.419.028v-2.582a1.383,1.383,0,0,1,1.381-1.38h0a1.385,1.385,0,0,1,1.383,1.38v4.354a1.366,1.366,0,0,1-.113.544,3.191,3.191,0,0,1,.113.837v35.079a3.192,3.192,0,0,1-3.183,3.182Zm-9.46-36.838h6.948a4.031,4.031,0,0,1,4.019,4.02v11.552a4.03,4.03,0,0,1-4.019,4.018h-6.948a4.029,4.029,0,0,1-4.018-4.018v-11.552a4.03,4.03,0,0,1,4.018-4.02Z" transform="translate(-4037.867 -2403.558)" fill="#fff" fill-rule="evenodd"/>
          <path id="Path_108" data-name="Path 108" d="M4083.774,2414.89l7.639-.03c2.787.354,4.074,2.438,3.958,5.472-.213,3.056-1.945,4.552-4.839,4.814l-2.774-.056.077,8.387h-4.061V2414.89Zm4.1,1.906c1.886-.271,3.334.254,3.433,3.223-.062,2.651-1.472,3.323-3.433,3.182v-6.4Z" transform="translate(-4042.575 -2405.615)" fill="#fff" fill-rule="evenodd" opacity="0.766"/>
          <path id="Path_109" data-name="Path 109" d="M4105.587,2414.61l4.834-.023-.034,2.077-3.791-.019c-2.185.407-1.7,2.738-1.8,4.424l5.1-.095.019,2.548-4.938-.052-.027,6.17a2.478,2.478,0,0,0,2.459,2.5l2.713-.029.826.017-.024,1.928-.849.032-5.155-.055c-1.779-.06-3.213-.94-3.872-3.681l-.126-11.972c.07-2.454,1.692-3.658,4.669-3.768Z" transform="translate(-4045.696 -2405.565)" fill="#fff" fill-rule="evenodd" opacity="0.766"/>
          <path id="Path_110" data-name="Path 110" d="M4114.625,2419.87c-.3-4.01,1.932-4.917,4.651-5.232,3.179-.189,5.177,1.137,5.566,4.522l-3.757-.01c-.235-1.708-1.564-2.364-2.778-1.551-1.733,2.119,3.672,5.847,5.292,7.231,2.8,2.215,2.326,8.354-1.987,9.494l-2.631.094c-2.673.063-4.262-1.625-4.723-4.755l3.785-.066c.206,1.337.776,2.167,1.986,2.107,1.884-.358,2.4-2.017,1.063-4.134-2.806-2.379-6.125-4.614-6.466-7.7Z" transform="translate(-4048.125 -2405.573)" fill="#fff" fill-rule="evenodd" opacity="0.766"/>
          <path id="Path_111" data-name="Path 111" d="M4033.4,2413.873h3.975l.042,1.236c2.4-1.039,4.214-1.773,6.113-.063,3.392-1.6,5.96-1.42,7.233,1.555l.177,16.7h-4.01v-15.926c-.3-1.363-1.376-1.6-2.678-1.507V2433.3h-4.1v-15.926c-.3-1.363-1.375-1.6-2.677-1.507V2433.3H4033.4v-19.423Z" transform="translate(-4033.404 -2405.437)" fill="#fff" fill-rule="evenodd" opacity="0.766"/>
          <path id="Path_112" data-name="Path 112" d="M4129.926,2433.875h4.123v-10.257h3.432v10.257h4v-14.652c-.077-2.978-2.368-4.844-5.607-4.856-3.7-.032-5.8,1.721-5.944,4.689v14.82Zm4.123-15.7c.135-1.095.491-1.536,1.7-1.654,1.22.031,1.654.735,1.737,1.821v2.972h-3.432v-3.139Z" transform="translate(-4050.979 -2405.525)" fill="#fff" fill-rule="evenodd" opacity="0.766"/>
          <path id="Path_113" data-name="Path 113" d="M4062.425,2423.554c.688,1.608,1.624,2.348,2.76,2.392a15.866,15.866,0,0,1-5.675,2.636,17.893,17.893,0,0,1-3.615-.718,9.329,9.329,0,0,0,6.531-4.31Z" transform="translate(-4037.498 -2407.198)" fill="#6e1414" stroke="#c47749" stroke-miterlimit="2.613" stroke-width="0.047" fill-rule="evenodd"/>
          <path id="Path_114" data-name="Path 114" d="M4070.928,2418.488l8.288,4.186c-4.221,5.553-11.338,5.7-18.919,4.982a14.935,14.935,0,0,0,10.632-9.167Z" transform="translate(-4038.3 -2406.277)" fill="#e3001b" stroke="#c47749" stroke-miterlimit="2.613" stroke-width="0.047" fill-rule="evenodd"/>
        </g>
      </svg>
    </span>
  </template>

  <template #body>
    <div>
      <h3 class="text-lg leading-6 font-medium">Use transaction code</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">We could not manage to verify your payment, please provide the transactions MPESA code below</p>
    </div>
    <div class="mt-8 mb-16">
     <div class="border border-gray-300 rounded-md px-3 py-2 mt-2 focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
        <label for="price" class="block text-sm font-medium">Enter Transaction Code</label>
        <div class="mt-1 relative">
          <input type="text" name="price" id="price" class="focus:ring-0 dark:bg-churpy-night-box block w-full pr-2 sm:text-sm border-0 placeholder-gray-400" placeholder="E.g QXU78..." />
        </div>
      </div>
    </div>
  </template>

  <template #footer>
    <div class="flex space-x-5">
      <c-button variant="success">
        Verify
      </c-button>
    </div>
  </template>
</Modal>
</template>

<script>
import Modal from "@/components/page/Modal.vue";
import CButton from "@/components/parts/CButton.vue";
import {inject} from "vue";

export default {
  name: "MpesaCode",
  emits:['close'],
  props:{
    open:{required: true, type: Boolean},
  },
  components:{
    Modal, CButton
  },
  setup(props, {emit}){


    const emitter = inject('emitter')
     emitter.on('close_modal', (modal_source)=>{
      if (modal_source === 'mpesa_code'){
          emit('close')
      }
    })
  }
}
</script>

<style scoped>

</style>