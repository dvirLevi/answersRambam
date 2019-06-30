<template>
  <div class="my-answer border rounded mt-2 w-100 p-2">
    <h5  class="w-100 text-right h5">התשובה של {{answer.name}} {{answer.lestName}}:</h5>
    <div class="w-100 text-right h6">{{answer.ans}}</div>
    <div class="center-all w-100">
      <!-- <div class="w-50 text-right h6">שם: {{answer.name}} {{answer.lestName}}</div> -->
      <div class="w-100 text-right h6">בית-ספר: {{answer.scoole}}</div>
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
.my-answer {
background-color: #bbe5d9;
}

</style>