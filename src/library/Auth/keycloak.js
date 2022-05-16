import Keycloak from 'keycloak-js';


export const initOptions = {
  url: 'http://localhost:3002/auth/',//import.meta.env.VITE_URL,
  realm: 'master',//import.meta.env.VITE_AUTH_REALM,
  clientId: 'churpy_recon',//import.meta.env.VITE_AUTH_CLIENTID,
  onLoad: 'login-required'
}

export const checkAuth = () => {
  return new Promise((resolve, reject)=>{
      keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
      //Token Refresh
        if (auth){
          setInterval(() => {
            keycloak.updateToken(70).then((refreshed) => {
              if (refreshed) {
                console.log('Token refreshed' + refreshed);
              } else {
                console.log('Token not refreshed, valid for '
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
              }
            }).catch(() => {
              keycloak.login()
            });
          }, 6000)
        }
      resolve(auth);
    }).catch(() => {
      console.log("Authentication Failed");
      reject(false)
    });
  })

}

export const keycloak = Keycloak(initOptions);

