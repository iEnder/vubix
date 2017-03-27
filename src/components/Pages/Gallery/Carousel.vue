<template>
<div class='carousel' >
    <span class='carousel__exit-button'><i class="fa fa-window-close" aria-hidden="true"></i></span>
    <div class="carousel__wrapper">
        <span @click="setPanelPrev" class='carousel__control'><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></span> 
        <div class='carousel__image-container'>
            <div v-for="image in images" class="carousel__image-wrapper" :style="'left: ' +  imageCurrent">
                <img class="carousel__image" :src="image.src" :alt="image.desc">
            </div>
        </div>
        <span @click="setPanelNext" class='carousel__control'><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
    </div>
</div>
</template>
 
<script>
export default {
    name: 'Carousel',
    props: ["images", "panel"],
    data() {
        return {
            currentImagePanel: this.panel || 0,
            show: false
        }
    },
    computed: {
        imageCurrent() {
            return (Number(this.currentImagePanel) * -100) + "%";
        }
    },
    methods: {
        setPanelNext() {
            if(this.currentImagePanel + 1 < this.images.length) this.currentImagePanel++;
        },
        setPanelPrev() {
            if(this.currentImagePanel != 0) this.currentImagePanel--;
        },
        close() {
            this.show = false
        }
    }
};
</script>
 
<style lang='scss' scoped>
@import '../../../assets/_scss/_gallery';
</style>