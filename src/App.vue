<template>
  <div id="app">
    <Sidebar username="Ender" />
  </div>
</template>

<script>
// <router-view></router-view>
import Sidebar from './components/sidebar/container';

export default {
  name: 'app',
  components: {
    Sidebar,
  },
};
</script>

<style lang='scss'>
    @import './assets/_scss/_globals.scss';
    @import './assets/_scss/_normalize.scss';
</style>
