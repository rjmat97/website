<template>
    <div class="socials"> 
        <el-col :span="16" :offset="8">
            <Social-Items v-for="icon in icons"
                :key="icon.link"
                :logo="icon.logo"
                :link="icon.link"
            >
            </Social-Items>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'social_handles',
        components:{
            SocialItems: () => import('./subcomponents/SocialItems.vue')
        },
        data(){
            return{
                icons:[
                    {link: 'instagram.com/rjmat97', logo: 'instagram.svg'},
                    {link: 'twotter.com/rjmat97', logo: 'twitter.svg'},
                    {link: 'github.com/rjmat97', logo: 'github.svg'},
                    {link: 'soundcloud.com/rjmat97', logo: 'soundcloud.svg'},
                ],
            }
        }
    }
</script>

<style scoped>
    .socials{
        display: block;
        float: middle;
    }
</style>