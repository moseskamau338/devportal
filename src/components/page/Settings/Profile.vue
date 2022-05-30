<template>
  <div class="mx-4 my-2 space-y-5 divide-y divide-gray-100">
    <div>
      <h2 class="font-bold">Update you personal details here</h2>
    </div>

    <!--name-->
    <div class="grid grid-cols-1  lg:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Name</h3>
      </div>
      <div class="col-span-1 lg:col-span-2 mt-4 md:mt-0 flex flex-col space-y-5 md:space-y-reverse md:space-x-5 md:flex-row">
         <div class="md:w-fit">
            <label for="f-name" class="block text-sm font-medium text-gray-700">First Name</label>
            <div class="mt-1">
              <input type="text" name="f-name" id="f-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="John" />
            </div>
          </div>
         <div class="md:w-fit">
            <label for="l-name" class="block text-sm font-medium text-gray-700">Last Name</label>
            <div class="mt-1">
              <input type="text" name="f-name" id="l-name" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Doe" />
            </div>
          </div>
      </div>

    </div>

    <!--email-->
    <div class="grid grid-cols-1  lg:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Email Address</h3>
      </div>
      <div class="col-span-1 lg:col-span-2 mt-4 lg:mt-0 flex space-x-5">
         <div class="md:w-fit">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="John@company.co" />
            </div>
          </div>

      </div>

    </div>

    <!--profile photo-->
    <div class="grid grid-cols-1  lg:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Profile Photo</h3>
      </div>
      <div class="col-span-1 lg:col-span-2 mt-4 lg:mt-0 flex space-x-5">
         <div class="w-fit flex flex-col lg:flex-row items-center lg:space-x-8 space-y-5">
               <span class="h-12 w-12 rounded-full bg-gray-200 ring-2 ring-blue-200 ring-offset-1 flex items-center justify-center">
                 KJ
               </span>
                <div class="bg-gray-200 w-64 rounded-md hover:cursor-pointer">
                 <FileUploader />
                </div>
         </div>
      </div>

    </div>

    <!--name-->
    <div class="grid grid-cols-1  lg:grid-cols-3 py-5">
      <div class="col-span-1">
        <h3>Roles</h3>
      </div>
      <div class="col-span-1 lg:col-span-2 mt-4 md:mt-0 flex flex-col space-y-5 md:space-y-reverse md:space-x-5 md:flex-row">
         <div class="md:w-fit">
            <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
            <div class="mt-1">
              <input type="text" name="company" id="company" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Company X" />
            </div>
          </div>
         <div class="md:w-fit">
            <label for="admin" class="block text-sm font-medium text-gray-700">Role</label>
            <div class="mt-1">
              <input type="text" name="admin" id="admin" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Admin" />
            </div>
          </div>

          <div class="md:w-fit">
            <label for="group" class="block text-sm font-medium text-gray-700">Group</label>
            <div class="mt-1">
              <input type="text" name="group" id="group" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="Managers Group" />
            </div>
          </div>
      </div>

    </div>

  <!--save-->
    <div class="py-5 space-x-2 flex justify-end">
      <c-button variant="danger" class="text-lg">Cancel</c-button>
      <c-button variant="success" class="text-lg">Save Settings</c-button>
    </div>
  </div>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
import FileUploader from "@/components/parts/FileUploader.vue";

export default {
  name: "Profile",
  components: {FileUploader, CButton},
}
</script>

<style scoped>

</style>