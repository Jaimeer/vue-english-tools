<template>
    <tr @keyup.enter="checkResult">
      <th><span>-</span></th>
      <td><span v-if="quiz">{{ quiz.baseForm }}</span></td>
      <td><input ref="pastSimple" v-model="form.pastSimple" class='input' type='text' placeholder='Past Simple' :disabled="!quiz" autofocus></td>
      <td><input ref="pastParticiple" v-model="form.pastParticiple" class='input' type='text' placeholder='Past Participle' :disabled="!quiz"></td>
      <td><button class='button is-primary' @click="checkResult" :disabled="!quiz || !formValid">Check</button></td>
    </tr>
</template>

<script>
export default {
  name: 'irregular-verbs-quiz-input-row',
  props: ['quiz'],
  data: function () {
    return {
      form: {
        pastSimple: '',
        pastParticiple: ''
      }
    }
  },
  watch: {
    'quiz': function (val, oldVal) {
      this.form = { pastSimple: '', pastParticiple: '' }
      this.$refs.pastSimple.focus()
    }
  },
  methods: {
    checkResult: function () {
      if (this.formValid()) {
        let result = this.quiz
        let correctPastSimple = this.form.pastSimple.toLowerCase().trim() === this.quiz.pastSimple.toLowerCase().trim()
        let correctPastParticiple = this.form.pastParticiple.toLowerCase().trim() === this.quiz.pastParticiple.toLowerCase().trim()
        result.correct = correctPastSimple && correctPastParticiple
        result.error = {}
        result.error.pastSimple = correctPastSimple ? null : this.form.pastSimple.toLowerCase().trim()
        result.error.pastParticiple = correctPastParticiple ? null : this.form.pastParticiple.toLowerCase().trim()
        this.$ua.trackEvent('irregular-verbs-quiz-input-row', 'checkResult', this.quiz.baseForm, result.correct)
        this.$emit('submit', result)
      }
    },
    formValid: function () {
      return this.form.pasSimple !== '' && this.form.pastParticiple !== ''
    }
  }
}
</script>

<style scoped>
</style>
