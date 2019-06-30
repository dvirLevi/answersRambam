<template>
  <div class="center-all w-100">
    <div class="w-100 h2">השאלה היומית</div>
    <div class="img-answer center-all w-100">
      <img class="w-100" v-for="que in cotrrentImg" :key="que.id" :src="que.img" alt="">
    </div>
    <answerWrite @close="showInputs = !showInputs" @pushData="pushData" v-if="showInputs" />
    <div class="w-100 mt-2" v-if="!showInputs">
      <button type="button" class="" @click="showInputs = !showInputs">הוסיפו את התשובה שלכם</button>
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
            // date: '2019-07-1',
            date: '2019-06-30',

            img: [{
                img: require("../assets/2-1.png"),
                id: 1
              },
              {
                img: require("../assets/2-2.png"),
                id: 2
              },
            ]
          },
          {
            date: '2019-07-02',
            img: [{
                img: require("../assets/3-1.png"),
                id: 1
              },
              {
                img: require("../assets/3-2.png"),
                id: 2
              },
            ]
          },
          {
            date: '2019-07-02',
            img: [{
                img: require("../assets/5.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-07',
            img: [{
                img: require("../assets/8.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-09',
            img: [{
                img: require("../assets/10.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-11',
            img: [{
                img: require("../assets/12-1.png"),
                id: 1
              },
              {
                img: require("../assets/12-2.png"),
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-12',
            img: [{
                img: require("../assets/13.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-15',
            img: [{
                img: require("../assets/16.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-16',
            img: [{
                img: require("../assets/17.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-18',
            img: [{
                img: require("../assets/19.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-22',
            img: [{
                img: require("../assets/23.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-24',
            img: [{
                img: require("../assets/25.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-07-31',
            img: [{
                img: require("../assets/32-1.png"),
                id: 1
              },
              {
                img: require("../assets/32-2.png"),
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-08-13',
            img: [{
                img: require("../assets/45.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-08-20',
            img: [{
                img: require("../assets/52.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          }
          ,
          {
            date: '2019-08-27',
            img: [{
                img: require("../assets/59.png"),
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
.img-answer {
border: solid #fbf6ce 2px;
    box-shadow: 1px 1px 5px 0px #c3c3c3;
    border-radius: 7px;
    padding: 9px;
}
button {
    border: none;
    background-color: #75ceb4;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }
    
</style>