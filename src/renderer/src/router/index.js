import { createWebHistory, createRouter } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import ChatboxComponent from '../components/ChatboxComponent.vue'
import AuthCallbackPage from '../pages/AuthCallbackPage.vue'

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
        path: '/auth/callback',
        component: AuthCallbackPage,
        name: AuthCallbackPage
    },
    {
        path: '/index',
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
