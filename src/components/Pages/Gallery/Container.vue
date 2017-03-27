<template>
    <div class='gallery' >
        <GalleryCard v-for="(image, index) in images" 
        @click="openCarousel(index)"
        :image="image.src" :desc="image.desc" 
        :title="image.title" :date="image.date" 
        :score="image.score" :key="image.id" />

        <!--- <Carousel :images="images" :panel="carouselImage" /> -->
    </div>
</template>
 
<script>
import GalleryCard from './GalleryCard';
import Carousel from './Carousel';
export default { 
    name: 'Gallery',
    data() {
        return {
            images: require('./gallery-images'),
            carouselImage: 1
        }
    },
    components: {
        GalleryCard,
        Carousel
    },
    methods: {
        openCarousel(ind) {
            alert();
            this.carouselImage = ind;
        }
    }
};
</script>
 
<style lang='scss' scoped>
@import '../../../assets/_scss/_gallery';
</style>