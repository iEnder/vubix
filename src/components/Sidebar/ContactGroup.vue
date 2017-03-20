<template>
    <div class='contact-group'>
     <h6 class='contact-group__title'>{{ title }} ({{ people.length }})</h6>
        <div class='contact-group__container'>
            <div class='contact-group__item' v-for="person in people">
                <img class="contact-group__image" :src="person.image" :alt="person.name">
                <p class="contact-group__name">{{ person.name }}</p>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'ContactGroup',
    props: ["people", "title", "offline"]
};
</script>
 
<style lang='scss'>
@import '../../assets/_scss/_contactgroup'
</style>