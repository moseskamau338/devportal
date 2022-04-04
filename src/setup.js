import {useUiStore} from '@/db/ui'

const uiStore = useUiStore();
if(!(localStorage.uiStore && localStorage.uiStore.theme)){
    localStorage.setItem('uiStore',{theme:''})
}
 uiStore.changeTheme(localStorage.uiStore.theme)