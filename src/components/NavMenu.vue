<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <router-link to="/" class="nav-item is-tab is-active">Home</router-link>
        <router-link to="/tools/irregular-verbs" class="nav-item is-tab">Irregular Verbs</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>
<style scoped>
  .custom-nav-menu{

  }
  .separator {
    color: #a9d42f;
  }
</style>
