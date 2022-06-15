<template>
<div class="space-y-6 sm:space-y-3">
        <div>
          <p>These settings will help to guide the rules engine during reconciliation.</p>
        </div>
        <div class="space-y-4 sm:space-y-3">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
            <div>
              <label class="block text-sm font-medium text-gray-700 sm:mt-px"> Minimum Matches </label>
              <small><b>Current value:</b> 3</small>
            </div>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="number" class="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded" />
              <small class="text-xs">How many rules should successfully pass for it to be considered a match?</small>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
            <div>
              <label class="block text-sm font-medium text-gray-700 sm:mt-px"> Maximum Suggestions </label>
              <small><b>Current value:</b> 2</small>
            </div>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="number" name="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded" />
              <small class="text-xs">What should be the maximum number of suggestions under each entry?</small>
            </div>
          </div>


        </div>
      </div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>

</style>