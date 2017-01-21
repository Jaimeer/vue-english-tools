<template>
  <tr>
    <th>{{ rowNumber }}</th>
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
</template>

<script>
export default {
  name: 'irregular-verbs-result-row',
  props: ['result', 'rowNumber'],
  methods: {
    getExternalUrl: function (text) {
      return 'http://www.wordreference.com/definition/' + text
    }
  },
  watch: {
    'result': function (val, oldVal) {
      console.log('result', val, oldVal)
    }
  }
}
</script>

<style scoped>
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
  .help {
    display: inline
  }
</style>
