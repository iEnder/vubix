<template>
  <div class="app">
    <Sidebar username="Ender" />
    <div class="app__right">
      <Navbar />
    </div>
  </div>
</template>

<script>
// <router-view></router-view>
import Sidebar from './components/sidebar/container';
import Navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    Sidebar,
    Navbar
  },
};
</script>

<style lang='scss'>
    @import './assets/_scss/_globals.scss';
    @import './assets/_scss/_normalize.scss';
</style>
