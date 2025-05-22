import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import axios from 'axios'
import router from './router'
import { loginStore } from './stores/login'

axios.defaults.baseURL = 'https://zany-adventure-4657pjx75wg3j74x-8080.app.github.dev'

axios.interceptors.request.use((config) => {
  const store = loginStore()
  if (store.token) {
    config.headers.Authorization = store.token
  }
  return config
})

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
registerPlugins(app)

app.mount('#app')
