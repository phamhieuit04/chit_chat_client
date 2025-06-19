<script setup>
import SidebarComponent from '../components/SidebarComponent.vue';
import ChatboxComponent from '../components/ChatboxComponent.vue';
</script>

<template>
    <div class="flex h-screen bg-[#19191a] gap-2 p-2 overflow-hidden">
        <SidebarComponent />
        <ChatboxComponent />
    </div>
</template>

<script>
export default {

}
</script>