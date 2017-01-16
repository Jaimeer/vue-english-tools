<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link :to="{ name: 'home' }" class="nav-item">
          <span>English Tools</span>
        </router-link>
        <router-link :to="{ name: 'home' }" class="nav-item is-tab" :class="{ 'is-active': isActive('home') }">Home</router-link>
        <router-link :to="{ name: 'irregularVerbs' }" class="nav-item is-tab" :class="{ 'is-active': isActive('irregularVerbs') }">Irregular Verbs</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-menu',
  data: function () {
    return {
      currentPage: ''
    }
  },
  created () {
    this.setCurrentPage()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'setCurrentPage'
  },
  methods: {
    isActive: function (page) {
      return page === this.currentPage
    },
    setCurrentPage: function () {
      this.currentPage = this.$route.name
    }
  }
}
</script>
<style scoped>
  .custom-nav-menu{

  }
  span {
    color: #00d1b2;
    font-weight: bold;
    font-size: 1.4em;
    font-family: cursive;
  }
</style>
