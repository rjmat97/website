<template>
    <div class="footer" :style="styles">
        <SocialHandles/>
        page create by ©ReubenJacobMathew
    </div>
</template>
    
<script>
    export default {
        name: 'footnote',
        props: ['styles']
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        background: #333;
        height: 20vh;
        padding: 2em;
        color: white;
    }
</style>