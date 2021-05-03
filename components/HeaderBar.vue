<template>
    <div class="header" :style="styles">
        <h1> Reuben Jacob Mathew</h1>
    </div>
</template>
    
<script>
    export default {
        name: 'headbar',
        props: ['styles']
    }
</script>

<style scoped>
    .header{
        position: fixed;
        width: 100%;
        background: #333;
        height: 5rem;
        padding: 1.5rem;
        font-size: 0.8rem;
        color: white;
        z-index: 2;
    }
</style>