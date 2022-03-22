<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <!-- breadcrumb area -->
    <nav class="flex" aria-label="Breadcrumb" v-if="$route.meta.breadcrumb || $route.meta.pageTitle">
        <ol role="list" class="flex items-center space-x-4">
        <li>
            <div>
            <router-link :to="{name: 'home'}" class="text-gray-400 hover:text-gray-500">
                <i class="fad fa-home flex-shrink-0"></i>
                <span class="sr-only">Home</span>
            </router-link>
            </div>
        </li>

        <li v-for="(item, index) in breadCrumb" :key="index">
             <div class="flex items-center">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <router-link href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {{item.text}}
                </router-link>
            </div>
        </li>
        </ol>
    </nav>

    <h1 class="text-xl my-4 font-semibold text-churpy-dark/70">
        {{route.meta.title || ''}}
    </h1>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default{
    setup(){
        const route = useRoute()
        const breadCrumb = computed(() => {
            typeof route.meta.breadcrumb === 'function'?
            route.meta.breadcrumb(route)
            :route.meta.breadcrumb
        })
        console.log(typeof breadCrumb);
        return {
            breadCrumb,
            route
        }
    }
}

</script>

<style>

</style>