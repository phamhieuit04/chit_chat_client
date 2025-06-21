import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        setUser(user) {
            this.user = user
        }
    },
    persist: true
})

export { useAuthStore }
