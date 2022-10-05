import {defineStore} from "pinia";
import {groupBy} from "lodash";


export const useServiceStore = defineStore('serviceStore', {
    persist: {enabled:false},
    state: ()=>{
        return {
            services: [
                  {
                    Provider: "CITI Bank",
                    ServiceType: "APIs",
                    Services: [
                      {
                        Name: "Notifications",
                        Status: "online"
                      },
                      {
                        Name: "Full Statement",
                        Status: "online"
                      },
                      {
                        Name: "Balance",
                        Status: "online"
                      }
                    ]
                  },
                  {
                    Provider: "Co-operative Bank",
                    ServiceType: "APIs",
                    Services: [
                      {
                        Name: "Notifications",
                        Status: "online"
                      },
                      {
                        Name: "Full Statement",
                        Status: "online"
                      },
                      {
                        Name: "Mini Statement",
                        Status: "online"
                      },
                      {
                        Name: "Balance",
                        Status: "online"
                      }
                    ]
                  },
                  {
                    Provider: "NCBA Bank",
                    ServiceType: "APIs",
                    Services: [
                      {
                        Name: "Notifications",
                        Status: "offline"
                      },
                      {
                        Name: "Balance",
                        Status: "online"
                      },
                      {
                        Name: "Virtual Accounts",
                        Status: "online"
                      }
                    ]
                  },
                  {
                    Provider: "Equity Bank",
                    ServiceType: "APIs",
                    Services: [
                      {
                        Name: "Notifications",
                        Status: "online"
                      },
                      {
                        Name: "Full Statement",
                        Status: "online"
                      },
                      {
                        Name: "Mini Statement",
                        Status: "online"
                      },
                      {
                        Name: "Balance",
                        Status: "online"
                      }
                    ]
                  },
                  {
                    Provider: "Bank as Statements",
                    ServiceType: "Models",
                    Services: [
                      {
                        Name: "Chase Bank",
                        Status: "online"
                      },
                      {
                        Name: "DCU Bank",
                        Status: "online"
                      }
                    ]
                  }
                ],
            selectedServices:[],
          actual_services:[],
        }
    },
  actions:{
      getServices(){
               if (this.services.length > 0){
                 return this.services.map((item) => {
                     return {
                       id: item.Provider,
                       label: item.Provider,
                       children: item.Services.map((api) => {
                         return {id: item.Provider + '_' + api.Name, label: api.Name}
                       })
                     }
                   });
               }else{
                  return [];
               }

          },
       handleSelect(selectedNodes) {
         if(selectedNodes.length > 0){
             let newValue;
              let raw = selectedNodes.map((node)=>{
                    const { parentNode } = node;
                    newValue = {
                          bank_id: parentNode.id,
                          bank_name:parentNode.label,
                          bank_apis:[{service_id:node.id.split('_')[1],}]
                        }
                    // this.actual_services.push(newValue)
                       return newValue;
            })
               this.actual_services = this.transformer([...new Set(raw)])
         }else if(selectedNodes.length <= 0){
           this.actual_services = []
         }
     },
      transformer(nodes){
            let newNodes = JSON.parse(JSON.stringify(nodes))
              let groups = groupBy(newNodes,'bank_id')
              let groupNames = Object.keys(groups)
              let newRecords = []
               for (let i = groupNames.length - 1; i >= 0; i--) {
                    //console.log("Current group: ",groupNames[i])
                    if (groups[groupNames[i]].length > 1) {
                        let first = groups[groupNames[i]][0]
                        for (let k = groups[groupNames[i]].length - 1; k >= 1; k--) {
                            first.bank_apis.push(groups[groupNames[i]][k].bank_apis[0])
                            first.bank_apis = [...new Set(first.bank_apis)]
                        }
                        newRecords.push(first)
                         //console.log(first)
                    }else{
                        newRecords.push(groups[groupNames[i]][0])
                         //console.log('No multiple items for: ',groupNames[i])
                    }
              }

               return newRecords
           },
  }
})