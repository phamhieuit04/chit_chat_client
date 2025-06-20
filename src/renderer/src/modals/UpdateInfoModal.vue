<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div
            class=" p-4 flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] rounded-xl w-[550px] gap-6">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold">Cập nhật thông tin</h1>
                <div @click="$emit('close_modal')" class="text-xl text-white cursor-pointer hover:brightness-90">
                    <Icon icon="material-symbols:close-rounded" />
                </div>
            </div>
            <div class="flex gap-4">
                <div class="flex flex-col gap-2">
                    <img src="../assets/avatar.jpg" alt="avatar" class="rounded-full h-52">
                    <button
                        class="bg-[#333334] py-2 hover:bg-green-500 transition-all duration-200 rounded-2xl font-semibold text-lg">Tải
                        ảnh</button>
                </div>
                <div class="flex flex-col flex-grow gap-4">
                    <div class="flex flex-col gap-2.5">
                        <div class="flex flex-col gap-1">
                            <label for="input_name"
                                class="text-lg font-medium transition-all duration-200 cursor-pointer hover:opacity-75">Tên
                                mới:</label>
                            <div
                                class="px-4 bg-[#333334] rounded-2xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200 w-full border-[#7c7c7c]">
                                <input type="text" id="input_name"
                                    class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none text-base"
                                    placeholder="Nhập tên..." />
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="input_password"
                                class="text-lg font-medium transition-all duration-200 cursor-pointer hover:opacity-75">Mật
                                khẩu mới:</label>
                            <div
                                class="px-4 bg-[#333334] rounded-2xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200 w-full border-[#7c7c7c]">
                                <input type="text" id="input_password"
                                    class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none text-base"
                                    placeholder="Nhập mật khẩu mới..." />
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="input_re_password"
                                class="text-lg font-medium transition-all duration-200 cursor-pointer hover:opacity-75">Nhập
                                lại mật
                                khẩu:</label>
                            <div
                                class="px-4 bg-[#333334] rounded-2xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200 w-full border-[#7c7c7c]">
                                <input type="text" id="input_re_password"
                                    class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none text-base"
                                    placeholder="Nhập lại mật khẩu..." />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-end">
                        <button
                            class="hover:bg-green-500 transition-all duration-200 px-3 py-2 rounded-lg bg-[#333334] w-24 text-center"
                            @click="$emit('close_modal')">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>