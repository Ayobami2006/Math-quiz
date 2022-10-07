<template>
  <div class="calculator shadow-lg mb-5">
    <div class="display">{{current || '0'}}</div>
    <div @click="clear()" class="bn">C</div>
    <div @click="sign" class="bn">+/-</div>
    <div @click="percent()" class="bn">%</div>
    <div @click="divide" class="bn operator">/</div>
    <div @click="append('7')" class="bn">7</div>
    <div @click="append('8')" class="bn">8</div>
    <div @click="append('9')" class="bn">9</div>
    <div @click="times" class="bn operator">x</div>
    <div @click="append('4')" class="bn">4</div>
    <div @click="append('5')" class="bn">5</div>
    <div @click="append('6')" class="bn">6</div>
    <div @click="minus" class="bn operator">-</div>
    <div @click="append('1')" class="bn">1</div>
    <div @click="append('2')" class="bn">2</div>
    <div @click="append('3')" class="bn">3</div>
    <div @click="add" class="bn operator">+</div>
    <div @click="append('0')" class="bn zero">0</div>
    <div @click="dot" class="bn">.</div>
    <div @click="equal" class="bn operator">=</div>
  </div>
</template>

<script>

export default {
  name: 'Calculator',

  data () {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false
    }
  },

  methods: {
    clear () {
      this.current = ''
    },

    sign () {
      this.current =
      this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
    },

    percent () {
      this.current = `${parseFloat(this.current) / 100}`
    },

    append (number) {
      if (this.operatorClicked) {
        this.current = ''
        this.operatorClicked = false
      }
      this.current = `${this.current}${number}`
    },

    dot () {
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },

    setPrevious () {
      this.previous = this.current
      this.operatorClicked = true
    },

    divide () {
      this.operator = (a, b) => a / b
      this.setPrevious()
    },

    times () {
      this.operator = (a, b) => a * b
      this.setPrevious()
    },

    minus () {
      this.operator = (a, b) => a - b
      this.setPrevious()
    },

    add () {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },

    equal () {
      this.current = `${this.operator(parseFloat(this.current), parseFloat(this.previous))}`
      this.previous = null
    }
  }
}
</script>

<style>
.calculator {
  width: 400px;
  margin: 0 auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}

.zero {
  grid-column: 1 / 3;
}

.bn {
  background-color: #f2f2f2;
  border: 1px solid #999;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
