<script setup>
import { Icon } from '@iconify/vue';
import FriendInfoModal from '../modals/FriendInfoModal.vue';
import GroupInfoModal from '../modals/GroupInfoModal.vue';
import axios from 'axios';
</script>

<template>
    <!-- Start chat box -->
    <div class="flex flex-col flex-grow">
        <!-- Start header -->
        <div class="z-20 flex justify-between p-5 shadow-md select-none shadow-black/20">
            <div class="flex items-center gap-2">
                <img src="../assets/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold">{{ messages.chatroom_name }}</h1>
                    <p class="text-sm opacity-75">Đang hoạt động</p>
                </div>
            </div>
            <div class="flex items-center justify-center gap-2">
                <!-- Start friend info -->
                <div v-if="messages.chatroom_type == 'friend'"
                    class="flex items-center cursor-pointer hover:brightness-75" @click="showModal('friend_info')">
                    <Icon icon="material-symbols:info" class="text-3xl" />
                </div>
                <!-- End friend info -->

                <!-- Start group info -->
                <div v-else class="flex items-center cursor-pointer hover:brightness-75"
                    @click="showModal('group_info')">
                    <Icon icon="material-symbols:info" class="text-3xl" />
                </div>
                <!-- End group info -->
            </div>
        </div>
        <!-- End header -->

        <!-- Start chat -->
        <ul ref="messagesRef"
            class="flex flex-col flex-grow gap-4 p-4 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent">
            <li v-for="message in messages.messages" :key="message.id">
                <div v-if="message.type == 'friend'" class="flex gap-2 group">
                    <img src="../assets/avatar.jpg" alt="avatar" class="rounded-full h-9">
                    <div class="flex flex-col justify-center px-3 py-2 bg-[#303030] rounded-xl max-w-80">
                        <h1 class="text-[13.5px] opacity-75">{{ message.user_name }}</h1>
                        <p>{{ message.message }}</p>
                        <p class="text-[12px] opacity-75">{{ message._created_at }}</p>
                    </div>
                    <div
                        class="p-1 text-red-500 group-hover:opacity-100 bg-[#303030] size-10 opacity-0 flex items-center justify-center rounded-full cursor-pointer hover:brightness-90 transition-all duration-200">
                        <Icon icon="material-symbols:delete" class="text-2xl" />
                    </div>
                </div>
                <div v-if="message.type == 'me'" class="flex justify-end gap-2 group">
                    <div
                        class="p-1 text-red-500 group-hover:opacity-100 bg-[#303030] size-10 opacity-0 flex items-center justify-center rounded-full cursor-pointer hover:brightness-90 transition-all duration-200">
                        <Icon icon="material-symbols:delete" class="text-2xl" />
                    </div>
                    <div class="flex flex-col justify-center px-3 py-2 bg-green-500 rounded-xl max-w-80 min-w-24">
                        <h1 class="text-[13.5px] opacity-75">{{ message.user_name }}</h1>
                        <p>{{ message.message }}</p>
                        <p class="text-[12px] opacity-75">{{ message._created_at }}</p>
                    </div>
                    <img src="../assets/avatar.jpg" alt="avatar" class="rounded-full h-9">
                </div>
            </li>
        </ul>
        <!-- End chat -->

        <!-- Start send message -->
        <div class="flex items-center gap-2 px-5 py-3">
            <div
                class="bg-[#333334] rounded-3xl flex flex-grow items-center outline outline-2 focus-within:outline-transparent hover:brightness-90 outline-transparent transition-all duration-200 border-[#7c7c7c]">
                <input type="text" v-model="message"
                    class="w-full text-white bg-transparent border-none focus:outline-none py-2.5 px-5"
                    placeholder="Soạn tin nhắn..." />
            </div>
            <div class="p-2.5 flex items-center justify-center cursor-pointer hover:bg-green-500 transition-all duration-200 bg-[#333334] rounded-full"
                @click="sendMessage()">
                <Icon icon="material-symbols:send-rounded" class="text-2xl" />
            </div>
        </div>
        <!-- End send message -->
    </div>
    <!-- End chat box -->

    <!-- Start modal friend info -->
    <FriendInfoModal v-if="isShowFriendInfoModal" @close_modal="closeModal('friend_info')" />
    <!-- End modal friend info -->

    <!-- Start modal group info -->
    <GroupInfoModal v-if="isShowGroupInfoModal" @close_modal="closeModal('group_info')" />
    <!-- End modal group info -->
</template>

<script>
export default {
    data() {
        return {
            isShowFriendInfoModal: false,
            isShowGroupInfoModal: false,
            message: "",
            messages: []
        }
    },
    mounted() {
        this.messages = JSON.parse(localStorage.getItem('messages'));
        this.scrollToBottom();
    },
    sockets: {
        reciveMessageFromServer: function (res) {
            let user_id = localStorage.getItem('user_id');
            let users_id = localStorage.getItem('users_id').split(',');
            if (!users_id.includes(String(res.user_id))) {
                return;
            }
            res.type = res.user_id == user_id ? 'me' : 'friend';
            this.messages.messages.push(res);
            this.$forceUpdate();
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        }
    },
    watch: {
        '$route.params.id'(newId, oldId) {
            if (newId != oldId) {
                this.messages = JSON.parse(localStorage.getItem('messages'));
                this.scrollToBottom();
            }
        }
    },
    methods: {
        async sendMessage() {
            let formData = new FormData();
            formData.append('chatroom_id', this.$route.params.id);
            formData.append('message', this.message);
            await axios.post('http://127.0.0.1:8000/api/user/send-message', formData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((res) => {
                if (res.status == 200) {
                    this.$socket.emit('sendMessageFromClient', res.data.data);
                    this.message = "";
                }
            }).catch((err) => {
                console.log(err);
            });
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const lastMessage = this.$refs.messagesRef?.lastElementChild;
                if (lastMessage) {
                    lastMessage.scrollIntoView({ behavior: 'smooth' });
                }
            });
        },
        showModal(type) {
            switch (type) {
                case 'friend_info':
                    this.isShowFriendInfoModal = true;
                    break;
                case 'group_info':
                    this.isShowGroupInfoModal = true;
                    break;
            }
        },
        closeModal(type) {
            switch (type) {
                case 'friend_info':
                    this.isShowFriendInfoModal = false;;
                    break;
                case 'group_info':
                    this.isShowGroupInfoModal = false;
                    break;
            }
        }
    }
}
</script>