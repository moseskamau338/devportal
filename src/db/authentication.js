import CryptoJS from 'crypto-js'
import aes from 'crypto-js/aes';
import {instance, parseError} from "@/library/Auth/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    persist: {enabled:true},
    state: ()=>{
        return {
              token: '',
              user: '',
              password_reset_token:'',
        }
    },
    actions: {
        init(){
            if (router.currentRoute.value.matched.some(record => record.meta.requiresAuth)) {
                if (this.token.length){
                    this.refreshToken()
                }else{this.signout()}
            }
        },
        login(credentials){
            return new Promise((resolve, reject) => {
                instance({
                    url:'/auth/login/',
                    method:'POST',
                    data:credentials
                }).then(({data}) => {
                    console.log('Results: ', data)
                    resolve(data)
                }).catch((error)=>{
                    reject(parseError(error))
                })
            })
        },
        refreshToken(){
            //Set refresh token interval
            //Token Refresh
            setInterval(() => {
            	if(this.token.length){
                  console.log('Token exists')
                  instance({
                      url:'/auth/token/refresh/',
                      method: 'POST',
                      data: {refresh: `${this.decrypt(this.token).refresh}`}
                  })
                  .then(({data})=>{
                      console.log('Responded: ', data)
                      instance.defaults.headers.common = {'Authorization': `Bearer ${data.access}`}
                  })
                  .catch((error)=>{
                      this.signout()
                  })

             }else {
                    this.signout()
            	}
              }, 6000)
        },
        setToken(token){
            let cipher = this.encrypt(
                typeof token === 'object' ? JSON.stringify(token) : token
            )
            this.token = cipher
            console.log('setting token', cipher, this.decrypt(cipher))
        },
        encrypt(value){
            return aes.encrypt(value, import.meta.env.VITE_PWD).toString()
        },
        decrypt(ciphertext){
            console.log('Decrypting: ', ciphertext)
            let deciphered = aes.decrypt(ciphertext, import.meta.env.VITE_PWD)
                .toString(CryptoJS.enc.Utf8)

            try {
                return JSON.parse(deciphered);
            }catch{
                return deciphered;
            }

        },
        signout(){
            this.token = '';
            //router.push({name: 'login'})
            if (router.currentRoute.value.matched.some(record => record.meta.requiresAuth)) {
                console.log('Requires auth')
            	router.push({name: 'login'})
            }
        },
    }
})