<template>
        <!-- <el-col :span="6"> -->
            <img :src="link">
        <!-- </el-col> -->
        <!-- <br v-if="state"> -->
</template>

<script>
    export default {
        name: 'indphoto',
        props:['link', 'keys'],
        computed:{
            state() {return (this.keys%4 == 0) ? true : false}
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        display: block;
        align-items: center;
        margin-top: 0;
    }
</style>