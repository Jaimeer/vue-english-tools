<template>
  <div class="modal" :class="{ 'is-active': modalOpen }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <article class="message is-primary">
        <div class="message-body center">
          <div class="finish-title">Quiz Finished</div>
          <div class="finish-message">{{ quizScore }}</div>
          <button class="button is-primary" @click="closeModal">Reset</button>
          <button class="button is-primary" @click="testFailured" v-show="enableTestFailures">Test Failures</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'irregular-verbs-finish-result',
  props: ['modalOpen', 'quizScore', 'enableTestFailures'],
  methods: {
    closeModal: function () {
      this.$emit('closeModal')
    },
    testFailured: function () {
      this.$emit('testFailures')
    }
  }
}
</script>

<style scoped>
  .finish-message {
    margin: 20px 0px;
  }
  .finish-title {
    font-weight: bold
  }
</style>
