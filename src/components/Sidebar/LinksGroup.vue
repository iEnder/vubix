<template>
<div class='links-group' >
    <h1 class='links-group__header'>{{ header }}</h1>
    <ul class='links-group__list'>
        <li v-for="item in links" class='links-group__item' :id="'item-' + item.name.replace('&', '').replace(' ', '-').toLowerCase()">


            <div v-if="item.rest">
                <div class='links-group__container' @click="toggleSub(item.name.replace('&', '').replace(' ', '-').toLowerCase())">
                    <div  class='links-group__container--category'>
                    
                        <span>
                            <i v-if="item.icon" :class="item.icon" class="links-group__item--icon"></i>
                            <p class="links-group__item--name">{{ item.name }}</p>
                        </span>
                        
                        <span>
                            <span class="links-group__item--subcount" >{{ item.rest.length }}</span>
                            <span :id="'drop-'+item.name.replace('&', '').replace(' ', '-').toLowerCase()" class="links-group__item--dropdown"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </span>
                        
                    </div>
                </div>
                <LinksGroup :id="'sub-'+item.name.replace('&', '').replace(' ', '-').toLowerCase()" class="subgroup" :links="item.rest" />
            </div>


           <router-link class='links-group__container' :to="item.link" v-else >                    
                <i v-if="item.icon" :class="item.icon" class="links-group__item--icon"></i>
                <p class="links-group__item--name">{{ item.name }}</p>
           </router-link>


        </li>
    </ul>
</div>
</template>
 
<script>
export default {
    name: 'LinksGroup',
    props: ["links", "header"],
    methods: {
        toggleSub(id) {
            let current = !document.getElementById('sub-' + id).style.maxHeight == '';
            document.getElementById('drop-' + id).style.transform = current ? '' : 'rotate(0deg)';
            document.getElementById('sub-' + id).style.maxHeight = current ? '' : '999px';
        },
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../../assets/_scss/_sidebar';
</style>