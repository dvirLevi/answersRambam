<template>
  <div>
    <div class="row">
      <div class="col">
      <titleAnswer/>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-6">
        <answerSharing />
      </div>
      <div class="col-sm-6">
        <imageSharing />
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