import {useUiStore} from '@/db/ui'

const uiStore = useUiStore();
if(!(localStorage.uiStore && localStorage.uiStore.theme)){
    localStorage.setItem('uiStore',JSON.stringify({theme:''}))
}
 uiStore.changeTheme(localStorage.uiStore.theme)