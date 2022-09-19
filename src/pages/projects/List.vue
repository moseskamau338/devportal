<template>
<p class="pr-12">Projects provide an easy way to abstract bank integrations and authentication as you work on your project. A project is used by generating and using an <code class="bg-red-200 text-red-700 px-2 rounded">access-token</code> within the project view.
  <a href="#" class="text-green-600 hover:underline font-bold">View the docs</a>
</p>

  <div class="flex justify-between mt-12">
    <CButton variant="success">
      <i class="fa-solid fa-plus mr-1"></i>
      Create Project
    </CButton>
    <div class="mt-1 flex rounded-md shadow-sm dark:bg-churpy-night">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        <input type="text" class="focus:ring-green-500 focus:border-green-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 placeholder-gray-400" placeholder="Search projects..">
      </div>
      <button type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 dark:bg-churpy-night hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
        <span>Filters</span>
      </button>
    </div>
  </div>

   <div class="mt-5">
       <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-500">
              <thead class="bg-gray-50 dark:bg-churpy-night-box">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-slate-400 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-slate-400">Description</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-slate-400">Environment</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-slate-400">Invites</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-slate-400">Created At</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-slate-500 bg-white dark:bg-churpy-night-box/40">
                <tr>
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-500 sm:pl-6">Lindsay Walton</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">Front-end Developer</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">Front-end Developer</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">lindsay.walton@example.com</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">Member</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
       </div>
    </div>
  <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
  <div class="-mt-px w-0 flex-1 flex">
    <a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-400">
      <!-- Heroicon name: solid/arrow-narrow-left -->
      <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Previous
    </a>
  </div>
  <div class="hidden md:-mt-px md:flex">
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 1 </a>
    <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400" -->
    <a href="#" class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" aria-current="page"> 2 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 3 </a>
    <span class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> ... </span>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 8 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 9 </a>
    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"> 10 </a>
  </div>
  <div class="-mt-px w-0 flex-1 flex justify-end">
    <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-400">
      Next
      <!-- Heroicon name: solid/arrow-narrow-right -->
      <svg class="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</nav>

</template>

<script>
import CButton from "@/components/parts/CButton.vue";
export default {
  name: "List",
  components: {CButton}

}
</script>

<style scoped>

</style>