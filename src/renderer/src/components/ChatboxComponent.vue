<script setup>
import { Icon } from '@iconify/vue';
import FriendInfoModal from '../modals/FriendInfoModal.vue';
import GroupInfoModal from '../modals/GroupInfoModal.vue';
</script>

<template>
    <!-- Start chat box -->
    <div class="flex flex-col flex-grow">
        <!-- Start header -->
        <div class="z-20 flex justify-between p-5 shadow-md select-none shadow-black/20">
            <div class="flex items-center gap-2">
                <img src="../assets/avatar.jpg" alt="avatar" class="h-12 rounded-full">
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold">Duong Dua</h1>
                    <p class="text-sm opacity-75">Đang hoạt động</p>
                </div>
            </div>
            <div class="flex items-center justify-center gap-2">
                <!-- Start friend info -->
                <div class="flex items-center cursor-pointer hover:brightness-75" @click="showModal('friend_info')">
                    <Icon icon="material-symbols:info" class="text-3xl" />
                </div>
                <!-- End friend info -->

                <!-- Start group info -->
                <div class="flex items-center cursor-pointer hover:brightness-75" @click="showModal('group_info')">
                    <Icon icon="material-symbols:info" class="text-3xl" />
                </div>
                <!-- End group info -->
            </div>
        </div>
        <!-- End header -->

        <!-- Start chat -->
        <ul ref="messagesRef"
            class="flex flex-col flex-grow gap-4 p-4 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent">
            <li v-for="message in messages" :key="message.id">
                <div v-if="message.type == 'friend'" class="flex gap-2 group">
                    <img src="../assets/avatar.jpg" alt="avatar" class="rounded-full h-9">
                    <div class="flex flex-col justify-center px-3 py-2 bg-[#303030] rounded-xl max-w-80">
                        <p>{{ message.message }}</p>
                        <p class="text-[12px] opacity-75">12:00</p>
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
                        <p>{{ message.message }}</p>
                        <p class="text-[12px] opacity-75">12:00</p>
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
            messages: [
                {
                    id: 1,
                    message: 'Hehe',
                    type: 'friend'
                },
                {
                    id: 2,
                    message: 'Haha',
                    type: 'me'
                },
                {
                    id: 3,
                    message: 'Hehehehehehehehhehe',
                    type: 'friend'
                },
                {
                    id: 4,
                    message: 'Hahahahahhahaha',
                    type: 'friend'
                },
                {
                    id: 5,
                    message: 'Ahihihihi!!!',
                    type: 'me'
                },
                {
                    id: 6,
                    message: 'Ahahaha',
                    type: 'friend'
                },
                {
                    id: 7,
                    message: 'Hihehihih',
                    type: 'friend'
                },
                {
                    id: 8,
                    message: 'Hehehaha',
                    type: 'me'
                },
                {
                    id: 9,
                    message: 'Hahahah',
                    type: 'me'
                },
                {
                    id: 10,
                    message: 'Hahiha',
                    type: 'me'
                },
                {
                    id: 11,
                    message: 'Heihihihahhahii',
                    type: 'friend'
                },
                {
                    id: 12,
                    message: 'Hí hí',
                    type: 'me'
                },
                {
                    id: 13,
                    message: 'Hehehahaha',
                    type: 'me'
                },
                {
                    id: 14,
                    message: 'Hehehasdkjasd',
                    type: 'friend'
                },
                {
                    id: 15,
                    message: 'Hi',
                    type: 'me'
                },
            ]
        }
    },
    mounted() {
        this.scrollToBottom();
    },
    sockets: {
        connect: function () {
            console.log('Connected!');
        }
    },
    watch: {
        '$route.params.id'(newId, oldId) {
            if (newId != oldId) {
                this.scrollToBottom();
            }
        }
    },
    methods: {
        sendMessage() {
            this.message = "";
            this.$socket.emit('sendMessageFromClient', this.message);
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