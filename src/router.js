import VueRouter from 'vue-router'
import Home from './components/Home'
import IrregularVerbs from './components/IrregularVerbs'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/tools/irregular-verbs', component: IrregularVerbs },
    { path: '*', redirect: '/' }
  ]
})

export default router
