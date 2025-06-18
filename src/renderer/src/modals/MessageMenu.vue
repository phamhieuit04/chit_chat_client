<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div
        class="absolute flex flex-col outline outline-2 outline-[#383838] text-white bg-[#252728] w-52 right-0 mr-20 rounded-xl overflow-hidden p-2">
        <div class="flex justify-end">
            <div @click="$emit('close_modal')" class="text-xl text-white cursor-pointer hover:brightness-90">
                <Icon icon="material-symbols:close-rounded" />
            </div>
        </div>
        <ul class="flex flex-col">
            <li class="flex gap-2 p-2.5 transition-all duration-200 cursor-pointer hover:brightness-75">
                <Icon icon="material-symbols:group-add" class="text-2xl" />
                <h1>Thêm vào nhóm</h1>
            </li>
            <li class="flex gap-2 p-2.5 transition-all duration-200 cursor-pointer hover:brightness-75 text-red-500">
                <Icon icon="material-symbols:delete" class="text-2xl" />
                <h1 class="font-medium">Xóa hội thoại</h1>
            </li>
        </ul>
    </div>
</template>