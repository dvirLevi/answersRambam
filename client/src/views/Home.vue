<template>
  <div>
    <div class="row">
      <div class="col">
        <titleAnswer />
      </div>
    </div>
    <div class="row mt-3 mb-4">
      <div class="col-sm-6">
        <answerSharing />
      </div>
      <div class="col-sm-6">
        <imageSharing />
      </div>
    </div>
     <div class="row">
      <div class="col push-bottom">
        מרכז
      </div>
    </div>
    <div class="row fixed-bottom">
      <div class="col">
        <p class="m-0">נבנה ופותח בAppsLife ליצירת קשר - <a href="mailto:dvirleviapp@gmail.com">לחץ כאן!</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import imageSharing from '@/component-image-upload/imageSharing.vue'
  import answerSharing from '@/component-answers/answerSharing.vue'
  import titleAnswer from '@/components/titleAnswer.vue'

  export default {
    name: 'home',
    components: {
      answerSharing,
      imageSharing,
      titleAnswer
    }
  }
</script>
<style scoped>
  .col-sm-6 {
    /* border-left: solid rgb(226, 226, 226) 2px; */
  }

  .col-sm-6:nth-child(2) {
    border-left: none;
  }

  .push-bottom{
    height: 50px;
  }

  .fixed-bottom {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    background-color: #ffffca;
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: #d91a5d;
  }
  a:hover {
    text-decoration: none;
    color: #d91a5d;
  }

  @media (max-width: 767.98px) {
    .col-sm-6 {
      border-left: none;
    }

    .col-sm-6:nth-child(2) {
      border-top: solid rgb(226, 226, 226) 2px;
      margin-top: 10px;
    }
  }
</style>