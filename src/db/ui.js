import { defineStore } from "pinia";

export const useUiStore = defineStore('uiStore', {
    persist: {enabled:true},
    state: ()=>{
        return {
            theme: 'dark'
        }
    },
    actions:{
        changeTheme(val){
            if (val === this.theme) return;
            if(!['dark','light','media'].includes(val)) return;
            this.theme = val;
        }
    }
})