<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div
            class=" p-4 flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] rounded-xl w-[500px] gap-4">
            <div class="flex justify-end">
                <div @click="$emit('close_modal')" class="text-xl text-white cursor-pointer hover:brightness-90">
                    <Icon icon="material-symbols:close-rounded" />
                </div>
            </div>
            <div class="flex items-center gap-4">
                <img src="../assets/avatar.jpg" alt="avatar" class="h-16 rounded-full">
                <div>
                    <h1 class="text-xl">
                        <strong>Duong Dua</strong>
                        đã gửi lời mời kết bạn!
                    </h1>
                    <p class="text-base opacity-75">1 giờ</p>
                </div>
            </div>
            <div class="flex items-center justify-end gap-2">
                <button
                    class="w-24 px-3 py-2 text-center transition-all duration-200 bg-red-500 rounded-lg hover:opacity-75"
                    @click="$emit('close_modal')">
                    Từ chối
                </button>
                <button
                    class="hover:bg-green-500 transition-all duration-200 px-3 py-2 rounded-lg bg-[#333334] w-24 text-center"
                    @click="$emit('close_modal')">
                    Đồng ý
                </button>
            </div>
        </div>
    </div>
</template>