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
            if (theme === 'dark'){
                document.documentElement.classList.add(theme)
            }else{
                document.documentElement.classList.remove('dark')
            }
        },
        toggleCollapse(){
            this.mainSidebarOpen = !this.mainSidebarOpen
        }
    }
})