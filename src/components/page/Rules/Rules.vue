<template>
<Modal :show="open" source="rules">
  <template #title>
    <h2 class="text-lg">
     <i class="fa-solid fa-list-check mr-1"></i>
      Configure Rules
    </h2>
  </template>
  <template #body>
     <TabGroup>
        <TabList as="div" class="border-b-2 border-slate-200 pt-3 px-3 flex">
          <Tab as="div" class="-mb-0.5" v-slot="{ selected }" v-for="(item, index) in [
              {name:'Existing Rules'},
              {name:'Create Custom'},
              ]" :key="index">
            <button :class="{'text-churpy-green font-bold border-b-4 border-churpy-green':selected}" class="text-sm md:text-md mr-6 delay-[20ms] transition-colors duration-500">
              {{ item.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="p-4 min-h-[500px]">
          <TabPanel as="div" class="transition-all">
            <ExistingRules />
          </TabPanel>
          <TabPanel as="div" class="transition-all">
            Create custom
          </TabPanel>
        </TabPanels>
     </TabGroup>

  </template>

  <template #footer>
    <div class="flex items-center space-x-2">
      <c-button variant="danger">Cancel</c-button>
      <c-button variant="success">Send and Apply</c-button>
    </div>
  </template>
</Modal>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Modal from "@/components/page/Modal.vue";
import {inject} from "vue";
import ExistingRules from "@/components/page/Rules/ExistingRules.vue";
export default {
  name: "Rules",
  props:{
    open:{type:Boolean, default: false, required: true },
  },
  components:{
    ExistingRules,
    Modal, CButton,
    TabGroup, TabList,
    Tab, TabPanels, TabPanel
  },
   setup(props, {emit}){
    const emitter = inject('emitter')

    emitter.on('close_modal', (source)=>{
      if (source==='rules'){
        emit('close')
      }
    })
   }
}
</script>

<style scoped>

</style>