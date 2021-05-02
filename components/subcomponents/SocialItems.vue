<template>
    <a :href="'http://'+link" target="_blank">
        <img :src="require('@/assets/icons/'+ logo + '')">
    </a>
</template>

<script>
    export default {
        name: 'social_handles',
        props:['logo', 'link'],
    }
</script>

<style scoped>
    a{
        padding: 2px;
    }
    img{
        width: 30px;
        filter: invert(100%);
    }
</style>