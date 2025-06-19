import { createMemoryHistory, createRouter } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import ChatboxComponent from '../components/ChatboxComponent.vue'

const routes = [
    {
        path: '/',
        component: IndexPage,
        name: 'IndexPage'
    },
    {
        path: '/chatbox/:id',
        component: ChatboxComponent,
        name: 'ChatboxComponent'
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})
