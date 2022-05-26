<template>
  <Suspense>
    <template #default>
      <invoice-details />
    </template>

    <template #fallback>
      <InvoiceViewSkeleton />
    </template>
  </Suspense>
</template>

<script>

import InvoiceViewSkeleton from "@/components/loaders/InvoiceViewSkeleton.vue";
import InvoiceDetails from "@/components/page/InvoiceDetails.vue";

export default {
  name:'Client',
  components:{InvoiceDetails, InvoiceViewSkeleton},
}
</script>
