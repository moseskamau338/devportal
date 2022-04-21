<template>
    <template :key="index" v-for="(item, index) in navs">
      <div class="space-y-2">
          <div
          class="text-slate-500 align-content-bottom text-center text-xs w-full h-6 mt-5" v-if="item.header">
              <span>{{item.header}}</span>
          </div>

          <div
          class="text-slate-500 group flex items-center px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1" v-if="item.disabled">
              <span>
                  <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
              {{ item.title }}
              </span>

          </div>

          <router-link v-if="!item.header && !item.disabled" :to="{name:item.route}" :class="[$route.name === item.route ? 'bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4' : 'text-slate-400 hover:bg-green-400/30 mb-2', 'group flex items-center px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1']">
              <i :class="item.icon" class="mr-3 flex-shrink-0"></i>
              {{ item.title }}
          </router-link>
      </div>
    </template>
</template>
<script>
export default {
  props: {
    navs: Array
  },
  setup(props) {
    return {navs: props.navs}
  }
}
</script>