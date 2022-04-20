import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from './config'
axios.get(config.mockApi + '/login').then((res)=>{
  console.log(res);
})

console.log(import.meta.env);


const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
