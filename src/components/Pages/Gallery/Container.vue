<template>
    <div class='gallery' >
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x200" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/100x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/300x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
        <GalleryCard image="http://placehold.it/200x150" desc="skyline" title="SKYLINE" date="10TH DEC - 12TH DEC" score="12" />
    </div>
</template>
 
<script>
import GalleryCard from './GalleryCard';
export default { 
    name: 'Gallery',
    components: {
        GalleryCard
    }
};
</script>
 
<style lang='scss' scoped>
@import '../../../assets/_scss/_gallery';
</style>