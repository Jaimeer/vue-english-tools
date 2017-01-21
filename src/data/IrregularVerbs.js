
const data = [
  { baseForm: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken' },
  { baseForm: 'be', pastSimple: 'was, were', pastParticiple: 'been' },
  { baseForm: 'beat', pastSimple: 'beat', pastParticiple: 'beaten' },
  { baseForm: 'become', pastSimple: 'became', pastParticiple: 'become' },
  { baseForm: 'begin', pastSimple: 'began', pastParticiple: 'begun' },
  { baseForm: 'bend', pastSimple: 'bent', pastParticiple: 'bent' },
  { baseForm: 'bet', pastSimple: 'bet', pastParticiple: 'bet' },
  { baseForm: 'bid', pastSimple: 'bid', pastParticiple: 'bid' },
  { baseForm: 'bite', pastSimple: 'bit', pastParticiple: 'bitten' },
  { baseForm: 'blow', pastSimple: 'blew', pastParticiple: 'blown' },
  { baseForm: 'break', pastSimple: 'broke', pastParticiple: 'broken' },
  { baseForm: 'bring', pastSimple: 'brought', pastParticiple: 'brought' },
  { baseForm: 'broadcast', pastSimple: 'broadcast', pastParticiple: 'broadcast' },
  { baseForm: 'build', pastSimple: 'built', pastParticiple: 'built' },
  { baseForm: 'burn', pastSimple: 'burnt', pastParticiple: 'burnt' },
  { baseForm: 'buy', pastSimple: 'bought', pastParticiple: 'bought' },
  { baseForm: 'catch', pastSimple: 'caught', pastParticiple: 'caught' },
  { baseForm: 'choose', pastSimple: 'chose', pastParticiple: 'chosen' },
  { baseForm: 'come', pastSimple: 'came', pastParticiple: 'come' },
  { baseForm: 'cost', pastSimple: 'cost', pastParticiple: 'cost' },
  { baseForm: 'cut', pastSimple: 'cut', pastParticiple: 'cut' },
  { baseForm: 'dig', pastSimple: 'dug', pastParticiple: 'dug' },
  { baseForm: 'do', pastSimple: 'did', pastParticiple: 'done' },
  { baseForm: 'draw', pastSimple: 'drew', pastParticiple: 'drawn' },
  { baseForm: 'dream', pastSimple: 'dreamt', pastParticiple: 'dreamt' },
  { baseForm: 'drive', pastSimple: 'drove', pastParticiple: 'driven' },
  { baseForm: 'drink', pastSimple: 'drank', pastParticiple: 'drunk' },
  { baseForm: 'eat', pastSimple: 'ate', pastParticiple: 'eaten' },
  { baseForm: 'fall', pastSimple: 'felt', pastParticiple: 'fallen' },
  { baseForm: 'feel', pastSimple: 'felt', pastParticiple: 'felt' },
  { baseForm: 'fight', pastSimple: 'fought', pastParticiple: 'fought' },
  { baseForm: 'find', pastSimple: 'found', pastParticiple: 'found' },
  { baseForm: 'fly', pastSimple: 'flew', pastParticiple: 'flown' },
  { baseForm: 'forget', pastSimple: 'forgot', pastParticiple: 'forgotten' },
  { baseForm: 'forgive', pastSimple: 'forgave', pastParticiple: 'forgiven' },
  { baseForm: 'freeze', pastSimple: 'froze', pastParticiple: 'frozen' },
  { baseForm: 'get', pastSimple: 'got', pastParticiple: 'got' },
  { baseForm: 'go', pastSimple: 'went', pastParticiple: 'gone' },
  { baseForm: 'grow', pastSimple: 'grew', pastParticiple: 'grown' },
  { baseForm: 'hang', pastSimple: 'hung', pastParticiple: 'hung' },
  { baseForm: 'have', pastSimple: 'had', pastParticiple: 'had' },
  { baseForm: 'hear', pastSimple: 'heard', pastParticiple: 'heard' },
  { baseForm: 'hide', pastSimple: 'hid', pastParticiple: 'hidden' },
  { baseForm: 'hit', pastSimple: 'hit', pastParticiple: 'hit' },
  { baseForm: 'hold', pastSimple: 'held', pastParticiple: 'held' },
  { baseForm: 'hurt', pastSimple: 'hurt', pastParticiple: 'hurt' },
  { baseForm: 'keep', pastSimple: 'kept', pastParticiple: 'kept' },
  { baseForm: 'know', pastSimple: 'knew', pastParticiple: 'known' },
  { baseForm: 'lay', pastSimple: 'laid', pastParticiple: 'laid' },
  { baseForm: 'lead', pastSimple: 'led', pastParticiple: 'led' },
  { baseForm: 'learn', pastSimple: 'learnt', pastParticiple: 'learnt' },
  { baseForm: 'leave', pastSimple: 'left', pastParticiple: 'left' },
  { baseForm: 'lend', pastSimple: 'led', pastParticiple: 'led' },
  { baseForm: 'let', pastSimple: 'let', pastParticiple: 'let' },
  { baseForm: 'lie', pastSimple: 'lay', pastParticiple: 'lain' },
  { baseForm: 'lose', pastSimple: 'lost', pastParticiple: 'lost' },
  { baseForm: 'make', pastSimple: 'made', pastParticiple: 'made' },
  { baseForm: 'mean', pastSimple: 'meant', pastParticiple: 'meant' },
  { baseForm: 'meet', pastSimple: 'met', pastParticiple: 'met' },
  { baseForm: 'pay', pastSimple: 'paid', pastParticiple: 'paid' },
  { baseForm: 'put', pastSimple: 'put', pastParticiple: 'put' },
  { baseForm: 'read', pastSimple: 'read', pastParticiple: 'read' },
  { baseForm: 'ride', pastSimple: 'rode', pastParticiple: 'ridden' },
  { baseForm: 'ring', pastSimple: 'rang', pastParticiple: 'rung' },
  { baseForm: 'rise', pastSimple: 'rose', pastParticiple: 'risen' },
  { baseForm: 'run', pastSimple: 'ran', pastParticiple: 'run' },
  { baseForm: 'say ', pastSimple: 'said', pastParticiple: 'said' },
  { baseForm: 'see', pastSimple: 'saw', pastParticiple: 'seen' },
  { baseForm: 'sell', pastSimple: 'sold', pastParticiple: 'sold' },
  { baseForm: 'send', pastSimple: 'sent', pastParticiple: 'sent' },
  { baseForm: 'show', pastSimple: 'showed', pastParticiple: 'shown' },
  { baseForm: 'shut', pastSimple: 'shut', pastParticiple: 'shut' },
  { baseForm: 'sing', pastSimple: 'sang', pastParticiple: 'sung' },
  { baseForm: 'sink', pastSimple: 'sank', pastParticiple: 'sunk' },
  { baseForm: 'sit', pastSimple: 'sat', pastParticiple: 'sat' },
  { baseForm: 'sleep', pastSimple: 'slept', pastParticiple: 'slept' },
  { baseForm: 'speak', pastSimple: 'spoke', pastParticiple: 'spoken' },
  { baseForm: 'spend', pastSimple: 'spent', pastParticiple: 'spent' },
  { baseForm: 'stand', pastSimple: 'stood', pastParticiple: 'stood' },
  { baseForm: 'stink', pastSimple: 'stank', pastParticiple: 'stunk' },
  { baseForm: 'swim', pastSimple: 'swam', pastParticiple: 'swum' },
  { baseForm: 'take', pastSimple: 'took', pastParticiple: 'taken' },
  { baseForm: 'teach', pastSimple: 'taught', pastParticiple: 'taught' },
  { baseForm: 'tear', pastSimple: 'tore', pastParticiple: 'torn' },
  { baseForm: 'tell', pastSimple: 'told', pastParticiple: 'told' },
  { baseForm: 'think', pastSimple: 'thought', pastParticiple: 'thought' },
  { baseForm: 'throw', pastSimple: 'threw', pastParticiple: 'thrown' },
  { baseForm: 'understand', pastSimple: 'understood', pastParticiple: 'understood' },
  { baseForm: 'wake', pastSimple: 'woke', pastParticiple: 'woken' },
  { baseForm: 'wear', pastSimple: 'wore', pastParticiple: 'worn' },
  { baseForm: 'win', pastSimple: 'won', pastParticiple: 'won' },
  { baseForm: 'write', pastSimple: 'wrote', pastParticiple: 'written' }
]

/*
const data2 = [
  { baseForm: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken' },
  { baseForm: 'win', pastSimple: 'won', pastParticiple: 'won' }
]
*/

export function getIrregularVerbs (cb) {
  cb(data)
}
