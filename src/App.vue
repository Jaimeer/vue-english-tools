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

export default {
  name: 'app',
  components: {
    NavMenu,
    LeftMenu,
    FooterSection
  }
}
</script>

<style scoped>
  #app {
    
  }
</style>
