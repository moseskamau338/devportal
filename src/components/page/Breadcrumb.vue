<template>
  <Transition :key="route.path"
        enter-active-class="transform ease-out duration-300 transition delay-400 translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition opacity-100 ease-in duration-100"
        leave-to-class="opacity-0"
        appear
      >
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <nav class="flex justify-between" aria-label="Breadcrumb">
          <div>
              <ol role="list" class="flex items-center space-x-2" >
              <li>
                  <div>
                  <router-link :to="{name: 'dashboard'}" class="text-gray-400 hover:text-gray-500">
                      <i class="fad fa-home flex-shrink-0"></i>
                      <span class="sr-only">Home</span>
                  </router-link>
                  </div>
              </li>
              <li v-for="(item, index) in (route.meta.breadcrumb ? route.meta.breadcrumb() : [])" :key="index">
                   <div class="flex items-center">
                      <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                      <router-link :to="item.to || ''" :class="!item.active? 'text-churpy-green hover:text-green-600':''" class="ml-4 text-sm font-medium text-gray-500">
                          {{item.text}}
                      </router-link>
                  </div>
              </li>
              </ol>
          </div>

          <!--<div id="onboardprogress" class="flex flex-row w-[500px]">-->
          <!--  <h2 class="dark:text-gray-500 text-gray-400 mr-4">Onboarding progress</h2>-->
          <!--  <nav class="flex items-center space-x-2">-->
          <!--    <div class="absolute flex items-center w-[240px]">-->
          <!--      <div class="h-1 w-full  bg-gray-400 dark:bg-churpy-night-box rounded-full absolute"></div>-->
          <!--      <div class="h-1.5 w-[34%] bg-churpy-green rounded-full absolute"></div>-->
          <!--    </div>-->

          <!--    <div class="z-40 absolute flex items-center space-x-10 group">-->
          <!--        <span v-for="index in 4" :class="[-->
          <!--         index <= 1? 'bg-churpy-green text-white' : 'bg-gray-300 dark:bg-gray-600',-->
          <!--        ]" class="flex h-6 w-6 shadow rounded-full relative justify-center items-center cursor-pointer hover:scale-110 transition-all peer">-->
          <!--          <span class="text-md">{{index}}</span>-->
          <!--        </span>-->

          <!--        <div id="tooltip1" role="tooltip" class="z-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded hidden peer-hover:block">-->
          <!--          <svg class="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF"><g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)"><g id="Group-2" transform="translate(24.000000, 0.000000)"><polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon></g></g></g></g></svg>-->

          <!--          <p class="text-sm font-bold text-gray-800 pb-1">Setup Your Team</p>-->
          <!--          <p class="text-xs leading-4 text-gray-600 pb-3">Head over to the team section and add more users to work with.</p>-->
          <!--          <div class="flex justify-between">-->
          <!--            <div class="flex items-center">-->
          <!--              <span class="text-xs font-bold text-indigo-700">Step 1 of 4</span>-->
          <!--            </div>-->
          <!--            <div class="flex items-center">-->
          <!--              <button class="focus:outline-none focus:text-gray-400 text-xs text-gray-600 underline mr-2 cursor-pointer">Quit Onboarding</button>-->
          <!--              <button class="focus:ring-2 focus:ring-offset-2 focus:ring-churpy-green focus:bg-churpy-green focus:outline-none bg-churpy-green transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">Next</button>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--        </div>-->

          <!--    </div>-->
          <!--  </nav>-->


          <!--</div>-->

        </nav>

        <h1 class="text-xl my-4 font-semibold flex text-brand-gray">
            {{route.meta.title || ''}}
        </h1>
        </div>
  </Transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'

    export default{
        setup(){
            const router = useRouter()
            const route = useRoute()
            
            return {
                route
            }
        }
    }
</script>

<style>

</style>