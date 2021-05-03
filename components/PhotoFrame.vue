<template>
    <div class="photo-frame">
        <!-- <el-col :span="20" :offset="3"> -->
            <div class="bar">
                <Indphoto class="left" v-for="i in left"
                    :key="i"
                    :link="i"
                ></Indphoto>
            </div>
             <div class="bar">
                 <Indphoto class="right" v-for="i in right"
                    :key="i"
                    :link="i"
                ></Indphoto>
             </div>
        <!-- </el-col> -->
    </div>
</template>

<script>
export default {
    name: 'PhotoFrame',
    components:{
        Indphoto: () => import('@/components/subcomponents/indphoto.vue')
    },
    computed:{
        left()   {return this.$store.getters.left},
        right()  {return this.$store.getters.right},
    }, 
    mounted(){
        this.$store.dispatch('loadURLs')
    }
}
</script>

<style scoped>
    .photo-frame{
        display: flex;
        width: 100%;
        padding-bottom: 10px;
        background: black;
    }
    .bar{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .right{
        padding-right: 10px;
        padding-left: 5px;
        padding-top: 10px;
    }
    .left{
        padding-left: 10px;
        padding-right: 5px;
        padding-top: 10px;
    }
</style>


