<template>
  <div class="center-all w-100">
    <div class="w-100 h2">השאלה היומית</div>
    <div class="center-all w-100">
      <img class="w-100" v-for="que in cotrrentImg" :key="que.id" :src="que.img" alt="">
    </div>
    <answerWrite @pushData="pushData" v-if="showInputs" />
    <div class="w-100 mt-2" v-if="!showInputs">
      <button type="button" class="btn btn-primary" @click="showInputs = !showInputs">הוסף תשובה</button>
    </div>
    <answerIn v-for="oneAns in addAnswers.answers" :key="oneAns.id" :answer="oneAns" />

  </div>
</template>

<script>
  import answerIn from '@/component-answers/answerIn.vue'
  import answerWrite from '@/component-answers/answerWrite.vue'
  import postService from '@/postService.js'
  // import answersJson from '@/helpers/answers.json'



  export default {
    name: 'answerSharing',
    components: {
      answerIn,
      answerWrite
    },
    props: {},
    data() {
      return {
        showInputs: false,
        addAnswers: {
          answers: []
        },
        queDate: [{
            date: '2019-06-27',
            img: [{
                img: require("../assets/1.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          },
          {
            date: '2019-06-28',
            img: [{
                img: require("../assets/1.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          },
          {
            date: '2019-06-29',
            img: [{
                img: require("../assets/1.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
        ]
      }
    },
    async created() {
      // try {
      //   this.addAnswers.answers = await postService.get();
      // } catch (err) {
      //   console.log(err)
      // }
      this.apdateAnswers()
    },
    computed: {
      cotrrentImg(){
       let arrImg = this.queDate.filter((value)=>{
             return value.date == this.formatDate();
        })
        
        return arrImg[0].img
      }

    },
    methods: {
      formatDate() {
        var d = new Date(),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
      },
      async pushData(data) {
        data.date = this.formatDate();
        try {
          await postService.insert(data);
          this.apdateAnswers();
        } catch (err) {
          console.log(err)
        }
      },
      async apdateAnswers() {
        try {
          let nowDate = await postService.get();
         this.addAnswers.answers = await nowDate.filter((value)=>{
               return value.date == this.formatDate();
          })
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