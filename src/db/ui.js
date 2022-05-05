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
        changeTheme(val){
            if (val === this.theme) return;
            if(!['dark','light','media'].includes(val)) return;
            this.theme = val;
        },
        toggleCollapse(){
            this.mainSidebarOpen = !this.mainSidebarOpen
        }
    }
})