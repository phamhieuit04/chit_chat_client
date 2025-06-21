<script setup>
import SidebarComponent from '../components/SidebarComponent.vue';
</script>

<template>
    <div class="flex h-screen bg-[#19191a] gap-2 p-2 overflow-hidden">
        <SidebarComponent />
        <div class="flex flex-grow bg-[#252728] rounded-2xl text-white">
            <div v-if="$route.params.id <= 0 || $route.params.id == null || $route.params.id == undefined"
                class="flex flex-col items-center justify-center flex-grow gap-4">
                <h1 class="text-3xl font-bold text-white">Xin chào {{ authStore.user.name }}, chúc bạn ngày mới tốt
                    lành!
                </h1>
                <pre class="text-xl">Token: {{ authStore.user.token }}</pre>
            </div>
            <RouterView v-else />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/auth';

export default {
    data() {
        return {
            authStore: useAuthStore(),
            userId: 0
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async getUser() {
            this.userId = window.location.pathname.split('/')[2]
            await axios.get('http://127.0.0.1:8000/api/auth/user', {
                params: {
                    user_id: this.userId
                }
            }).then((response) => {
                if (response.status == 200) {
                    this.authStore.setUser(response.data.data);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>