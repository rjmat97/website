<template>
    <div class="photo-frame">
        pictures come here
    </div>
</template>

<script>
export default {
    name: 'PhotoFrame',
    components:{
        indphoto: () => import('@/components/subcomponents/indphoto.vue')
    }
}
</script>
