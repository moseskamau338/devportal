import { defineStore } from "pinia";
/*
* This store only holds light table configurations
* */
export const useTableStore = defineStore('tableStore', {
    persist: {enabled:true},
    state: ()=>{
        let common_fields = [
              {key:'date', label:'Date', type:'date', query:null},
              {key:'currency', label:'Currency', type:'select', options:['KES','USD'], query:null},
              {key:'amount', label:'Amount', type:'number',query:null},
              {key:'reconciled_amount', label:'Reconciled Amount', type:'number',query:null},
              {key:'gl_account', label:'GL/Bank Account', type:'text',query:null},
              {key:'customer', label:'Customer', type:'text',query:null},
              {key:'recon_status', label:'Recon. Status', type:'text',query:null},
              {key:'source', label:'Source', type:'text',query:null},
        ]
        return {
            invoice_fields: [
                  {key:'invoice_ref', label:'Invoice/Bank Ref', type:'text',selectable:true,query:null},
                ...common_fields
                ],
            transaction_fields:[
                  {key:'transaction_ref', label:'Transaction Ref.', type:'text',selectable:true,query:null},
                ...common_fields
            ]
        }
    },
})