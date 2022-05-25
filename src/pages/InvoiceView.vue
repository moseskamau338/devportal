<template>
  <Suspense>
    <template #default>
      <section class="bg-white dark:bg-churpy-night-box grid grid-cols-6 p-4 rounded">
        <div class="col-span-4">
          HJshbhsb
        </div>
        <div class="col-span-2 rounded-md bg-gray-100 border border-2 border-gray-400 dark:bg-churpy-dark dark:border-gray-500 border-dashed p-2">
          <header class="flex justify-between items-center">
            <div class="space-x-2">
              <Badge status="USER" />
              <span class="text-churpy-green">Invoice Reconciled</span>
            </div>
          <dropdown name="Create adjustment" :options="[
              {name:'Raise Credit Note'},
              {name:'Raise Debit Note'},
          ]" />
          </header>
          <div id="inv_details" class="mt-6">
            <h2 class="underline">Counterparty address</h2>
            <div class="flex space-x-12 mt-2 px-4">
              <dl>
                <dt><small>Issued by:</small></dt>
                <dd>Company X Ltd</dd>
                <dt><small class="text-gray-500">Street XYZ,</small></dt>
                <dt><small class="text-gray-500">Nairobi, Kenya</small></dt>
              </dl>

              <dl>
                <dt><small>Issued to:</small></dt>
                <dd>Client Y Ventures</dd>
                <dt><small class="text-gray-500">Capital J Hill,</small></dt>
                <dt><small class="text-gray-500">Nairobi, Kenya</small></dt>
              </dl>
            </div>
          </div>

          <!--timeline-->
          <div class="mt-3">
            <h2 class="font-bold">History</h2>
          </div>
        </div>
      </section>
    </template>

    <template #fallback>
      <MarketplaceGeneralSkeleton />
    </template>
  </Suspense>
</template>

<script>

import MarketplaceClient from "@/components/widgets/MarketplaceClient.vue";
import MarketplaceGeneralSkeleton from "@/components/loaders/MarketplaceGeneralSkeleton.vue";
import Badge from "@/components/parts/Badge.vue";
import CButton from "@/components/parts/CButton.vue";
import Dropdown from "@/components/parts/Dropdown.vue";
export default {
  name:'Client',
  components:{Dropdown, CButton, Badge, MarketplaceGeneralSkeleton, MarketplaceClient}
}
</script>
