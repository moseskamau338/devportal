<template>
  <section class="border border-gray-300 focus-within:ring focus-within:ring-green-500 bg-white dark:bg-churpy-night-box dark:text-gray-300 rounded shadow-md">
    <div class="px-5 border-b border-t mx-4 my-2 py-2 flex items-center space-x-2">
      <template :key="index" v-for="(menu, index) in menus">
        <span v-if="menu.breakpoint">
          <i class="fa-duotone opacity-50 fa-pipe"></i>
        </span>
        <span :title="menu.name" v-else-if="editor" @click="menu.action" class="cursor-pointer hover:font-bold text-gray-500 dark:text-gray-600 hover:bg-gray-200 h-8 w-8 p-2 flex items-center justify-center rounded-full transition-all"
        :class="{'bg-gray-200' : editor.isActive(menu.name.toLowerCase())}"
        >
          <i class="fa-solid text-sm" :class="[
              menu.icon,
              editor.isActive(menu.name.toLowerCase())? 'font-semibold' : 'font-light'
              ]"></i>
        </span>

      </template>
        <!--Popup forms-->
        <form v-if="linkForm.show" @submit.prevent class="absolute mt-32 z-50 border shadow-lg rounded bg-white dark:bg-churpy-night-box px-3 py-3">
          <!--Link form-->
          <small class="text-xs font-semibold">Set link</small>
           <input type="text" v-model="linkForm.url" name="url" class="mt-2 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded placeholder-gray-400 leading-none text-xs py-0.5" placeholder="URL" />
            <div class="mt-4 flex justify-end">
              <c-button @click="() => {if(linkForm.url.length > 0){
                editor.commands.setLink({ href: linkForm.url }); linkForm.show=false;}}" class="py-0.5" variant="success">Save</c-button>
            </div>
        </form>
    </div>
    <editor-content :editor="editor"></editor-content>
  </section>
</template>

<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'

import {onBeforeUnmount, ref, watch} from "vue";
import {TextAlign} from "@tiptap/extension-text-align";
import CButton from "@/components/parts/CButton.vue";
export default {
name: "Editor",
  components:{
    CButton,
    EditorContent
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  setup(props, {emit}){
   const editor = useEditor({
      content: props.modelValue,
     editorProps: {
        attributes: {
          class: 'prose prose-slate focus:outline-none px-4 py-2',
        },
      },
      extensions: [
          Underline, Link.configure({
            HTMLAttributes: {
              class: 'text-green-600',
            },
          }),
          StarterKit, TextAlign.configure({alignments: ['left', 'center', 'right']
   })
      ],
      onUpdate: () => {
        // HTML
        emit('update:modelValue', editor.value.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
     const menus = ref([
      {icon:'fa-bold', name:'Bold', action:() => {editor.value.chain().focus().toggleBold().run()}},
      {icon:'fa-italic', name:'Italic', action:() => {editor.value.chain().focus().toggleItalic().run()}},
      {icon:'fa-underline', name:'Underline', action:() => { editor.value.commands.toggleUnderline() }},
      {icon:'fa-link-simple', name:'Link', action:() => { setLink() }},
      {icon:'fa-link-simple-slash', name:'Link', action:() => { editor.value.chain().focus().unsetLink().run() }},
      {icon:'fa-strikethrough', name:'Strike', action:() => { editor.value.commands.toggleStrike() }},
      {breakpoint: true},
      {icon:'fa-align-left', name:'text-left', action:() => { editor.value.commands.setTextAlign('left') }},
      {icon:'fa-align-center', name:'text-center', action:() => { editor.value.commands.setTextAlign('center') }},
      {icon:'fa-align-right', name:'text-right', action:() => { editor.value.commands.setTextAlign('right') }},
    ])
    let linkForm = ref({
      show:false,
      text:'',
      url:''
    })

    const getSelectedText = () => {
        const { from, to, empty } = editor.value.state.selection

        if (empty) {
            return null
        }

        return editor.value.state.doc.textBetween(from, to, ' ')
    }
    const setLink = () =>{
       linkForm.value.text = getSelectedText()

      if (linkForm.value.text){
        linkForm.value.show = true
      }
    }


    watch(() => props.modelValue, (newValue) => {
        // HTML
        const isSame = editor.value.getHTML() === newValue

        // JSON
        // const isSame = JSON.stringify(editor.value.getJSON()) === JSON.stringify(newValue)
        if (isSame) {return}

        editor.value.commands.setContent(newValue, false)
    });

    onBeforeUnmount(() => {
      editor.value.destroy()
    })

    return {editor, menus, linkForm}
  }
}
</script>

<style scoped>

</style>