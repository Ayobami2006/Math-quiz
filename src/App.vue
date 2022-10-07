<template>
  <div id="app">
    <h1 class="mb-5">Math Quiz App</h1>
    <OperatorQuiz @onBack="clearOperator" v-if="operator" :operator="operator" />
    <OperatorSelector v-if="!operator" @changeOperator="changeOperator" />

    <b-button @click="goToCalculator()" class="bt mt-5 mb-5">Calculator</b-button>
    <router-view/>
    <!-- <Calculator /> -->
  </div>
</template>

<script>
import OperatorSelector from './components/OperatorSelector.vue'
import OperatorQuiz from './components/OperatorQuiz.vue'
// import Calculator from './components/Calculator.vue'

export default {
  name: 'App',

  components: {
    OperatorSelector,
    OperatorQuiz
  },

  data () {
    return {
      operator: null
    }
  },
  methods: {
    changeOperator (operator) {
      this.operator = operator
    },

    clearOperator () {
      this.operator = null
    },

    goToCalculator: function () {
      this.$router.push({path: '/calculator'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 25px;
}

.bt {
  width: 150px;
  height: 80px;
  padding: 10px;
  margin-right: 10px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  vertical-align: top;
}
</style>
