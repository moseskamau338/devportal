import axios from 'axios'
/*@axios main instance
* You can add authentication to this instance and share it across the app
* */
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});
