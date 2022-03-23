<template>
  <BaseLayout>
      <router-view v-slot="{ Component , route}">
        <transition name="zoom-fade" :key="route.path">
          <component :is="Component" />
        </transition>
      </router-view>


  </BaseLayout>
</template>

<style lang="css">
/* // ///////////////////////////////////////////////
// Zoom Fade
// /////////////////////////////////////////////// */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: transform 0.35s, opacity 0.28s ease-in-out;
}
.zoom-fade-enter {
  transform: scale(0.97);
  opacity: 0;
}

.zoom-fade-leave-to {
  transform: scale(1.03);
  opacity: 0;
}
#app > a{
   transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

</style>


