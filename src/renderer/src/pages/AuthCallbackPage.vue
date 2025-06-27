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
            count: 5
        }
    },
    mounted() {
        localStorage.setItem('token', (window.location.search).slice(7));
        setInterval(() => {
            this.count -= 1;
            if (this.count <= 0) {
                this.$router.push('/index');
            }
        }, 1000);
    }
}
</script>