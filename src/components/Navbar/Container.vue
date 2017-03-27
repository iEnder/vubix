<template>
<nav class='navbar' >
    <div v-on:click="collapsePanel()" class="navbar__toggle">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>

    <span class="navbar__logo">
        <h1>Vubix</h1>
    </span>

    <div class="navbar__item-container">
        <div>
            <div class="navbar__item-category">
                <span v-on:click="toggleColorModal()" class="navbar__item navbar__item--color"/>
            </div>
            <div class="navbar__item-category">
                <img src="../../assets/flags/us.svg" class="navbar__item navbar__item--flag"></img>
            </div>
            <div class="navbar__item-category">
                <i class="fa fa-user navbar__item navbar__item--user" aria-hidden="true"></i>
                <i class="fa fa-cog navbar__item navbar__item--settings" aria-hidden="true"></i>
            </div>
            <div class="navbar__item-category">
                <i class="fa fa-envelope navbar__item navbar__item--mail" aria-hidden="true"></i>
                <i class="fa fa-bullhorn navbar__item navbar__item--announcement" aria-hidden="true"></i>
                <i class="fa fa-rss navbar__item navbar__item--feed" aria-hidden="true"></i>
            </div>
        </div>
        <div class="navbar__power">
            <i class="fa fa-power-off" aria-hidden="true"></i>
        </div>
    </div>

    <div class="color-modal" v-bind:class="{ 'color-modal--active': colorModal }" >
        <span class="color-modal__title"> <h2>Choose a Theme: </h2> </span>

        <div class="color-modal__color-row">
            <span v-on:click="changeColors('#E76049')" class="color-modal__color"/>
            <span v-on:click="changeColors('#2EB398')" class="color-modal__color"/>
            <span v-on:click="changeColors('#79B0EC')" class="color-modal__color"/>
            <span v-on:click="changeColors('#68A0A5')" class="color-modal__color"/>
            <span v-on:click="changeColors('#A8553A')" class="color-modal__color"/>
            <span v-on:click="changeColors('#B4A1DD')" class="color-modal__color"/>
        </div>
    </div>
</nav>
</template>
 
<script>
export default {
    name: 'navbar',
    data() {
        return {
            panel: 0,
            colorModal: false
        }
    },
    methods: {
        toggleColorModal() {
            this.colorModal = !this.colorModal;
        },

        collapsePanel() {
            document.getElementById("sidebar").style.marginLeft = this.panel == 0 ? "0px" : "";
            document.querySelector(".navbar__power").style.right = this.panel == 1 ? "" : "-80px";
            document.querySelector(".navbar__power").style.marginRight = this.panel == 1 ? "" : "-80px";
            document.querySelector(".navbar__toggle").style.marginLeft = this.panel == 1 ? "" : "250px";
            this.panel = this.panel == 1 ? 0 : 1;
        },

        changeColors(color) {
            function editColor(p,c0,c1) {
                // sorry.
                let n = p<0?p*-1:p, u=Math.round, w=parseInt;
                if (c0.length>7) {
                    let f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
                    return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")";
                } else {
                    let f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
                    return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1);
                }

            }
            let el = document.querySelector('.app');
            el.style.setProperty('--color-base', color);
            el.style.setProperty('--color-secondary', editColor(-0.1, color));
            el.style.setProperty('--color-hover', editColor(-0.15, color));
            el.style.setProperty('--color-active', editColor(-0.25, color));
            el.style.setProperty('--color-text', editColor(-0.45, color));
            el.style.setProperty('--color-active-text', editColor(0.2, color));
            this.toggleColorModal();
        }

    }
};
</script>
<style lang='scss' scoped>
    @import '../../assets/_scss/_navbar';
</style>
