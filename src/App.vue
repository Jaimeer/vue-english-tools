<template>
  <div id="app">
    <nav-menu></nav-menu>
    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import LeftMenu from './components/LeftMenu'
import FooterSection from './components/FooterSection'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'app',
  components: {
    NavMenu,
    LeftMenu,
    FooterSection
  }
}
</script>

<style>  
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .section {
    flex: 1;
  }
  .right {
    text-align: right
  }
  .center {
    text-align: center
  }
  th span,
  td span {
    vertical-align: middle;
  }
</style>
