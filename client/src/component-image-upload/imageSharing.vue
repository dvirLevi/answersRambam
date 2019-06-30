<template>
  <div class="center-all w-100">
    <div class="w-100 h2">התמונה שלי</div>
    <div class="center-all rols">
      <p>הייתם שם? ניסיתם? יש לכם מתכון? זה המקום להעלות תמונות שלכם מהמקומות עליהם למדנו בחוברת, תמונות מהפעילויות
        השונות
        בחוברת, קומיקסים שציירתם על פי המשימות השונות וגם- מתכונים. הכניסו תמונה וכתבו את המתכון.
        <span>יש לקבל את אישור ההורים.</span></p>
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
  button {
    border: none;
    background-color: #75ceb4;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }

  span {
    font-weight: bold;
  }

  .rols {
    border: solid #fbf6ce 2px;
    box-shadow: 1px 1px 5px 0px #c3c3c3;
    border-radius: 7px;
    padding: 9px;
  }
</style>