<script setup>
import { Icon } from '@iconify/vue'
import MessageMenu from '../modals/MessageMenu.vue';
import UpdateInfoModal from '../modals/UpdateInfoModal.vue';
import AddFriendModal from '../modals/AddFriendModal.vue';
import AcceptFriendModal from '../modals/AcceptFriendModal.vue';
import SendMessageModal from '../modals/SendMessageModal.vue';
import CreateGroupModal from '../modals/CreateGroupModal.vue';
import AddToGroupModal from '../modals/AddToGroupModal.vue';
import { useAuthStore } from '../stores/auth';
</script>

<template>
    <div class="flex flex-col gap-4 w-[26%] bg-[#252728] text-white select-none relative rounded-2xl p-5">
        <!-- Start header -->
        <div class="relative z-50 flex items-center justify-between">
            <h1 class="text-3xl font-bold">Đoạn chat</h1>
            <div class="flex items-center">
                <!-- Start header notifications menu -->
                <label for="header_notification" class="p-2 cursor-pointer group">
                    <Icon icon="material-symbols:notifications-unread"
                        class="text-2xl transition-all duration-200 group-hover:brightness-75" />
                </label>
                <input type="checkbox" id="header_notification" hidden class="peer/header_notification">
                <div
                    class="gap-2 py-4 px-2 absolute right-0 hidden flex-col peer-checked/header_notification:flex rounded-xl outline outline-2 outline-[#383838] top-12 text-white bg-[#252728] w-80 h-[450px]">
                    <div class="flex justify-end">
                        <label for="header_notification"
                            class="px-1 text-xl text-white transition-all duration-200 cursor-pointer hover:opacity-75">
                            <Icon icon="material-symbols:close-rounded" />
                        </label>
                    </div>
                    <ul
                        class="overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent">
                        <li v-for="i in 10" :key="i" @click="showModal('accept_friend')"
                            class="flex p-2.5 cursor-pointer gap-2 transition-all duration-200 hover:brightness-75">
                            <img src="../assets/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                            <h1>
                                <strong>Duong Dua</strong>
                                đã gửi lời mời kết bạn!
                            </h1>
                        </li>
                    </ul>
                </div>
                <!-- End header notifications menu -->

                <!-- Start header show more menu -->
                <label for="header_show_more"
                    class="bg-[#333334] p-2 rounded-full cursor-pointer transition-all duration-200 hover:brightness-90">
                    <Icon icon="material-symbols:menu-rounded" class="text-2xl" />
                </label>
                <input type="checkbox" id="header_show_more" hidden class="peer/header_show_more" />
                <ul
                    class="p-2 absolute right-0 hidden flex-col peer-checked/header_show_more:flex rounded-xl outline outline-2 outline-[#383838] top-12 text-white bg-[#252728] w-52">
                    <li @click="showModal('update_info')"
                        class="flex p-2.5 cursor-pointer gap-2 transition-all duration-200 hover:brightness-75">
                        <Icon icon="material-symbols:info" class="text-2xl" />
                        <h1>Cập nhật thông tin</h1>
                    </li>
                    <li @click="showModal('send_message')"
                        class="flex p-2.5 cursor-pointer gap-2 transition-all duration-200 hover:brightness-75">
                        <Icon icon="material-symbols:edit-square" class="text-2xl" />
                        <h1>Soạn tin</h1>
                    </li>
                    <li @click="showModal('add_friend')"
                        class="flex p-2.5 cursor-pointer gap-2 transition-all duration-200 hover:brightness-75">
                        <Icon icon="material-symbols:person-add-rounded" class="text-2xl" />
                        <h1>Kết bạn</h1>
                    </li>
                    <li @click="showModal('create_group')"
                        class="flex gap-2 p-2.5 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <Icon icon="material-symbols:group-add" class="text-2xl" />
                        <h1>Tạo nhóm mới</h1>
                    </li>
                    <li @click="logOut()"
                        class="flex gap-2 p-2.5 pr-0 transition-all duration-200 cursor-pointer text-red-500 hover:brightness-75">
                        <Icon icon="material-symbols:logout" class="text-2xl" />
                        <h1 class="font-medium">Đăng xuất</h1>
                    </li>
                </ul>
                <!-- End header show more menu -->
            </div>
        </div>
        <!-- End header -->

        <!-- Start search -->
        <div
            class="px-4 bg-[#333334] rounded-3xl justify-between flex items-center gap-3 outline outline-2 focus-within:outline-white hover:brightness-90 outline-transparent transition-all duration-200">
            <Icon icon="material-symbols:search-rounded" class="text-2xl" />
            <div class="flex items-center w-full gap-2 border-[#7c7c7c]">
                <input type="text"
                    class="w-full py-3 text-white bg-transparent border-none outline-[#BC4D15] focus:outline-none"
                    placeholder="Tìm kiếm..." />
            </div>
        </div>
        <!-- End search -->

        <!-- Start classify -->
        <ul class="flex gap-1">
            <li>
                <input type="radio" id="classify_all" name="classify_radio" class="hidden peer/classify" checked />
                <label for="classify_all"
                    class="bg-transparent transition-all duration-200 flex items-center justify-center rounded-3xl min-w-16 hover:brightness-90 font-semibold hover:bg-[#3b3d3e] peer-checked/classify:bg-[#3b3d3e] py-1.5 px-4 cursor-pointer">
                    Tất cả
                </label>
            </li>
            <li>
                <input type="radio" id="classify_not_seen" name="classify_radio" class="hidden peer/classify" />
                <label for="classify_not_seen"
                    class="bg-transparent transition-all duration-200 flex items-center justify-center rounded-3xl min-w-16 hover:brightness-90 font-semibold hover:bg-[#3b3d3e] peer-checked/classify:bg-[#3b3d3e] py-1.5 px-4 cursor-pointer">
                    Chưa đọc
                </label>
            </li>
            <li>
                <input type="radio" id="classify_group" name="classify_radio" class="hidden peer/classify" />
                <label for="classify_group"
                    class="bg-transparent transition-all duration-200 flex items-center justify-center rounded-3xl min-w-16 hover:brightness-90 font-semibold hover:bg-[#3b3d3e] peer-checked/classify:bg-[#3b3d3e] py-1.5 px-4 cursor-pointer">
                    Nhóm
                </label>
            </li>
        </ul>
        <!-- End classify -->

        <!-- Start message -->
        <ul
            class="flex flex-col gap-1.5 overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent pr-2">
            <li v-for="i in 20" :key="i" ref="items" @click="getMessages(i)"
                :class="{ 'bg-[#3b3d3e]': selectedMessageId == i }"
                class="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:brightness-90 transition-all duration-200 hover:bg-[#3b3d3e] group">
                <img class="rounded-full size-12" src="../assets/avatar.jpg" alt="avatar" />
                <div class="flex items-center justify-between flex-grow">
                    <div>
                        <h1 class="text-lg font-bold">Hieu Pham</h1>
                        <p class="text-sm font-medium text-white">Xin chao em !</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <div @click="showMessageMenu(i - 1)"
                            class="shadow-sm shadow-black/50 flex items-center justify-center bg-[#333334] rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-[#4f5052]">
                            <Icon icon="material-symbols:expand-more-rounded" class="text-2xl" />
                        </div>
                        <div class="flex flex-col items-end gap-2">
                            <p class="text-sm font-medium">1 giờ</p>
                            <div class="bg-green-600 rounded-full size-3" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <!-- End message -->

        <!-- Start modal message menu -->
        <MessageMenu v-if="isShowMenu" :style="messageBoxPosition" @show_modal="showModal('add_to_group')"
            @close_modal="closeModal('message_menu')" />
        <!-- End modal messsage  menu -->

        <!-- Start modal update info -->
        <UpdateInfoModal v-if="isShowModalUpdateInfo" @close_modal="closeModal('update_info')" />
        <!-- End modal update info -->

        <!-- Start modal send message -->
        <SendMessageModal v-if="isShowModalSendMessage" @close_modal="closeModal('send_message')" />
        <!-- End modal send  message -->

        <!-- Start modal add friend -->
        <AddFriendModal v-if="isShowModalAddFriend" @close_modal="closeModal('add_friend')" />
        <!-- End modal add friend -->

        <!-- Start modal create group -->
        <CreateGroupModal v-if="isShowModalCreateGroup" @close_modal="closeModal('create_group')" />
        <!-- End modal create group -->

        <!-- Start modal add to group -->
        <AddToGroupModal v-if="isShowModalAddToGroup" @close_modal="closeModal('add_to_group')" />
        <!-- End modal add to group -->

        <!-- Start modal accept friend -->
        <AcceptFriendModal v-if="isShowModalAcceptFriend" @close_modal="closeModal('accept_friend')" />
        <!-- End modal accept friend -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            authStore: useAuthStore(),
            isShowMenu: false,
            isShowModalUpdateInfo: false,
            isShowModalSendMessage: false,
            isShowModalAddFriend: false,
            isShowModalCreateGroup: false,
            isShowModalAddToGroup: false,
            isShowModalAcceptFriend: false,
            selectedMessageId: 0,
            messageBoxPosition: {
                top: '0px'
            }
        }
    },
    methods: {
        logOut() {
            this.authStore.setUser("");
            this.$router.push('/auth');
        },
        showMessageMenu(id) {
            const selectedMessageBox = this.$refs.items[id]
            const selectedMessageBoxTop = selectedMessageBox.getBoundingClientRect().top
            const selectedMessageBoxBottom = selectedMessageBox.getBoundingClientRect().bottom
            if (selectedMessageBoxBottom + 125 < window.innerHeight) {
                this.messageBoxPosition.top = selectedMessageBoxTop + 60 + 'px'
            } else {
                this.messageBoxPosition.top = selectedMessageBoxTop - 112 + 'px'
            }
            this.isShowMenu = true
        },
        getMessages(id) {
            this.selectedMessageId = id;
            this.$router.push({ name: 'ChatboxComponent', params: { id } })
        },
        showModal(type) {
            switch (type) {
                case 'update_info':
                    this.isShowModalUpdateInfo = true;
                    break;
                case 'send_message':
                    this.isShowModalSendMessage = true;
                    break;
                case 'add_friend':
                    this.isShowModalAddFriend = true;
                    break;
                case 'create_group':
                    this.isShowModalCreateGroup = true
                    break;
                case 'add_to_group':
                    this.isShowModalAddToGroup = true;
                    break;
                case 'accept_friend':
                    this.isShowModalAcceptFriend = true;
                    break;
            }
        },
        closeModal(type) {
            switch (type) {
                case 'update_info':
                    this.isShowModalUpdateInfo = false;
                    break;
                case 'message_menu':
                    this.isShowMenu = false
                    break;
                case 'send_message':
                    this.isShowModalSendMessage = false;
                    break;
                case 'add_friend':
                    this.isShowModalAddFriend = false;
                    break;
                case 'create_group':
                    this.isShowModalCreateGroup = false;
                    break;
                case 'add_to_group':
                    this.isShowModalAddToGroup = false;
                    break;
                case 'accept_friend':
                    this.isShowModalAcceptFriend = false;
                    break;
            }
        }
    }
}
</script>
