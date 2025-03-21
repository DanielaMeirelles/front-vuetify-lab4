/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import axios from 'axios'

axios.defaults.baseURL = 'https://zany-adventure-4657pjx75wg3j74x-8080.app.github.dev'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
