<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <router-link :to="{ name: 'home' }" class="nav-item is-tab" :class="{ 'is-active': isActive('home') }">Home</router-link>
        <router-link :to="{ name: 'irregularVerbs' }" class="nav-item is-tab" :class="{ 'is-active': isActive('irregularVerbs') }">Irregular Verbs</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-menu',
  methods: {
    isActive: function (page) {
      console.log(this.$router.stringifyPath)
      return page === 'irregularVerbs'
    }
  }
}
</script>
<style scoped>
  .custom-nav-menu{

  }
  .separator {
    color: #a9d42f;
  }
</style>
