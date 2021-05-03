<template>
        <!-- <el-col :span="6"> -->
            <img :src="link" @click="setFull()">
        <!-- </el-col> -->
        <!-- <br v-if="state"> -->
</template>

<script>
    export default {
        name: 'indphoto',
        props:['link', 'keys'],
        computed:{
            state() {return (this.keys%4 == 0) ? true : false}
        },
        methods:{
            setFull(){
                this.$store.dispatch('setImageNow', this.link)
                this.$store.dispatch('dialogVisible', true)
            }
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