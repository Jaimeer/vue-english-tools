<template>
  <div>
    <span class="text">Test Length:</span>
    <!--
    <button class='button is-primary is-small' @click='changeQuizLength(1)'>1</button>
    <button class='button is-primary is-small' @click='changeQuizLength(2)'>2</button>
    -->
    <button class='button is-primary is-small' @click='changeQuizLength(10)'>10</button>
    <button class='button is-primary is-small' @click='changeQuizLength(50)'>50</button>
    <button class='button is-primary is-small' @click='changeQuizLength(0)'>All</button>
  </div>
</template>

<script>
export default {
  name: 'irregular-verbs-menu',
  methods: {
    changeQuizLength: function (quizLength) {
      this.$ua.trackEvent('irregular-verbs-menu', 'changeQuizLength', quizLength)
      this.$emit('lengthChanged', quizLength)
    }
  }
}
</script>

<style scoped>
  .text {
    vertical-align: middle;
    color: #7a7a7a;
  }
</style>
