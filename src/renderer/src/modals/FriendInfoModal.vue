<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div
            class="p-4 flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] rounded-xl w-96 gap-4">
            <div class="flex justify-end">
                <div @click="$emit('close_modal')" class="text-xl text-white cursor-pointer hover:brightness-90">
                    <Icon icon="material-symbols:close-rounded" />
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col items-center gap-2">
                    <img src="../assets/avatar.jpg" alt="avatar" class="h-40 rounded-full">
                    <h1 class="text-2xl font-bold">Duong Dua</h1>
                </div>
                <div class="flex flex-col gap-2">
                    <button
                        class="w-full px-3 py-2 text-center transition-all duration-200 bg-red-500 rounded-lg hover:opacity-75"
                        @click="$emit('close_modal')">
                        Hủy kết bạn
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>