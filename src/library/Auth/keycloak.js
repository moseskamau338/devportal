import Keycloak from 'keycloak-js';


export const initOptions = {
  url: import.meta.env.VITE_URL,
  realm: import.meta.env.VITE_AUTH_REALM,
  clientId: import.meta.env.VITE_AUTH_CLIENTID,
  onLoad: 'login-required'
}

export const keycloak = Keycloak(initOptions);

