<template>
<aside id="sidebar" class='sidebar' >
    <div class="sidebar__header">
        
        <img class="sidebar__image" src="../../assets/profile-image.jpg" alt="image">

        <div class="sidebar__stats">
            <h3 class="sidebar__name">{{ username }}</h3>
            <div class="sidebar__level">
                <div class="sidebar__level-progress"></div>
            </div>
        </div>

        <i class="fa fa-lock sidebar__lock" aria-hidden="true"></i>
    </div>

    <div class="sidebar__control">
        
        <ul>
        
            <li id="panelBtn0" v-on:click="changePanel(0, 'panelBtn0')" class="sidebar__control-item sidebar__control-item--active"><i class="fa fa-cube" aria-hidden="true"></i></li>
            <li id="panelBtn1" v-on:click="changePanel(1, 'panelBtn1')" class="sidebar__control-item" ><i class="fa fa-comments" aria-hidden="true"></i></li>
            <li id="panelBtn2" v-on:click="changePanel(2, 'panelBtn2')" class="sidebar__control-item" ><i class="fa fa-pie-chart" aria-hidden="true"></i></li>
            <li id="panelBtn3" v-on:click="changePanel(3, 'panelBtn3')" class="sidebar__control-item" ><i class="fa fa-list" aria-hidden="true"></i></li>
            <li id="panelBtn4" v-on:click="changePanel(4, 'panelBtn4')" class="sidebar__control-item" ><i class="fa fa-bell" aria-hidden="true"></i></li>
        </ul>
        
    </div>

    <div class="sidebar__container">
    
        <div class="sidebar__category" data-category="0">
            <h1>1</h1>
        </div>
        <div class="sidebar__category" data-category="1">
            <ContactGroup title="ONLINE" :people="online"/>
            <ContactGroup title="IDLE" :people="online"/>
            <ContactGroup title="BUSY" :people="online"/>
            <ContactGroup title="OFFLINE" :people="online" offline="true" />
        </div>
        <div class="sidebar__category" data-category="2">
            <h1>3</h1>
        </div>
        <div class="sidebar__category" data-category="3">
            <h1>4</h1>
        </div>
        <div class="sidebar__category" data-category="4">
            <h1>5</h1>
        </div>
    
    </div>
</aside>
</template>

<script>
import ContactGroup from './ContactGroup';
export default {
    name: 'sidebar',
    props: ["username"],
    data() {
        return {
            currentPanel: 0,
            online: [{ name: 'Charlie', image: 'placehold.it/20x20'}, { name: 'Sam', image: 'placehold.it/20x20'}]
        };
    },
    methods: {
        changePanel(index, id) {
            if (index === this.currentPanel) return;

            Array.from(document.getElementsByClassName("sidebar__category")).forEach((el) => {
                el.style.left =  el.style.left = (-250 * index) + "px";
            });

            document.querySelector(".sidebar__control-item--active").classList.remove("sidebar__control-item--active");
            document.querySelector("#" + id).classList.add("sidebar__control-item--active");

            this.currentPanel = index;
        },
    },
    components: {
        ContactGroup
    }
};
</script>

<style lang='scss' scoped>
    @import '../../assets/_scss/_sidebar'
</style>
