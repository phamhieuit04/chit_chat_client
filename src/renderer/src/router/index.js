import { createWebHashHistory, createRouter } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import ChatboxComponent from '../components/ChatboxComponent.vue'

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
        path: '/index',
        component: IndexPage,
        name: 'IndexPage',
        children: [
            {
                path: 'chat/:id',
                component: ChatboxComponent,
                name: 'ChatboxComponent'
            }
        ],
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from) => {
//     if (to.meta.requiresAuth) {
//         return {
//             path: '/auth'
//         }
//     }
// })

export default router
