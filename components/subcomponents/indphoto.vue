<template>
    <div class="photos">
        <img :src="link">
    </div>
</template>

<script>
    export default {
        name: 'indphoto',
        prop:['link']
    }
</script>

<style scoped>

</style>