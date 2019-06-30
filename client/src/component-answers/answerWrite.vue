<template>
  <div class="all-send border rounded mt-2 w-100 shadow-sm p-2">
    <P class="h5">הוסף תשובה:</P>
    <form @submit.prevent="$emit('pushData', answers)" class="w-100">
      <textarea name="" id="" cols="30" rows="3" v-model="answers.ans" required
        placeholder="כתוב תשובה לחידה היומית"></textarea>
      <input type="text" v-model="answers.name" placeholder="שם פרטי" required>
      <input type="text" v-model="answers.lestName" placeholder="שם משפחה" required>
      <input type="text" v-model="answers.scoole" placeholder="בית ספר" required>
      <p>*פרטים למשלוח הפרס לזוכים (הכתובת המלאה לא תופיע באתר)</p>
      <input type="text" v-model="answers.city" placeholder="ישוב" required>
      <input type="text" v-model="answers.street" placeholder="רחוב" required>
      <input type="number" v-model="answers.nam" placeholder="מספר בית" required>
      <div class="w-100 mt-2">
        <button type="submit" class="">שלח תשובה</button>
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
  .all-send {
    color: #b53f58;
    background-color: #f5dfec;
  }

  form input,
  form textarea {
    width: 75%;
    border: solid #706284 2px;
    border-radius: 20px;
    margin-top: 5px;
    padding: 1%;
    outline: none;
    background-color: #f5dfec;
  }

  form p {
    width: 75%;
    margin: 0 auto;
    font-size: 12px;
    text-align: right;
    font-weight: bold;
  }

  form button {
    border: none;
    background-color: #dc78b3;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }
</style>