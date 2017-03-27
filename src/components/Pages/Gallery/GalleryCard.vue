<template>
<div class='gallery-card' >
    <div>
    
        <div class='gallery-card__image-wrapper'>
            <img class='gallery-card__image' :class="{ long: image.width > image.height }":src="image" :alt="desc" />
            <div class='gallery-card__image--hover'>
                <i class="fa fa-search"></i>
            </div>
        </div>
        <h5 class='gallery-card__title'>{{ title }}</h5>
        <p class='gallery-card__date'>{{ date }}</p>
        <button class='gallery-card__score' @click="toggleLoved" :class="{ loved: isLoved }" ><i class="fa fa-heart"></i> <span>{{ score }}</span></button>
    
    </div>
</div>
</template>
 
<script>
export default {
    name: 'GalleryCard',
    props: ["image", "desc", "title", "date", "score"],
    data() {
        return {
            isLoved: false
        }
    },
    methods: {
        toggleLoved() {
            this.score = this.isLoved ? Number(this.score) - 1 : Number(this.score) + 1;
            this.isLoved = !this.isLoved;
        }
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../../../assets/_scss/_gallery';
</style>