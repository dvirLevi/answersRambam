<template>
  <div class="center-all w-100">
    <div class="w-100 h2">התמונה שלי</div>
    <!-- <div class="center-all w-100">
      <img class="w-100" v-for="que in cotrrentImg" :key="que.id" :src="que.img" alt="">
    </div> -->
    <imageAdd @pushData="pushData" v-if="showInputs" />
    <div class="w-100 mt-2" v-if="!showInputs">
      <button type="button" class="btn btn-primary" @click="showInputs = !showInputs">הוסף תמונה</button>
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

</style>