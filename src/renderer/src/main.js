import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'
import App from './App.vue'

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

app.mount('#app')
