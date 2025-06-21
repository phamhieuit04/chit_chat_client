<script setup>
import SidebarComponent from '../components/SidebarComponent.vue';
</script>

<template>
    <div class="flex h-screen bg-[#19191a] gap-2 p-2 overflow-hidden">
        <SidebarComponent />
        <div class="flex flex-grow bg-[#252728] rounded-2xl text-white">
            <div v-show="$route.params.id == 0 || $route.params.id == null || $route.params.id == undefined"
                class="flex items-center justify-center flex-grow">
                <h1 class="text-3xl font-bold text-white">Xin chào Hiếu Phạm, chúc bạn ngày mới tốt lành!</h1>
            </div>
            <RouterView v-show="$route.params.id >= 1" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>