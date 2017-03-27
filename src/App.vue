<template>
  <div class="app">
    <Sidebar username="Seth Church" />
    <div class="app__right">
      <Navbar />
      <router-view id="app-view"></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Container';
import Navbar from './components/Navbar/Container';

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
