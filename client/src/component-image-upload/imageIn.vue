<template>
  <div class="my-img border rounded mt-2 w-100 center-all">
    <h5 class="w-100">{{oneImg.text}}</h5>
    <div class="center-all ">
      <img :src="oneImg.img" alt="">
    </div>
    <p class="w-100 h6 text-right p-2 m-0">שם: {{oneImg.name}} {{oneImg.lestName}} - {{oneImg.city}} | בית-ספר:
      {{oneImg.scoole}}</p>
  </div>
</template>

<script>
  export default {
    name: 'answerIn',
    props: ['oneImg'],
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-img {
    background-color: #bbe5d9;
  }

  .my-img img {
    max-height: 200px;
    border-radius: 6px;
  }
</style>