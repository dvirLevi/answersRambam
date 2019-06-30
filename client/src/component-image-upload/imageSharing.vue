<template>
  <div class="center-all w-100">
    <div class="title w-100 center-all">
      <img  src="../assets/camera.png" alt="">
      <p class="h2 font-weight-bold m-0">התמונה שלי</p>
    </div>
    <div class="center-all rols">
      <p>הייתם שם? ניסיתם? יש לכם מתכון? </p>
      <p>זה המקום להעלות תמונות שלכם מהמקומות עליהם למדנו בחוברת, תמונות מהפעילויות
        השונות
        בחוברת,</p>
      <p> קומיקסים שציירתם על פי המשימות השונות וגם- מתכונים. הכניסו תמונה וכתבו את המתכון.
      </p>
      <p>-יש לקבל את אישור ההורים-</p>
    </div>
    <imageAdd @close="showInputs = !showInputs" @pushData="pushData" v-if="showInputs" />
    <div class="w-100 mt-2" v-if="!showInputs">
      <button type="button" class="" @click="showInputs = !showInputs">הוסיפו את התמונה שלכם</button>
    </div>
    <imageIn v-for="oneImg in addImg" :key="oneImg.id" :oneImg="oneImg" />

  </div>
</template>

<script>
  import imageIn from '@/component-image-upload/imageIn.vue'
  import imageAdd from '@/component-image-upload/imageAdd.vue'
  import postService from '@/postService.js'
  // import answersJson from '@/helpers/answers.json'



  export default {
    name: 'imageSharing',
    components: {
      imageIn,
      imageAdd
    },
    props: {},
    data() {
      return {
        showInputs: false,
        addImg: []
      }
    },
    created() {
      this.apdateImages();
    },
    computed: {


    },
    methods: {
      async pushData(data) {
        try {
          await postService.insert(data, "image");
          this.apdateImages();
        } catch (err) {
          console.log(err)
        }
      },
      async apdateImages() {
        try {
          this.addImg = await postService.get("image");
          this.showInputs = false;
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title img {
  width: 15%;
  margin: 2%
}
  button {
    border: none;
    background-color: #75ceb4;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }

  p {
    font-weight: bold;
    margin: 0;
  }

  .rols {
    -webkit-box-shadow: 0px 0px 3px 2px #c3c3c3;
    border-radius: 7px;
    padding: 9px;
  }
</style>