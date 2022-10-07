import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/Calculator'
// import OperatorSelector from '@/components/OperatorSelector'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    }
    // {
    //   path: '/operator',
    //   name: 'OperatorSelector',
    //   component: OperatorSelector
    // }
  ]
})
