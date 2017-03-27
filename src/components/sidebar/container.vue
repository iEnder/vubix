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
    
        <div class="sidebar__category sidebar-navigation" data-category="0">
            <input @keyup="filterSidebar" placeholder="Search..." type="text" class="sidebar-navigation__search">
            <span class="sidebar-navigation__divider" />
            <LinksGroup header="PAGES" :links="pages" />
            <span class="sidebar-navigation__divider" />
            <LinksGroup header="COMPONENTS" :links="components" />
            <span class="sidebar-navigation__divider" />
            <LinksGroup header="EXTRAS" :links="extras" />
            <span class="sidebar-navigation__divider" />
            <LinksGroup header="DOCUMENTATION" :links="doc" />
            <span class="sidebar-navigation__end"></span>
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
import LinksGroup from './LinksGroup';
const sidebarNav = require('./sidebar-nav');
export default {
  name: 'sidebar',
  props: ["username"],
  data() {
    return {
      currentPanel: 0,
      online: [{ name: 'Charlie Doe', image: 'https://placeholdit.imgix.net/~text?txtsize=6&bg=505050&txt=50%C3%9750&w=50&h=50' }, 
               { name: 'Sam Doe',     image: 'https://placeholdit.imgix.net/~text?txtsize=6&bg=505050&txt=50%C3%9750&w=50&h=50' },
               { name: 'Will Doe',    image: 'https://placeholdit.imgix.net/~text?txtsize=6&bg=505050&txt=50%C3%9750&w=50&h=50' },
               { name: 'Finn Doe',    image: 'https://placeholdit.imgix.net/~text?txtsize=6&bg=505050&txt=50%C3%9750&w=50&h=50' },
               { name: 'Mike Doe',    image: 'https://placeholdit.imgix.net/~text?txtsize=6&bg=505050&txt=50%C3%9750&w=50&h=50' }],
      pages: sidebarNav.pages,
      components: sidebarNav.components,
      extras: sidebarNav.extras,
      doc: sidebarNav.documentation
    };
  },
  computed: {
    navItems() {
      return Array.from(document
                        .querySelectorAll('.links-group__container'))
        .map(el => {
        if(el) {
          if (!el.text) {
            return el.querySelector('.links-group__item--name');
          }
        }
        return el;
      });
    }
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
    filterSidebar(e) {
      document.querySelectorAll('.hidden-item')
        .forEach(el => el.classList.remove('hidden-item'));
      const items = this.navItems;

      items.forEach(item => {
        let itemText = (item.text || item.innerHTML).trim().toLowerCase();
        let itemId = itemText.replaceAll('[^a-zA-Z\d\s:]', '').replaceAll(' ', '-');
        if (itemText.indexOf(e.target.value) == -1 && e.target.value != "") {
          if(document.querySelector(`#item-${itemId}`)) {
            document.querySelector(`#item-${itemId}`).classList.add('hidden-item');
            
          }
            try {
                let currentItem = document.querySelector(`#item-${itemId}`);
                if(currentItem.parentNode.classList[0] != links-group__list) {
                    if(Array.from(currentItem.parentNode.parentNode.classList).indexOf('subgroup')){
                        while(Array.from(currentItem.parentNode.parentNode.classList).indexOf('subgroup')) {
                            currentItem.parentNode.parentNode.parentNode.parentNode.classList.remove('hidden-item');
                            currentItem = currentItem.parentNode.parentNode.parentNode.parentNode
                        }
                    }
                }
            } catch (e) {
                console.log(item);
            }
        }
      });

    }
  },
  components: {
    ContactGroup,
    LinksGroup
  }
};
</script>

<style lang='scss' scoped>
    @import '../../assets/_scss/_sidebar'
</style>
