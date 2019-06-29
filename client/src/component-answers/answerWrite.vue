<template>
  <div class="border rounded mt-2 w-100 shadow-sm p-2">
    <P class="h5">הוסף תשובה:</P>
    <form @submit.prevent="$emit('pushData', answers)" class="w-100">
      <textarea name="" id="" cols="30" rows="3" v-model="answers.ans" required placeholder="כתוב תשובה"></textarea>
      <input type="text" v-model="answers.name" placeholder="שם פרטי" required >
      <input type="text" v-model="answers.lestName" placeholder="שם משפחה" required >
      <input type="text" v-model="answers.scoole" placeholder="בית ספר" required >
      <input type="text" v-model="answers.city" placeholder="ישוב" required >
      <input type="text" v-model="answers.street" placeholder="רחוב" required >
      <input type="text" v-model="answers.nam" placeholder="מספר בית" required >
      <div class="w-100 mt-2">
      <button type="submit" class="btn btn-success">שלח תשובה</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ananswerWrite',
    props: ['answer'],
    data() {
      return {
        answers: {
            name: "",
            lestName: "",
            scoole: "",
            ans: "",
            city: "",
            street: "",
            namHome: "",
          }
    
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form input {
  width: 100%;
}
textarea {
  width: 100%;
}

</style>