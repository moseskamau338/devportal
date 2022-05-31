<template>
 <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full w-[98%] max-w-full overflow-x-auto lg:overflow-x-hidden relative py-4 px-3">
  <div class="grid grid-cols-1 lg:grid-cols-2">
   <div id="upload-section" class="lg:border-r px-4">
      <select id="data" v-model="data" class="mt-1 block w-min pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
      <option value="">---Choose Data type---</option>
      <option value="erp">Upload ERP data</option>
      <option value="bank">Upload Bank Data</option>
    </select>
      <p class="prose-base mt-2">
        This assumes you have prepared a CSV file prepared for this process.
        Your data will be parsed to understand how the data is represented. Additionally, in <b>the right pane</b>, you will have the chance to <b>confirm the column mapping</b> if it fits your desired state before continuing.
      </p>

      <FileUploader class="mt-4" :class="{'pointer-events-none opacity-50' : data.length === 0}" />
     <small v-if="data.length === 0" class="text-red-500 mt-4">You have to choose your dataset type first at the top</small>
      <div class="mt-3 flex flex-col md:flex-row md:space-x-2 md:items-center">
        <alert variant="warning" class="mb-2">
          To overwrite records, <b>check the adjacent box and <b>re-upload</b></b>
        </alert>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
          </div>
          <div class="ml-3 text-sm">
            <label for="comments" class="font-medium text-gray-700">Overwrite</label>
          </div>
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <c-button variant="success" class="mr-3">
          <i class="fa-solid fa-cloud-upload mr-2"></i>
          Upload
        </c-button>
        <c-button variant="danger">Cancel</c-button>
      </div>
   </div>

    <!--mapping-->
    <div id="mapper" class="hidden lg:block px-4 py-5">
      <h3 class="text-lg font-bold">Column mappings</h3>
      <p class="pr-8">
        If you wish to better understand Churpy's column identifiers, please read
        more <a href="#" class="text-green-600 hover:underline">here <sup><i class="fa-duotone fa-up-right-from-square text-[8px]"></i></sup></a>
      </p>

    <!--  table-->
       <div class="mt-4 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-1 align-middle md:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-500 sm:pl-6 md:pl-0">Churpy Identifier</th>
                  <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    <i class="fa-duotone fa-arrow-right-arrow-left text-gray-700 dark:text-gray-100 text-xl"></i>
                  </th>
                  <th scope="col" class="py-3.5 px-3 text-left text-md font-semibold text-gray-500">Your data columns</th>

                </tr>
              </thead>
              <tbody class="mt-4">
                <tr v-for="(col, index) in [
                      {churpy:'Invoice ID', column:['Invoice_ID']},
                      {churpy:'Customer ID', column:['Customer']},
                      {churpy:'Invoice due date', column:['Date']},
                    ]" :key="index">
                  <td class="whitespace-nowrap py-1 pl-4 pr-3 text-sm font-medium font-bold sm:pl-6 md:pl-0">{{ col.churpy }}</td>
                  <td class="whitespace-nowrap py-1 px-3 text-sm text-gray-500"></td>
                  <td class="whitespace-nowrap py-1 px-3 text-sm text-gray-500">
                    <select class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs rounded-md">
                      <option v-for="(name, index) in col.column" :key="index">{{ name }}</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>



 </div>
</template>

<script>
import FileUploader from "@/components/parts/FileUploader.vue";
import Alert from "@/components/parts/Alert.vue";
import CButton from "@/components/parts/CButton.vue";
import {ref} from "vue";

export default{
  name: 'UploadReconData',
  components:{
    CButton,
    Alert,
    FileUploader
  },
  setup(){
    const data = ref('')

    return {data}
  }

}
</script>
