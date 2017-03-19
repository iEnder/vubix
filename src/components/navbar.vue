<template>
<nav class='navbar' >
    <div v-on:click="collapsePanel()" class="navbar__toggle">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>

    <span>
        <h1>Vubix</h1>
    </span>

    <div class="nav__container">
    </div>
</nav>
</template>
 
<script>
export default {
    name: 'navbar',
    data() {
        return {
            panel: 1
        }
    },
    methods: {
        collapsePanel() {
            console.log(document.getElementById("sidebar").style)
            document.getElementById("sidebar").style.marginLeft = this.panel == 0 ? "0px" : "-250px";
            this.panel = this.panel == 1 ? 0 : 1;
        }
    }
};
</script>
<style lang='scss' scoped>
    @import '../assets/_scss/_navbar';
</style>
