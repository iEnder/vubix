import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Gallery from '../components/Pages/Gallery/Container'
Vue.use(Router);

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
  ],
});
