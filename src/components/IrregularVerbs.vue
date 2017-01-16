<template>
  <div class='irregular-verbs'>
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
          <th></th>
          <th>{{ quizScore }}</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th>-</th>
          <td><span v-if="quiz">{{ quiz.baseForm }}</span></td>
          <td><input v-model="form.pastSimple" class='input' type='text' placeholder='Past Simple' :disabled="!quiz"></td>
          <td><input v-model="form.pastParticiple" class='input' type='text' placeholder='Past Participle' :disabled="!quiz"></td>
          <td><button class='button is-primary' @click="checkResult" :disabled="!quiz || !formValid">Check</button></td>
        </tr>
        <tr v-for="(result, index) in quizResults">
          <th>{{ quizResults.length - index }}</th>
          <td><a :href="getExternalUrl(result.baseForm)" target="_banck">{{ result.baseForm }}</a></td>
          <td>
            {{ result.pastSimple }}
            <span v-if="result.error.pastSimple" class="help is-danger"> {{ result.error.pastSimple }}</span>
          </td>
          <td>
            {{ result.pastParticiple }}
            <span v-if="result.error.pastParticiple" class="help is-danger"> {{ result.error.pastParticiple }}</span>
          </td>
          <td>
            <span v-show="result.correct" class="tag is-outlined is-small is-success"><i class="fa fa-check"></i></span>
            <span v-show="!result.correct" class="tag is-outlined is-small is-danger"><i class="fa fa-times"></i></span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="showFinish">
      Finish
    </div>
  </div>
</template>

<script>
import {getIrregularVerbs} from '../data/IrregularVerbs'

export default {
  name: 'irregular-verbs',
  data: function () {
    return {
      quiz: {},
      form: {
        pastSimple: '',
        pastParticiple: ''
      },
      quizData: [],
      quizResults: []
    }
  },
  created () {
    this.getData(true)
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    checkResult: function () {
      let result = this.quiz
      let correctPastSimple = this.form.pastSimple === this.quiz.pastSimple
      let correctPastParticiple = this.form.pastParticiple === this.quiz.pastParticiple
      result.correct = correctPastSimple && correctPastParticiple
      result.error = {}
      result.error.pastSimple = correctPastSimple ? null : this.form.pastSimple
      result.error.pastParticiple = correctPastParticiple ? null : this.form.pastParticiple
      this.quizResults.unshift(result)
      this.nextQuiz()
    },
    nextQuiz: function () {
      let self = this
      this.quizData = this.quizData.filter(function (el) {
        return el.baseForm !== self.quiz.baseForm
      })
      this.cleanForm()
      this.setRamdomQuiz()
    },
    cleanForm: function () {
      this.form = { pastSimple: '', pastParticiple: '' }
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
        this.setRamdomQuiz()
      })
    },
    getExternalUrl: function (text) {
      return 'http://www.wordreference.com/definition/' + text
    }
  },
  computed: {
    quizScore: function () {
      let score = 0
      if (this.quizResults.length > 0) {
        score = this.quizResults.reduce((a, b) => a + b.correct, 0) * 100 / this.quizResults.length
      }
      return score.toFixed(2) + '%'
    },
    formValid: function () {
      return this.form.pasSimple !== '' && this.form.pastParticiple !== ''
    },
    showFinish: function () {
      return this.quizData.length === 0 && this.quizResults.length > 0
    }
  }
}
</script>

<style scoped>
  .irregular-verbs {
  }
  .help {
    display: inline
  }
  .tag.is-danger.is-outlined {
    background-color: transparent;
    border-color: #ff3860;
    color: #ff3860;    
    border: 1px solid;
  }
  .tag.is-success.is-outlined {
    background-color: transparent;
    border-color: #23d160;
    color: #23d160;
    border: 1px solid;
  }
</style>
