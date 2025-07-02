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
        const token = new URL('http://localhost' + window.location.hash.slice(1)).searchParams.get('token')
        localStorage.setItem('token', token)
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