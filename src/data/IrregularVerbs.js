const data = [
  { baseForm: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken' },
  { baseForm: 'be', pastSimple: 'was, were', pastParticiple: 'been' },
  { baseForm: 'beat', pastSimple: 'beat', pastParticiple: 'beaten' },
  { baseForm: 'become', pastSimple: 'became', pastParticiple: 'become' },
  { baseForm: 'begin', pastSimple: 'began', pastParticiple: 'begun' },
  { baseForm: 'bend', pastSimple: 'bent', pastParticiple: 'bent' }
]

export function getIrregularVerbs (cb) {
  cb(data)
}
