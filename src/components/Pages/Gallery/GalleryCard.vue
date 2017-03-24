<template>
<div class='gallery-card' >
    <div class='gallery-card__image-wrapper'>
        <img class='gallery-card__image' :src="image" :alt="desc" />
    </div>
    <h5 class='gallery-card__title'>{{ title }}</h5>
    <p class='gallery-card__date'>{{ date }}</p>
    <button class='gallery-card__score'><i class="fa fa-heart"></i> <span>{{ score }}</span></button>
</div>
</template>
 
<script>
export default {
    name: 'GalleryCard',
    props: ["image", "desc", "title", "date", "score"]
};
</script>
 
<style lang='scss' scoped>
    @import '../../../assets/_scss/_gallery';
</style>