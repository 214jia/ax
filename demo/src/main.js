import { createApp } from 'vue'
import './style.css'
import App from './store/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/mockServer.js'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
