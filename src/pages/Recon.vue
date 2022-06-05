<template>
  <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
    <div class="bg-gradient-to-tr from-green-500 via-green-700 to-churpy-night/90 text-white md:col-span-3 lg:col-span-6 rounded shadow-md px-3 py-2">
      <div class="flex flex-row py-1 items-center">
        <span class="h-1 w-[30px] bg-white rounded-full"></span>
        <span class="h-1 w-[20px] bg-white rounded-full ml-1"></span>
        <h2 class="font-bold text-lg ml-2">Reconciliation</h2>
      </div>

      <div>

        <div class="flex">
          <div class="h-20 w-20 p-2 rounded-full flex items-center justify-center bg-white/60 ring-2 ring-offset-1 ring-green-300 flex-shrink-0">
            <img src="/images/pages/engine.png" class="w-14" alt="">
          </div>
          <p class="text-sm px-4">
            <b>Churpy’s Reconciliation Module</b> is one of a kind. It provides a robust
            <b>A.I driven</b> technology base to consume a vast variety of datasets and
            provide a clean result-set and <b>soothed conscience :)</b>
          </p>
        </div>
        <div class="mt-2 flex justify-end items-baseline space-x-2">
          <span class="underline font-semibold text-xs">View the documentation</span>
          <c-button variant="dark" class="items-center group">Reconciliation <span class="ml-2 group-hover:translate-x-0.5 transition-all">&rightarrow;</span></c-button>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-churpy-night-box md:col-span-3 lg:col-span-6 rounded px-3 py-2">
      <h3 class="font-bold text-lg">Rules Engine</h3>
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="text-xs lg:col-span-5">
          <h3 class="space-x-2">
            <span class="text-lg font-semibold">13</span>
            <span class="text-[10px]">Rules</span>
          </h3>
          <div class="flex items-baseline space-x-1">
              <dl class="text-[10px]">Active:</dl>
              <dd class="font-bold">4 (31%)</dd>
              <dl class="text-[10px]">Inactive:</dl>
              <dd class="font-bold">9 (69%)</dd>
          </div>
          <div id="progress" class="mt-5 flex space-x-2 relative w-[80%] rounded-full h-2">
              <tool-tip content="31%" style="width: 31%" class="h-2 rounded-full bg-green-500"></tool-tip>
            <tool-tip style="width: 69%" content="69%" class="h-2 rounded-full bg-orange-400"></tool-tip>
          </div>
          <!--Key-->
          <div class="flex space-x-2">
            <span class="flex items-center">
              <span class="text-5xl text-green-600">&bullet;</span>
              <span class="font-bold">Auto</span>
            </span>

            <span class="flex items-center">
              <span class="text-5xl text-orange-400">&bullet;</span>
              <span class="font-bold">Suggested Rules</span>
            </span>
          </div>



        </div>
        <div class="lg:col-span-7 relative">
          <p class="text-sm">
            <b>Rules</b> are an excellent way to instruct the reconciliation
            engine how to behave in certain scenarios. Think of it
            as a <b>learning experience</b>. The better the rules, the better
            the engine performs. <a href="#" class="text-green-600 hover:underline">Read more.</a>
          </p>

          <div class="flex justify-end my-2">
            <button class="border border-churpy-night bg-white text-churpy-night-box px-2 py-1 text-sm font-bold rounded flex items-center space-x-1 hover:bg-green-50 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="19.227" height="22" viewBox="0 0 19.227 22">
                <g id="Group_691" data-name="Group 691" transform="translate(0)">
                  <g id="Group_690" data-name="Group 690">
                    <g id="Group_688" data-name="Group 688" transform="translate(0.322 1.345)">
                      <path id="Path_224" data-name="Path 224" d="M53.9,32.27V50.682a.96.96,0,0,1-.96.96h-12.2a.96.96,0,0,1-.96-.96V32.27a.96.96,0,0,1,.96-.96h12.2a.96.96,0,0,1,.96.96Z" transform="translate(-39.773 -31.31)" fill="#eaf6ff"/>
                      <path id="Path_225" data-name="Path 225" d="M327.206,32.27V50.682a.96.96,0,0,1-.96.96h-.893a.96.96,0,0,0,.96-.96V32.27a.96.96,0,0,0-.96-.96h.893a.96.96,0,0,1,.96.96Z" transform="translate(-313.082 -31.31)" fill="#c8effe"/>
                      <path id="Path_226" data-name="Path 226" d="M272.527,202.031v6.9H269.17a.95.95,0,0,1-.823-1.425l2.942-5.1A.951.951,0,0,1,272.527,202.031Z" transform="translate(-258.402 -194.606)" fill="#c8effe"/>
                      <path id="Path_227" data-name="Path 227" d="M95.126,92.87h9.367v2.1H95.126Z" transform="translate(-92.748 -90.225)" fill="#ffd15b"/>
                      <path id="Path_228" data-name="Path 228" d="M290.983,92.87h.951v2.1h-.951Z" transform="translate(-280.189 -90.225)" fill="#ffc344"/>
                      <g id="Group_687" data-name="Group 687" transform="translate(2.378 6.947)">
                        <path id="Path_229" data-name="Path 229" d="M95.126,192.989h1.4v1.4h-1.4Z" transform="translate(-95.126 -192.989)" fill="#fd3581"/>
                        <path id="Path_230" data-name="Path 230" d="M95.126,270.742h1.4v1.4h-1.4Z" transform="translate(-95.126 -267.401)" fill="#fd3581"/>
                        <path id="Path_231" data-name="Path 231" d="M95.126,348.494h1.4v1.4h-1.4Z" transform="translate(-95.126 -341.812)" fill="#fd3581"/>
                        <path id="Path_232" data-name="Path 232" d="M95.126,426.247h1.4v1.4h-1.4Z" transform="translate(-95.126 -416.224)" fill="#fd3581"/>
                      </g>
                      <path id="Path_233" data-name="Path 233" d="M294.055,202.413l-2.942,5.1a.95.95,0,0,0,.823,1.425h5.884a.95.95,0,0,0,.823-1.425l-2.942-5.1A.95.95,0,0,0,294.055,202.413Z" transform="translate(-280.19 -194.606)" fill="#ffd15b"/>
                      <path id="Path_234" data-name="Path 234" d="M373.635,208.934h-.98a.95.95,0,0,0,.823-1.425l-2.942-5.1a.94.94,0,0,0-.333-.34.951.951,0,0,1,1.312.34l2.942,5.1A.95.95,0,0,1,373.635,208.934Z" transform="translate(-356.005 -194.607)" fill="#ffc344"/>
                    </g>
                    <g id="Group_689" data-name="Group 689" transform="translate(0)">
                      <path id="Path_235" data-name="Path 235" d="M87.949,88.113h9.367a.322.322,0,0,0,.322-.322v-2.1a.322.322,0,0,0-.322-.322H87.949a.322.322,0,0,0-.322.322v2.1A.322.322,0,0,0,87.949,88.113Zm.322-2.1h8.723v1.454H88.272Z" transform="translate(-85.248 -81.702)"/>
                      <path id="Path_236" data-name="Path 236" d="M89.347,185.489h-1.4a.322.322,0,0,0-.322.322v1.4a.322.322,0,0,0,.322.322h1.4a.322.322,0,0,0,.322-.322v-1.4A.322.322,0,0,0,89.347,185.489Zm-.322,1.4h-.753v-.753h.753Z" transform="translate(-85.248 -177.519)"/>
                      <path id="Path_237" data-name="Path 237" d="M158.008,186.134h2.685a.322.322,0,0,0,0-.645h-2.685a.322.322,0,0,0,0,.645Z" transform="translate(-152.297 -177.519)"/>
                      <path id="Path_238" data-name="Path 238" d="M89.347,263.241h-1.4a.322.322,0,0,0-.322.322v1.4a.322.322,0,0,0,.322.322h1.4a.322.322,0,0,0,.322-.322v-1.4A.322.322,0,0,0,89.347,263.241Zm-.322,1.4h-.753v-.753h.753Z" transform="translate(-85.248 -251.93)"/>
                      <path id="Path_239" data-name="Path 239" d="M158.008,263.886h2.685a.322.322,0,1,0,0-.645h-2.685a.322.322,0,1,0,0,.645Z" transform="translate(-152.297 -251.93)"/>
                      <path id="Path_240" data-name="Path 240" d="M89.347,340.994h-1.4a.322.322,0,0,0-.322.322v1.4a.322.322,0,0,0,.322.322h1.4a.322.322,0,0,0,.322-.322v-1.4A.322.322,0,0,0,89.347,340.994Zm-.322,1.4h-.753v-.753h.753Z" transform="translate(-85.248 -326.342)"/>
                      <path id="Path_241" data-name="Path 241" d="M158.008,341.639h2.685a.322.322,0,1,0,0-.645h-2.685a.322.322,0,1,0,0,.645Z" transform="translate(-152.297 -326.342)"/>
                      <path id="Path_242" data-name="Path 242" d="M89.347,418.747h-1.4a.322.322,0,0,0-.322.322v1.4a.322.322,0,0,0,.322.322h1.4a.322.322,0,0,0,.322-.322v-1.4A.322.322,0,0,0,89.347,418.747Zm-.322,1.4h-.753v-.753h.753Z" transform="translate(-85.248 -400.754)"/>
                      <path id="Path_243" data-name="Path 243" d="M158.008,418.747a.322.322,0,0,0,0,.645h2.685a.322.322,0,0,0,0-.645Z" transform="translate(-152.297 -400.754)"/>
                      <path id="Path_244" data-name="Path 244" d="M51.325,14.087l-2.942-5.1a1.28,1.28,0,0,0-1.343-.613V2.305a1.284,1.284,0,0,0-1.282-1.282h-1.1v-.7a.322.322,0,0,0-.645,0v.7H35.294v-.7a.322.322,0,0,0-.645,0v.7h-1.1a1.284,1.284,0,0,0-1.282,1.282V20.718A1.284,1.284,0,0,0,33.553,22h12.2a1.284,1.284,0,0,0,1.282-1.282V16h3.184a1.272,1.272,0,0,0,1.1-1.908ZM46.4,20.718a.639.639,0,0,1-.638.638h-12.2a.639.639,0,0,1-.638-.638V2.305a.639.639,0,0,1,.638-.638h1.1v.7a.322.322,0,1,0,.645,0v-.7h8.723v.7a.322.322,0,1,0,.645,0v-.7h1.1a.639.639,0,0,1,.638.638V8.713a1.293,1.293,0,0,0-.216.278l-2.942,5.1A1.272,1.272,0,0,0,44.339,16H46.4v4.722Zm4.372-5.681a.621.621,0,0,1-.544.314H44.339a.628.628,0,0,1-.544-.942l2.942-5.1a.628.628,0,0,1,1.087,0l2.942,5.1A.621.621,0,0,1,50.767,15.037Z" transform="translate(-32.271 0)"/>
                      <path id="Path_245" data-name="Path 245" d="M374.421,246.376a.322.322,0,0,0,.322-.322v-2.246a.322.322,0,0,0-.645,0v2.246A.322.322,0,0,0,374.421,246.376Z" transform="translate(-359.411 -233.023)"/>
                      <path id="Path_246" data-name="Path 246" d="M163.633,218.013h-5.625a.322.322,0,0,0,0,.645h5.625a.322.322,0,1,0,0-.645Z" transform="translate(-152.297 -208.645)"/>
                      <path id="Path_247" data-name="Path 247" d="M158.008,296.41h3.9a.322.322,0,1,0,0-.645h-3.9a.322.322,0,1,0,0,.645Z" transform="translate(-152.297 -283.056)"/>
                      <path id="Path_248" data-name="Path 248" d="M162.758,373.84a.322.322,0,0,0-.322-.322h-4.427a.322.322,0,0,0,0,.645h4.427A.322.322,0,0,0,162.758,373.84Z" transform="translate(-152.297 -357.468)"/>
                      <path id="Path_249" data-name="Path 249" d="M163.633,451.271h-5.625a.322.322,0,1,0,0,.645h5.625a.322.322,0,0,0,0-.645Z" transform="translate(-152.297 -431.88)"/>
                      <circle id="Ellipse_54" data-name="Ellipse 54" cx="0.322" cy="0.322" r="0.322" transform="translate(14.688 13.93)"/>
                    </g>
                  </g>
                </g>
              </svg>
              <span>Configure Rules</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <section class="bg-white dark:bg-churpy-night-box shadow-md rounded w-full h-full mt-8 p-4">
    <header class="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 class="font-bold text-lg">Reconciliation Summary</h2>
      <span>
        <litepie-datepicker class="md:w-[250px]" v-model="period" />
      </span>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-5 px-4">
          <h3 class="font-bold text-gray-500 mt-4">Totals</h3>
        <div class="flex space-x-8 mt-2">
          <dl>
            <dt class="text-xs md:text-md font-light">SSPASS</dt>
            <dd class="text-lg md:text-3xl font-light">KSH 1.902B</dd>
          </dl>

          <dl>
            <dt class="text-xs md:text-md font-light">Bank Statements</dt>
            <dd class="text-lg md:text-3xl font-light">KSH 1.932B</dd>
          </dl>
        </div>

      <!--chart-->
        <div class="w-full mt-2 mr-8">
          <ApexChart />
        </div>


      </div>
      <div class="col-span-7 grid grid-cols-1 md:grid-cols-2 border-l border-l-gray-400 px-5 mt-4 pb-5">
        <div class="col-span-1 px-2 border lg:border-none rounded">
          <h2 class="font-semibold mb-2 shadow-xl p-2">SSPASS Breakdown</h2>

          <div class="flex flex-col space-y-5 max-h-72 overflow-y-auto">
            <div :key="index" v-for="(status, index) in status_summary">
              <header class="flex space-x-2">
                <span :class=" status.color " class="h-6 w-6 rounded-full flex items-center justify-center">
                  <i :class="status.icon" class="fa-solid text-sm text-white"></i>
                </span>
                <h4 class="font-semibold"> {{ status.title }}</h4>
              </header>
              <div class="mt-2 pl-4 mr-5">
                <div class="flex flex-col">
                  <span>Ksh {{ status.amount }}</span>
                  <span>Records: <span class="font-semibold">{{ status.records }}</span></span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <tool-tip :content="`${status.percentage}%`">
                    <div :class="status.color" class="h-2.5 rounded-full" :style="`width: ${status.percentage}%`"></div>
                  </tool-tip>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 px-2 border lg:border-none rounded mt-5 md:ml-2 md:mt-0">
          <h2 class="font-semibold mb-2 shadow-xl p-2">Bank Records Breakdown</h2>
          <div class="flex flex-col space-y-5 max-h-72 overflow-y-auto">
            <div :key="index" v-for="(status, index) in status_summary">
              <header class="flex space-x-2">
                <span :class=" status.color " class="h-6 w-6 rounded-full flex items-center justify-center">
                  <i :class="status.icon" class="fa-solid text-sm text-white"></i>
                </span>
                <h4 class="font-semibold"> {{ status.title }}</h4>
              </header>
              <div class="mt-2 pl-4 mr-5">
                <div class="flex flex-col">
                  <span>Ksh {{ status.amount }}</span>
                  <span>Records: <span class="font-semibold">{{ status.records }}</span></span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <tool-tip :content="`${status.percentage}%`">
                    <div :class="status.color" class="h-2.5 rounded-full" :style="`width: ${status.percentage}%`"></div>
                  </tool-tip>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>

</template>

<script>
import LitepieDatepicker from 'litepie-datepicker-tw3';
import CButton from "@/components/parts/CButton.vue";
import ToolTip from "@/components/parts/ToolTip.vue";
import {ref} from "vue";
import ApexChart from "@/components/widgets/ApexChart.vue";

export default {
  components: {ApexChart, ToolTip, CButton, LitepieDatepicker},
  setup(){
    const period = ref({})
    const status_summary = ref([
      {title:'Automatic Reconciliations', color:'bg-churpy-green', icon:'fa-bolt', percentage:32,amount:23456124, records:3456},
      {title:'Suggested Matches', color:'bg-orange-400', icon:'fa-list-check', percentage:12,amount:120000, records:650},
      {title:'Manual Matches', color:'bg-churpy-dark dark:bg-gray-500', icon:'fa-hammer', percentage:6,amount:49000, records:67},
      {title:'Pending Records', color:'bg-red-400', icon:'fa-exclamation', percentage:9,amount:56000, records:400},
    ])

    return {period, status_summary}
  }
}
</script>