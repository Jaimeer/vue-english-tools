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
          <th colspan="2" class="right">{{ quizScore }}</th>
        </tr>
      </tfoot>
      <tbody>
        <tr @keyup.enter="checkResult">
          <th><span>-</span></th>
          <td><span v-if="quiz">{{ quiz.baseForm }}</span></td>
          <td><input ref="pastSimple" v-model="form.pastSimple" class='input' type='text' placeholder='Past Simple' :disabled="!quiz" autofocus></td>
          <td><input ref="pastParticiple" v-model="form.pastParticiple" class='input' type='text' placeholder='Past Participle' :disabled="!quiz"></td>
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
    <div class="modal" :class="{ 'is-active': modalOpen }">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <article class="message is-primary">
          <div class="message-body center">
            <div class="finish-title">Quiz Finished</div>
            <div class="finish-message">{{ quizScore }}</div>
            <button class="button is-primary" @click="closeModal">Reset</button>
          </div>
        </article>
      </div>
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
      quizResults: [],
      modalOpen: false
    }
  },
  created () {
    this.getData(true)
  },
  mounted () {
    this.cleanForm()
  },
  watch: {
    '$route': 'cleanForm'
  },
  methods: {
    checkResult: function () {
      if (this.formValid()) {
        let result = this.quiz
        let correctPastSimple = this.form.pastSimple === this.quiz.pastSimple
        let correctPastParticiple = this.form.pastParticiple === this.quiz.pastParticiple
        result.correct = correctPastSimple && correctPastParticiple
        result.error = {}
        result.error.pastSimple = correctPastSimple ? null : this.form.pastSimple
        result.error.pastParticiple = correctPastParticiple ? null : this.form.pastParticiple
        this.quizResults.unshift(result)
        this.nextQuiz()
      }
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
      console.log(this.$refs)
      this.$refs.pastSimple.focus()
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
    getExternalUrl: function (text) {
      return 'http://www.wordreference.com/definition/' + text
    },
    closeModal: function () {
      this.cleanForm()
      this.getData()
      this.modalOpen = false
    },
    checkIsFinished: function () {
      // return this.quizData.length === 0 && this.quizResults.length > 0
      console.log('showFinish')
      // if (this.quizResults.length === 2) {
      if (this.quizData.length === 0 && this.quizResults.length > 0) {
        console.log('entro')
        this.modalOpen = true
      }
    },
    formValid: function () {
      return this.form.pasSimple !== '' && this.form.pastParticiple !== ''
    }
  },
  computed: {
    quizScore: function () {
      let score = 0
      let responses = this.quizResults.length
      let total = this.quizData.length + responses
      if (responses > 0) {
        score = this.quizResults.reduce((a, b) => a + b.correct, 0) * 100 / responses
      }
      this.checkIsFinished()
      let success = responses > 0 ? 'Success ' + score.toFixed(2) + '% | ' : ''
      let responsesText = 'Compleated ' + responses + '/' + total
      return success + responsesText
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
  .right {
    text-align: right
  }
  .center {
    text-align: center
  }
  .finish-message {
    margin: 20px 0px;
  }
  .finish-title {
    font-weight: bold
  }
  th span,
  td span {
    vertical-align: middle;
  }
</style>
