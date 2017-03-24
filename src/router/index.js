import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Gallery from '../components/Pages/Gallery/Container'
Vue.use(Router);

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
