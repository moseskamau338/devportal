import Keycloak from 'keycloak-js';

export const initOptions = {
  url: 'http://localhost:3002/auth/',//import.meta.env.VITE_URL,
  realm: 'master',//import.meta.env.VITE_AUTH_REALM,
  clientId: 'churpy_recon',//import.meta.env.VITE_AUTH_CLIENTID,
  onLoad: 'check-sso',//'login-required',check-sso
}

export const keycloak = Keycloak(initOptions);
export const checkAuth = () => {
  return keycloak.authenticated
}


