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
