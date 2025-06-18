<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div
            class=" p-4 flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] rounded-xl w-96 gap-4">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold">Tạo nhóm</h1>
                <div @click="$emit('close_modal')" class="text-xl text-white cursor-pointer hover:brightness-90">
                    <Icon icon="material-symbols:close-rounded" />
                </div>
            </div>
            <div
                class="px-4 bg-[#333334] rounded-3xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200">
                <Icon icon="material-symbols:search-rounded" class="text-2xl" />
                <div class="flex items-center w-full gap-2 border-[#7c7c7c]">
                    <input type="text"
                        class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none"
                        placeholder="Tìm kiếm..." />
                </div>
            </div>
            <ul
                class="overflow-scroll flex flex-col gap-4 h-80 overflow-x-hidden scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent pr-2">
                <li v-for="i in 10" :key="i"
                    class="flex items-center justify-between transition-all duration-200 cursor-pointer hover:opacity-75">
                    <div class="flex items-center gap-2">
                        <img src="../assets/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                        <h1 class="font-medium ">Duong Dua</h1>
                    </div>
                    <Icon icon="material-symbols:add"
                        class="p-2 text-4xl transition-all duration-200 bg-[#333334] rounded-full hover:opacity-75" />
                </li>
            </ul>
            <div class="flex items-center justify-end">
                <button
                    class="hover:bg-green-500 transition-all duration-200 px-3 py-2 rounded-lg bg-[#333334] w-24 text-center"
                    @click="$emit('close_modal')">
                    Xác nhận
                </button>
            </div>
        </div>
    </div>
</template>