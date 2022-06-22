import {useUiStore} from '@/db/ui'
import {useAuthStore} from '@/db/authentication'

useUiStore().init()

//authentication:
const authStore = useAuthStore()

authStore.init()
