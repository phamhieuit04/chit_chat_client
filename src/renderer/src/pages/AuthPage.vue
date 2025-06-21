<template>
    <div class="flex items-center justify-center h-screen bg-[#252728] select-none">
        <div
            class="py-4 px-4 flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] rounded-xl w-96 gap-4">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col items-center gap-2">
                    <img src="../assets/logo.webp" alt="logo" class="h-32">
                    <h1 class="text-3xl font-bold">Xin chào!</h1>
                </div>
                <div class="flex flex-col gap-2">
                    <button @click="signIn()"
                        class="flex gap-4 px-5 py-4 transition-all duration-200 border border-gray-300 rounded-2xl hover:bg-green-500 hover:border-transparent">
                        <img class="w-8" src="../assets/google.png" alt="google icon">
                        <p class="text-xl">Tiếp tục với Google</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        async signIn() {
            await axios.get('http://127.0.0.1:8000/api/auth/redirect').then((response) => {
                if (response.status == 200) {
                    window.location.assign(response.data.data.url);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>