<template>
  <Transition :key="route.path"
        enter-active-class="transform ease-out duration-300 transition delay-400 translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition opacity-100 ease-in duration-100"
        leave-to-class="opacity-0"
        appear
      >
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <nav class="flex" aria-label="Breadcrumb">
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