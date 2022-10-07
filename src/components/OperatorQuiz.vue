<template>
  <div>
    <div v-if="isQuizStarted">
      <h4>{{operandLeft}} {{operator}} {{operandRight}}</h4>

      <b-button @click="selectAnswer(answer)"
        v-for="(answer, index) of answers" :key="index"
        class="bt bg-primary">{{answer}}
      </b-button>
    </div>

    <div v-if="!isQuizStarted">
      <b-button @click="startQuiz" class="bt bg-success">Start</b-button>
    </div>

    <b-button @click="$emit('onBack')" class="bt bg-danger">Back</b-button>
  </div>
</template>

<script>
export default {
  props: ['operator'],

  data () {
    return {
      isQuizStarted: false,
      operandLeft: null,
      operandRight: null,
      answers: [],
      expectedAnswer: null
    }
  },
  methods: {
    selectAnswer (answerSelected) {
      if (answerSelected !== this.expectedAnswer) {
        alert('WRONG ANSWER')
      }
      this.startQuiz()
    },
    startQuiz () {
      this.isQuizStarted = true
      this.operandLeft = parseInt(Math.random() * 13)
      this.operandRight = parseInt(Math.random() * 13)

      const methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b
      }

      const methodToUse = methods[this.operator]

      this.answers = []

      this.answers.push(methodToUse(this.operandLeft, this.operandRight + 1))
      this.answers.push(methodToUse(this.operandLeft + 1, this.operandRight))
      this.answers.push(methodToUse(
        this.operandLeft + 1, this.operandRight + 1)
      )
      this.answers.push(methodToUse(
        this.operandLeft - 1, this.operandRight + 1)
      )
      this.answers.push(methodToUse(this.operandLeft - 1, this.operandRight - 2))

      const expectedAnswer = methodToUse(this.operandLeft, this.operandRight)

      this.answers[parseInt(Math.random() * this.answers.length)] = expectedAnswer
      this.expectedAnswer = expectedAnswer
    }
  }
}

// parseInt(Math.random() * 3),
</script>

<style>

</style>
