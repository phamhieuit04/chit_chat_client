import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const socket = new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000'),
    options: {
        path: '/socket.io'
    }
})

const app = createApp(App)
app.use(socket)
app.use(router)
app.use(pinia)

app.mount('#app')
