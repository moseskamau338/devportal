<template>
<section class="divide-y divide-gray-30 dark:divide-slate-800 space-y-4">
  <p class="text-sm dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos distinctio.</p>

  <div class="grid grid-cols-1 lg:grid-cols-12 pt-4">
    <div class="col-span-5">
      <h3 class="font-bold text-medium dark:text-slate-400">Project Title</h3>
      <p class="text-sm dark:text-slate-500 text-slate-400">Title only takes letters, -,_ and @. 20 characters long.</p>
    </div>
    <div class="col-span-7">
      <div>
        <input type="text" class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-[400px] sm:text-sm border-gray-300 rounded-md dark:border-slate-700 dark:placeholder-slate-600 dark:bg-churpy-night placeholder-gray-400" placeholder="Title_here">
      </div>
    </div>
  </div>

  <!--description-->
   <div class="grid grid-cols-1 lg:grid-cols-12 pt-4">
      <div class="col-span-5">
        <h3 class="font-bold text-medium dark:text-slate-400">Description</h3>
        <p class="text-sm dark:text-slate-500 text-slate-400"> Briefly describe the purpose of this project.</p>
      </div>
      <div class="col-span-7">
        <div>
            <textarea rows="4" name="description" id="describe" class="w-[400px] shadow-sm focus:ring-green-500 focus:border-green-500 block w-full dark:border-slate-700 dark:placeholder-slate-600 dark:bg-churpy-night sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="This project is meant to..."></textarea>
        </div>
      </div>
   </div>
  <!--invites-->
  <div class="grid grid-cols-1 lg:grid-cols-12 pt-4">
      <div class="col-span-5">
        <h3 class="font-bold text-medium dark:text-slate-400">Invite Collaborators</h3>
        <p class="text-sm dark:text-slate-500 text-slate-400">
          Enter valid email addresses to invite members to your project.
          <br>
          An invitation <b>email will be sent</b> with instructions.
        </p>
      </div>
      <div class="col-span-7">
        <div class="border border-gray-300 dark:border-slate-700 rounded w-[600px]">
         <header class="flex flex-row items-center space-x-2 border-b-2 dark:border-b-slate-700 py-1 px-2">
           <input type="text" class="transition-all shadow-sm focus:ring-1 focus:ring-green-500 block w-[400px] sm:text-sm border-none rounded bg-gray-200 dark:bg-churpy-night-box dark:placeholder-slate-600 placeholder-gray-400" placeholder="E.g email@example.com">

           <select class="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-md dark:border-slate-700 dark:bg-churpy-night-box dark:text-gray-400 leading-none text-xs">
              <option>Admin</option>
              <option selected>Editor</option>
              <option>Write</option>
            </select>
            <CButton variant="success" class="rounded-full flex items-center p-2"><i class="fa-solid fa-plus"></i> &nbsp; Add</CButton>
         </header>
          <div class="px-4 py-2">
            <ul class="flex flex-wrap">
              <li v-for="i in 6" class="mr-1 mb-2">
                <mark class="border border-sky-200 dark:border-gray-700 text-xs bg-sky-100 dark:bg-churpy-night-box dark:text-slate-400 px-2 py-0.5 rounded flex items-center w-fit space-x-2 text-sky-800 shadow">
                  <span>moses@gmail.com</span>
                  <button class="flex justify-center items-center h-4 w-4 bg-green-200 rounded-full hover:scale-105 bg-sky-200 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                  </button>
                </mark>
              </li>
            </ul>
          </div>
        </div>
      </div>
   </div>

  <!--choose services-->
   <div class="grid grid-cols-1 lg:grid-cols-12 pt-4">
      <div class="col-span-5">
        <h3 class="font-bold text-medium dark:text-slate-400">Connect to API Services</h3>
        <p class="text-sm dark:text-slate-500 text-slate-400"> Add connections by selecting the desired
 banks and associated Services.</p>
      </div>
      <div class="col-span-7">
        <div>

          <Pop />
          <!--<Pop style it #container>-->
          <!--  <template>button</template>-->
          <!--  <template #content>-->
          <!--    list-->
          <!--  </template>-->
          <!--</Pop>-->



            <div class="w-[500px] bg-white border px-3 py-1 shadow rounded">
              <div>all list will appear</div>

              <div>
              <!--all services-->
              <!--  <ul>-->
              <!--    <li v-for="i in 16">Service 1....</li>-->
              <!--  </ul>-->
              </div>

            </div>
        </div>
      </div>
   </div>
</section>
</template>

<script>
import CButton from "@/components/parts/CButton.vue";
import Pop from "@/components/parts/Pop.vue";
export default {
  name: "Create",
  components: {Pop, CButton}
}
</script>

<style scoped>

</style>