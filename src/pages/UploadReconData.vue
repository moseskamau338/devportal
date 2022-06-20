<template>
 <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md min-h-full max-w-full overflow-x-auto lg:overflow-x-hidden relative py-4 px-3">
  <div class="grid grid-cols-1 lg:grid-cols-2">
   <div id="upload-section" class="lg:border-r px-4">
      <select id="data" v-model="data" class="mt-1 block w-min pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:bg-churpy-night dark:border-gray-500">
      <option value="">---Choose Data type---</option>
      <option value="erp">Upload ERP data</option>
      <option value="bank">Upload Bank Data</option>
      <option value="invoice">Upload Invoice</option>
      <option value="remittance">Upload Remittance Advice</option>
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
        <c-button variant="danger" class="mr-5">Cancel</c-button>
        <c-button variant="success">
          <i class="fa-solid fa-cloud-upload mr-2"></i>
          Upload
        </c-button>
      </div>
   </div>

    <!--mapping-->
    <div id="mapper" class="lg:block pb-20 lg:pb-0 px-4 py-5 relative">
      <h3 class="text-lg font-bold">Mapping Verification</h3>
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
                    <select class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-xs rounded-md dark:bg-churpy-night dark:border-gray-500">
                      <option v-for="(name, index) in col.column" :key="index">{{ name }}</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

       <div class="flex justify-end mt-12 absolute bottom-0 right-5 w-full">
          <c-button variant="success">Save Mappings</c-button>
       </div>
    </div>

  </div>

 </div>

  <div class="bg-white dark:bg-churpy-night-box rounded-md shadow-md py-4 px-3 mt-5">
    <header class="flex justify-between">
      <h1 class="text-lg font-bold text-gray-500 dark:text-gray-400">Repair your data</h1>

      <button @click="showAdvanced = !showAdvanced" class="hover:opacity-80">
        <i :class="[showAdvanced ? 'fa-chevron-up':'fa-chevron-down']" class="fa-solid mr-1"></i>
        <span>Advanced</span>
      </button>
    </header>

    <div v-show="showAdvanced">
      <p class="text-sm">The table below offers you a convenient way to edit uploaded data and ensure there are no errors in the data. Remember to <b>save your editions</b> when done.</p>

      <h2 class="mt-6 text-sm font-semibold">Review uploaded file</h2>
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="col-span-7 p-3">
          <object data="/testfiles/sample.pdf" type="application/pdf" width="100%" height="100%" class="h-96">
            <div class="text-gray-400 w-full h-32 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center p-4">
              Uploaded pdfs appear here after processing
            </div>
          </object>
        </div>
        <div class="col-span-5 rounded dark:bg-gray-700 bg-gray-300/40 p-3">
          <h3 class="text-sm font-bold">Results</h3>

          <div class="w-full h-full mt-2 flex justify-center">
            <div class="w-[98%] bg-white dark:bg-churpy-night-box h-96 rounded shadow-inner shadow-sm shadow-gray-300 dark:shadow-none p-3">
              <form>
                <div class="grid grid-cols-2 gap-2">
                  <div class="col-span-2 sm:col-span-1">
                    <label for="first-name" class="block text-sm font-medium">Field 1</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500" />
                  </div>

                  <div class="col-span-2 sm:col-span-1">
                    <label for="last-name" class="block text-sm font-medium">Field 2</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500" />
                  </div>

                  <div class="col-span-2 sm:col-span-1">
                    <label for="email-address" class="block text-sm font-medium">Field 3</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500" />
                  </div>

                  <div class="col-span-2 sm:col-span-1">
                    <label for="country" class="block text-sm font-medium">Field 4</label>
                    <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm dark:bg-churpy-night dark:border-gray-500">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-2">
                    <label for="street-address" class="block text-sm font-medium">Field 3</label>
                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-churpy-night dark:border-gray-500" />
                  </div>

                </div>
              </form>
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
    const showAdvanced = ref(true)

    return {data, showAdvanced}
  }

}
</script>
