<template>
    <div>home page ！</div>
    <button @click="goAbout">去 about 页</button>
</template>

<script>
    export default{
        data () {
            return {
                name: '111'
            }
        },
        methods: {
            goAbout() {
                this.$router.push('/about')
            }
        }
    }
</script>