<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <div class="flex flex-col gap-4 w-[26%] bg-[#252728] text-white p-5">
        <div class="flex flex-col gap-5">
            <div class="flex items-center">
                <h1 class="flex-grow text-3xl font-bold">Đoạn chat</h1>
                <div class="flex">
                    <font-awesome-icon :icon="['fas', 'user-plus']"
                        class="p-2 text-lg transition-all duration-200 cursor-pointer hover:brightness-75" />
                    <font-awesome-icon :icon="['fas', 'user-group']"
                        class="p-2 pr-0 text-lg transition-all duration-200 cursor-pointer hover:brightness-75" />
                </div>
            </div>
            <div class="px-4 bg-[#333334] rounded-3xl justify-between flex items-center gap-3 outline outline-2
                focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-xl" />
                <div class="flex items-center w-full gap-2  border-[#7c7c7c]">
                    <input type="text"
                        class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none"
                        placeholder="Tìm kiếm...">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>