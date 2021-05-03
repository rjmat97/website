<template>
    <div class="main">
        <el-col
            :xs="{span: 22, offset: 1}"
            :sm="{span: 22, offset: 1}"
            :md="{span: 20, offset: 2}"
            :lg="{span: 20, offset: 2}"
            :xl="{span: 18, offset: 3}">
            <div class="details">
                <div class="pic">
                    <img class="profile" :src="require('@/assets/profile.jpg')">
                </div>
                <div class="deets">
                    <h1 class="font">rjmat97</h1>
                    <SocialHandles :size="`30px`"/>
                </div>
            </div>
        </el-col>
        <img class="cover-image" :src="require('@/assets/cover_image.png')">
    </div>
</template>

<style scoped>
    .font{
        font-size: 5vh;
    }
    .main{
        padding-top: 5em;
    }
    .cover-image{
        width: 100%;
    }
    .details{
        position: absolute;
        top: 25vw;
        margin-left: 3em;
        display: flex;
        align-items: center;
    }
    .socials{
        padding: 10px 0px;
    }
    .profile{
        width: 15vw;
        border-radius: 50%;
    }
    .deets{
        margin-left: 3vh
    }
</style>