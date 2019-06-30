<template>
  <div class="all-send border rounded mt-2 w-100 shadow-sm p-2">
    <P class="h5">הוסף תמונה:</P>
    <form @submit.prevent="$emit('pushData', myImg)" class="w-100">
      <textarea name="" id="" cols="30" rows="3" v-model="myImg.text" required
        placeholder="כתוב מתכון או איפה הצטלמתם"></textarea>
      <input type="text" v-model="myImg.name" placeholder="שם פרטי" required>
      <input type="text" v-model="myImg.lestName" placeholder="שם משפחה" required>
      <input type="text" v-model="myImg.scoole" placeholder="בית ספר" required>
      <p>*פרטים למשלוח הפרס לזוכים (הכתובת המלאה לא תופיע באתר)</p>
      <input type="text" v-model="myImg.city" placeholder="ישוב" required>
      <input type="text" v-model="myImg.street" placeholder="רחוב" required>
      <input type="text" v-model="myImg.namHome" placeholder="מספר בית" required>
      <input type="file" @change="previewImage" placeholder="העלה תמונה" required>
      <div class="w-100 mt-2 center-all">
        <button type="submit" class="">שלח תמונה</button>
        <div @click="$emit('close')" class="butt-close mr-4">סגור</div>
      </div>
    </form>
  </div>
</template>

<script>
import Compressor from 'compressorjs';

  export default {
    name: 'ananswerWrite',
    props: ['answer'],
    data() {
      return {
        myImg: {
          name: "",
          lestName: "",
          scoole: "",
          img: "",
          text: "",
          city: "",
          street: "",
          namHome: "",
        }

      }
    },
    methods: {
      previewImage(event) {
        let file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          let asd = this
          new Compressor(file, {
            width: 250,
            quality: 0.6,
            success(result) {
              let timyImg = result;
              console.log(timyImg)
              reader.onload = () => {
                asd.myImg.img = reader.result;
              }
              reader.readAsDataURL(timyImg);

            },
          });
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

  form input[type="text"],
  form textarea {
    width: 75%;
    border: solid #706284 2px;
    border-radius: 20px;
    margin-top: 5px;
    padding: 1%;
    outline: none;
    background-color: #f5dfec;
  }
  form input[type="file"] {
    margin-top: 5px;
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
    .butt-close{
    border: none;
    background-color: #dc78b3;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }
</style>