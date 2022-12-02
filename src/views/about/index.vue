<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const count = ref(1)

    const gohome = () => {
        count.value ++
        router.push({
            path: '/home'
        })
    }
</script>

<template>
    <div>about page count: {{count}}</div>
    <button @click="gohome">回首页</button>
</template>