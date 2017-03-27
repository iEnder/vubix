<template>
    <div class='gallery' >
        <GalleryCard v-for="image in images" :image="image.src" :desc="image.desc" :title="image.title" :date="image.date" :score="image.score" :key="image.id" />
    </div>
</template>
 
<script>
import GalleryCard from './GalleryCard';
export default { 
    name: 'Gallery',
    data() {
        return {
            images: require('./gallery-images')
        }
    },
    components: {
        GalleryCard
    }
};
</script>
 
<style lang='scss' scoped>
@import '../../../assets/_scss/_gallery';
</style>