import {useUiStore} from '@/db/ui'

const uiStore = useUiStore();
if(!localStorage.theme){
    localStorage.setItem('theme', 'light')
}
 uiStore.changeTheme(localStorage.theme)