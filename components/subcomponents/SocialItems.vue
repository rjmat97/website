<template>
    <a :href="'http://'+link" target="_blank">
        <img :src="require('@/assets/icons/'+ logo + '')" 
            :style="`width: `+ size">
    </a>
</template>

<script>
    export default {
        name: 'social_handles',
        props:{
            logo:{
                type: String
            }, 
            link:{
                type: String
            }, 
            size: {
                type: String,
                default: "30px"
            }
        },
    }
</script>

<style scoped>
    a{
        padding: 2px;
    }
    img{
        filter: invert(100%);
    }
</style>