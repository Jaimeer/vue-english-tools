<template>
  <div>
    <irregular-verbs-menu @lengthChanged="lengthChanged"></irregular-verbs-menu>
    <table class='table'>
      <thead>
        <tr>
          <th>Quiz</th>
          <th>Base Form</th>
          <th>Past Simple</th>
          <th>Past Participle</th>
          <th>Result</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th colspan="2" class="right">{{ quizScore }}</th>
        </tr>
      </tfoot>
      <tbody>
        <irregular-verbs-quiz-input-row :quiz="quiz" @submit="checkResult"></irregular-verbs-quiz-input-row>
        <template v-for="(result, index) in quizResults">
          <irregular-verbs-result-row :result="result" :rowNumber="quizResults.length - index"></irregular-verbs-result-row>
        </template>
      </tbody>
    </table>
    <irregular-verbs-finish-result :quizScore="quizScore" :modalOpen="modalOpen" :enableTestFailures="enableTestFailures" @closeModal="closeModal" @testFailures="testFailures"></irregular-verbs-finish-result>
  </div>
</template>

<script>
import {getIrregularVerbs} from '../data/IrregularVerbs'
import IrregularVerbsQuizInputRow from './IrregularVerbsQuizInputRow'
import IrregularVerbsResultRow from './IrregularVerbsResultRow'
import IrregularVerbsFinishResult from './IrregularVerbsFinishResult'
import IrregularVerbsMenu from './IrregularVerbsMenu'

export default {
  name: 'irregular-verbs',
  components: {
    IrregularVerbsQuizInputRow,
    IrregularVerbsResultRow,
    IrregularVerbsFinishResult,
    IrregularVerbsMenu
  },
  data: function () {
    return {
      defaultMaxResults: 0,
      quiz: {},
      quizData: [],
      quizResults: [],
      modalOpen: false,
      maxResults: 0
    }
  },
  created () {
    this.getData(true)
    // this.maxResults = this.quizData.length
    this.defaultMaxResults = 10
    this.maxResults = this.defaultMaxResults
  },
  methods: {
    checkResult: function (result) {
      this.quizResults.unshift(result)
      this.nextQuiz()
    },
    nextQuiz: function () {
      let self = this
      this.quizData = this.quizData.filter(function (el) {
        return el.baseForm !== self.quiz.baseForm
      })
      this.setRamdomQuiz()
    },
    setRamdomQuiz () {
      if (this.quizData.length === 0) {
        this.quiz = null
      } else {
        this.quiz = this.quizData[Math.floor(Math.random() * this.quizData.length)]
      }
    },
    getData () {
      getIrregularVerbs(data => {
        this.quizData = data
        this.quizResults = []
        this.setRamdomQuiz()
      })
    },
    closeModal: function () {
      this.getData()
      this.maxResults = this.defaultMaxResults
      this.modalOpen = false
    },
    lengthChanged: function (length) {
      this.getData()
      this.maxResults = length === 0 ? this.quizData.length : length > this.quizData.length ? this.quizData.length : length
    },
    checkIsFinished: function () {
      if (this.quizResults.length === this.maxResults) {
        this.$ua.trackEvent('irregular-verbs', 'quiz-finished', this.quizResults.length, this.getScore())
        this.modalOpen = true
      }
    },
    testFailures: function () {
      this.quizData = this.quizResults.filter((result) => {
        return !result.correct
      })
      this.quizResults = []
      this.setRamdomQuiz()
      this.maxResults = this.quizData.length
      this.modalOpen = false
    },
    getScore: function () {
      let score = 0
      let responses = this.quizResults.length
      if (responses > 0) {
        score = this.quizResults.reduce((a, b) => a + b.correct, 0) * 100 / responses
      }
      return score
    }
  },
  computed: {
    quizScore: function () {
      let score = this.getScore()
      let responses = this.quizResults.length
      this.checkIsFinished()
      let success = responses > 0 ? 'Success ' + score.toFixed(2) + '% | ' : ''
      let responsesText = 'Compleated ' + responses + '/' + this.maxResults
      return success + responsesText
    },
    enableTestFailures: function () {
      let numErrors = this.quizResults.filter((result) => {
        return !result.correct
      }).length
      return numErrors > 0
    }
  }
}
</script>

<style scoped>
</style>
