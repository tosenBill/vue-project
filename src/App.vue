<template>
    <div class="title">{{title}}vue3</div>

    <router-view />
    
</template>
<script>
    export default{
        data () {
            return {
                title: 'hello123'
            }
        }
    }
</script>
<style>
    .title {
        color: red;
    }
</style>