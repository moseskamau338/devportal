<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-0 min-h-screen w-screen bg-white relative">
    <div class="w-full bg-[#A7E5EB]/60 lg:pl-8 hidden lg:block">
      <nav class="py-3">
        <img src="/images/logo-full.png" alt="Churpy full color logo" class="h-12 w-auto">
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">What we offer you</h1>
        <p class="mt-2 text-xl text-gray-600 pr-8">
          All our products are guaranteed to improve your productivity and save you a lot in costs in the long-run
        </p>

        <div id="sliders_area" class="mt-8 relative items-center justify-center">
          <img src="/images/pages/benefits.png" class="w-[60%] ml-10 shadow-xl" alt="">
          <img src="/images/pages/green-plant.png" class="absolute -right-2 h-48 -bottom-10" alt="">
        </div>
      </div>

       <div class="absolute bottom-0 pb-8 flex space-x-6">
        <span class="flex text-gray-700 hover:text-blue-500 cursor-pointer">
          <i class="fa-brands fa-twitter text-xl mr-2"></i>
          <h5 class="font-brand">ChurpyInc</h5>
        </span>
          <span class="flex text-gray-700 hover:text-blue-600 cursor-pointer">
          <i class="fa-brands fa-linkedin text-xl mr-2"></i>
          <h5 class="font-brand">ChurpyInc</h5>
        </span>
      </div>
    </div>
    <div class="w-full px-4 md:px-32">
      <nav class="flex justify-between lg:justify-end px-6 py-6">
        <img src="/images/logo-full.png" alt="Churpy full color logo" class="h-12 w-auto lg:hidden">
        <router-link :to="{name:'signup'}" class="font-bold hover:underline text-gray-700">Register</router-link>
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">Forgot password?</h1>
        <p class="mt-3 text-gray-500">Don't worry, it happens. Enter the address associated to your account below and we will sort you out.</p>


        <form class="mt-5">
          <div>
              <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
              <div class="mt-1">
                <input type="email" name="email" id="email" autocomplete="email" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400" placeholder="e.g email@company.com" />
              </div>
            </div>

          <div class="pt-8">
            <button type="button" class="inline-flex items-center px-8 py-1.5 text-md font-medium rounded bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">Confirm Account</button>
          </div>
        </form>

      </div>

      <div class="absolute bottom-0 pb-8">
        <p class="text-gray-500">Your data is protected by our <span class="text-churpy-green">Privacy Policy</span> and <span class="text-churpy-green">Terms and Conditions</span></p>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  name: "ForgotPassword",

}
</script>

<style scoped>

</style>