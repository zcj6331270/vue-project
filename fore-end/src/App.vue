<template>
  <div id="app">
  <div class="main">meishaonv zhanshi</div>
  <NavBar></NavBar>
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
