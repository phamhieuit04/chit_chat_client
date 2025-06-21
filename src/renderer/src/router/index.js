import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import ChatboxComponent from '../components/ChatboxComponent.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
    {
        path: '/',
        redirect: '/auth'
    },
    {
        path: '/auth',
        component: AuthPage,
        name: 'AuthPage'
    },
    {
        path: '/index/:user',
        component: IndexPage,
        name: 'IndexPage',
        children: [
            {
                path: 'chat/:id',
                component: ChatboxComponent,
                name: 'ChatboxComponent'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
