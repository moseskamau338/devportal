<template>
<BaseContentLoader>
    <!--circle section-->
    <circle cx="20" cy="20" r="20" stroke-width="3" />
    <rect x="5%" ry="2" y="14" width="13%" height="5" />
    <rect x="5%" ry="2" y="25" width="10%" height="5" />

    <!--action rects-->
    <rect x="65%" ry="2" y="14" width="13%" height="5" />
    <rect x="65%" ry="2" y="25" width="10%" height="5" />
    <!--larg rects-->
    <rect x="10" ry="3" y="55" width="78%" height="40" />

    <rect x="10" ry="3" y="100" width="20%" height="30" />
    <rect x="59%" ry="3" y="100" width="20%" height="30" />
    <!--main rect-->
    <rect x="10" ry="3" y="150" width="78%" height="370" />
    <!--sidebar-->
    <rect x="80%" ry="3" y="20" width="23%" height="500" />
</BaseContentLoader>
</template>

<script>
import BaseContentLoader from "@/components/loaders/BaseContentLoader.vue";
export default {
  name: "InvoiceViewSkeleton",
  components:{BaseContentLoader}
}
</script>

<style scoped>

</style>