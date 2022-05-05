import { defineStore } from "pinia";

export const useUiStore = defineStore('uiStore', {
    persist: {enabled:true},
    state: ()=>{
        return {
            theme: false,
            mainSidebarOpen: true,
        }
    },
    actions:{
        init(){
            this.changeTheme(this.theme? 'dark' : 'light');
        },
        changeTheme(theme){
            console.log('Setting changed theme: ', this.theme)
            if (theme === 'dark'){
                console.log('Adding DARK mode')
                document.documentElement.classList.add(theme)
            }else{
                console.log('Adding LIGHT mode')
                document.documentElement.classList.remove('dark')
            }
        },
        toggleCollapse(){
            this.mainSidebarOpen = !this.mainSidebarOpen
        }
    }
})