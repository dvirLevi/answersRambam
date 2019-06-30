<template>
  <div class="center-all w-100">
    <div class="w-100 h2 font-weight-bold">השאלה היומית</div>
    <div class="center-all w-100">
      <div @click="showMenu = !showMenu" class="selector">{{textSelector}}
        <div v-if="showMenu" class="menu-selector center-all">
          <p class="w-100" v-for="date in queDate" @click="selectAnswer(date)" :key="date.date">{{date.date}}</p>
        </div>
      </div>
    </div>
    <div v-if="formatDate != null" class="img-answer center-all w-100">
      <img class="w-100 mt-1" v-for="que in cotrrentImg" :key="que.id" :src="que.img" alt="">
    </div>
    <answerWrite v-if="formatDate != null && showInputs" @close="showInputs = !showInputs" @pushData="pushData" />
    <div v-if="formatDate != null && !showInputs" class="w-100 mt-2">
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
        textSelector: "בחר תאריך",
        showMenu: false,
        formatDate: null,
        queDate: [{
            date: '2019-07-01',

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
            date: '2019-07-03',
            img: [{
                img: require("../assets/5.png"),
                id: 1
              },
              {
                img: "",
                id: 2
              },
            ]
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
          },
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
      // this.apdateAnswers()
    },
    computed: {
      cotrrentImg() {
        let arrImg = this.queDate.filter((value) => {
          return value.date == this.formatDate;
        })
        return arrImg[0].img

      }

    },
    methods: {
      selectAnswer(date) {
        this.formatDate = date.date;
        this.apdateAnswers();
      },
      async pushData(data) {
        alert()
        data.date = this.formatDate;
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
          this.addAnswers.answers = await nowDate.filter((value) => {
            return value.date == this.formatDate;
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
    /* border: solid #fbf6ce 2px; */
    box-shadow: 0px 0px 3px 2px #c3c3c3;
    border-radius: 7px;
    padding: 9px;
  }

  .img-answer img {
    border-radius: 7px;
  }

  button {
    border: none;
    background-color: #75ceb4;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    color: #501925;
  }

  .selector {
    border: solid red 2px;
    width: 45%;
    font-weight: bold;
    padding: 1%;
    border-radius: 20px;
    margin: 2%;
    position: relative;
  }

  .menu-selector {
    position: absolute;
    width: 100%;
    top: 116%;
    left: 1%;
    background-color: #ffffff;
    height: 400px;
    overflow-x: auto;
    z-index: 1;
  }
</style>