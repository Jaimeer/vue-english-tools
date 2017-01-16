<template>
  <div class="home">
    <div>      
      <aside class="menu">
        <p class="menu-label">
          English Tools
        </p>
        <ul class="menu-list">
          <li><router-link :to="{ name: 'irregularVerbs' }">Irregular Verbs</router-link></li>
        </ul>
        <p class="menu-label">
          Developer
        </p>
        <ul class="menu-list">
          <li><a href="https://github.com/Jaimeer" target="_blanck">Jaime Escolar</a></li>
        </ul>
      </aside>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .home {
    padding: 0px 10px;
  }
</style>
