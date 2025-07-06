<template>
    <div class="bg-[#252728] text-white h-screen flex items-center justify-center flex-col gap-4">
        <h1 class="text-5xl font-bold">Đăng nhập thành công!</h1>
        <p class="text-lg">Tự động điều hướng sau {{ count }} giây</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 5,
            timer: null
        }
    },
    mounted() {
        const queryString = window.location.hash.split('?')[1];
        const token = new URLSearchParams(queryString).get('token');
        const user_id = new URLSearchParams(queryString).get('user_id');
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id);
        this.timer = setInterval(() => {
            this.count--
            if (this.count <= 0) {
                clearInterval(this.timer)
                this.$router.push('/index')
            }
        }, 1000)
    },
    beforeUnmount() {
        clearInterval(this.timer)
    }
}
</script>