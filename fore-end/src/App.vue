<template>
  <div id="app">
  <!-- <div class="main">meishaonv zhanshi</div> -->
    <router-view></router-view>
    <!-- <NavBar></NavBar> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar/index'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './styles/base.scss';

</style>
