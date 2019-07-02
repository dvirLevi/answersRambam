<template>
  <div class="center-all w-100">
    <div class="title w-100 center-all">
      <img src="../assets/question.png" alt="">
      <p class="h2 font-weight-bold m-0">השאלה היומית</p>
    </div>
    <div class="center-all w-100">
      <div @click="showMenu = !showMenu" class="selector d-flex align-items-center justify-content-between"><div>{{textSelector}}</div><div class="">&#9660;</div>
        <div v-if="showMenu" class="menu-selector center-all">
          <p class="w-100" v-for="date in queDate" @click="selectAnswer(date)" :key="date.date">{{date.dateH}}</p>
        </div>
      </div>
    </div>

    <div class="img-answer center-all w-100">
      <div v-if="formatDate != null">
        <img class="w-100 mt-1" v-for="que in cotrrentImg" :key="que.id" :src="que.img" alt="">
      </div>
      <answerInterodction v-if="formatDate == null" />
    </div>
    <div v-if="formatDate != null" class="w-100">
      <answerWrite v-if="showInputs" @close="showInputs = !showInputs" @pushData="pushData" />
      <div v-if="!showInputs" class="w-100 mt-2">
        <button type="button" class="" @click="showInputs = !showInputs">הוסיפו את התשובה שלכם</button>
      </div>
      <answerIn v-for="oneAns in addAnswers.answers" :key="oneAns.id" :answer="oneAns" />
    </div>
  </div>
</template>

<script>
  import answerIn from '@/component-answers/answerIn.vue'
  import answerWrite from '@/component-answers/answerWrite.vue'
  import answerInterodction from '@/component-answers/answerInterodction.vue'
  import postService from '@/postService.js'
  // import answersJson from '@/helpers/answers.json'



  export default {
    name: 'answerSharing',
    components: {
      answerIn,
      answerWrite,
      answerInterodction
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
            dateH: 'כ"ח סיון',
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
            dateH: 'כ"ט סיון',
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
            dateH: 'א תמוז',
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
            dateH: 'ד תמוז',
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
            dateH: 'ו תמוז',
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
            dateH: 'ח תמוז',
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
            dateH: 'ט תמוז',
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
            dateH: 'י"ב תמוז',
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
            dateH: 'י"ג תמוז',
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
            dateH: 'ט"ו תמוז',
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
            dateH: 'י"ט תמוז',
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
            dateH: 'כ"א תמוז',
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
            dateH: 'כ"ח תמוז',
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
            dateH: 'י"ב אב',
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
            dateH: 'י"ט אב',
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
            dateH: 'כ"ו אב',
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
        this.textSelector = date.dateH;
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
.title img {
  width: 10%;
}
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
    border: solid #d91a5d 2px;
    width: 45%;
    font-weight: bold;
    padding: 1%;
    border-radius: 20px;
    margin: 2%;
    position: relative;
    cursor: pointer;
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
    padding: 8px
  }

   .menu-selector p{
    border-bottom: solid #dedede 2px;
    margin: 2px;
    cursor: pointer;
  }
</style>