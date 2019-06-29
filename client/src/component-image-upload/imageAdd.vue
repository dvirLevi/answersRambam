<template>
  <div class="border rounded mt-2 w-100 shadow-sm p-2">
    <P class="h5">הוסף תמונה:</P>
    <form @submit.prevent="$emit('pushData', myImg)" class="w-100">
      <textarea name="" id="" cols="30" rows="3" v-model="myImg.text" required
        placeholder="כתוב מתכון או איפה הצטלמתם"></textarea>
      <input type="text" v-model="myImg.name" placeholder="שם פרטי" required>
      <input type="text" v-model="myImg.lestName" placeholder="שם משפחה" required>
      <input type="text" v-model="myImg.scoole" placeholder="בית ספר" required>
      <input type="text" v-model="myImg.city" placeholder="ישוב" required>
      <input type="text" v-model="myImg.street" placeholder="רחוב" required>
      <input type="text" v-model="myImg.namHome" placeholder="מספר בית" required>
      <input type="file" @change="previewImage" placeholder="העלה תמונה" required>
      <div class="w-100 mt-2">
        <button type="submit" class="btn btn-success">שלח תמונה</button>
      </div>
    </form>
  </div>
</template>

<script>
import compressor from "compressorjs";

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
            width: 150,
            quality: 0.6,
            success(result) {
              let timyImg = result;
              console.log(timyImg)
              reader.onload = (event) => {
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
  form input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }
</style>