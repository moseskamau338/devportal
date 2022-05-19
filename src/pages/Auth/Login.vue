<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-0 min-h-screen w-screen bg-white relative">
    <div class="w-full bg-[#A7E5EB]/60 lg:pl-8 hidden lg:block">
      <nav class="py-3">
        <img src="/images/logo-full.png" alt="Churpy full color logo" class="h-12 w-auto">
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">All-in-one workbench</h1>
        <p class="mt-2 text-xl text-gray-600 pr-8">
          <span class="font-brand">Churpy</span> now provides you with an elegant way to customize your dashboard metrics and make the best of our analytics capabilities
        </p>
        
        <div id="sliders_area" class="mt-8 relative items-center justify-center">
          <img src="/images/pages/dashboard1.png" class="w-[80%] shadow-xl" alt="">
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
        <a href="/auth/signup" class="font-bold hover:underline text-gray-700">Register</a>
      </nav>

      <div class="mt-4">
        <h1 class="font-bold text-2xl text-gray-700">Sign in to Churpy</h1>
        <div class="flex lg:space-x-6 flex-col space-y-3 lg:flex-row text-gray-500">
          <button class="bg-white px-2 flex flex-row items-center border py-1.5 mt-4 rounded text-md shadow-md space-x-2">
            <img src="/images/brands/google-icon.svg" alt="google logo" class="h-6 w-auto mr-3" />
            Sign in with Google
          </button>

          <button class="bg-blue-500 text-white px-2 flex flex-row items-center border py-1.5 mt-4 rounded text-md shadow-md space-x-2">
           <i class="fa-brands fa-linkedin text-xl mr-3"></i>
            Sign in with Linked In
          </button>
        </div>

        <div class="mt-4">
          <div class="relative flex py-1 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">Or signin with your email</span>
              <div class="flex-grow border-t border-gray-400"></div>
          </div>
        </div>

        <form class="space-y-3">
          <div>
              <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
              <div class="mt-1">
                <input type="email" name="email" id="email" autocomplete="email" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="e.g email@company.com" />
              </div>
            </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input type="password" name="password" id="password" autocomplete="password" class="shadow-sm focus:ring-churpy-green focus:border-churpy-green block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-400 text-gray-500" placeholder="******" />
            </div>
          </div>

          <div>
           <p class="text-gray-500"> Forgot your password?
             <span class="text-indigo-600 underline">Reset it here</span>
           </p>
          </div>

          <div class="pt-8">
            <button type="button" class="inline-flex items-center px-8 py-1.5 text-md font-medium rounded bg-gradient-to-br from-churpy-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-churpy-green transition-all h-fit">Sign In</button>
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
  name: "Login",

}
</script>

<style scoped>

</style>