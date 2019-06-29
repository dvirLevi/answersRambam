<template>
  <div class="border rounded mt-2 w-100">
    <div class="w-100">תשובה: {{answer.ans}}</div>
    <div class="center-all w-100">
      <div class="w-50 text-center">שם: {{answer.name}} {{answer.lestName}}</div>
      <div class="w-50 text-center">ביה"ס: {{answer.scoole}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'answerIn',
    props: ['answer'],
    data() {
      return {
    
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>