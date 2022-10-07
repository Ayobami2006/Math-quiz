<template>
  <div class="mb-5">
    <b-button class="bt bg-info" @click="$emit('changeOperator', '+')">
      Addition
      <br>+
    </b-button>
    <b-button class="bt bg-info" @click="$emit('changeOperator', '-')">
      Subtraction
      <br>-
    </b-button>
    <b-button class="bt bg-info" @click="$emit('changeOperator', '/')">
      Division<br>/
    </b-button>
    <b-button class="bt bg-info" @click="$emit('changeOperator', '*')">
      Multiplication
      <br>*
    </b-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
