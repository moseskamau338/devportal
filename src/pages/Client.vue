<template>
  <Suspense>
    <template #default>
      <MarketplaceClient />
    </template>

    <template #fallback>
      <MarketplaceGeneralSkeleton />
    </template>
  </Suspense>
</template>

<script>

import MarketplaceClient from "@/components/widgets/MarketplaceClient.vue";
import MarketplaceGeneralSkeleton from "@/components/loaders/MarketplaceGeneralSkeleton.vue";
export default {
  name:'Client',
  components:{MarketplaceGeneralSkeleton, MarketplaceClient}
}
</script>
