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
                    <h1 class="text-2xl font-bold">Tên nhóm</h1>
                    <div
                        class="px-4 bg-[#333334] rounded-2xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200 w-full border-[#7c7c7c]">
                        <input type="text" id="input_name"
                            class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none text-base"
                            placeholder="Nhập tên mới..." />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h1 class="text-lg">Thành viên nhóm:</h1>
                    <ul
                        class="flex flex-col gap-3 overflow-scroll overflow-x-hidden h-52 scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent pr-2">
                        <li v-for="i in 5" :key="i" class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <img src="../assets/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                                <h1 class="font-medium">Hieu Pham</h1>
                            </div>
                            <div
                                class="bg-[#333334] p-2 rounded-full cursor-pointer text-red-500 hover:opacity-75 transition-all duration-200">
                                <Icon icon="material-symbols:delete" class="text-xl" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-2">
                    <button
                        class="w-full px-3 py-2 text-center transition-all duration-200 bg-red-500 rounded-lg hover:opacity-75"
                        @click="$emit('close_modal')">
                        Xóa nhóm
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>