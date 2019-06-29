<template>
  <page>
    <div class="col-sm-6">
      <answerSharing/>
    </div>
    <div class="col-sm-6">
      <imageSharing/>
    </div>
  </page>
</template>

<script>
// @ is an alias to /src
import imageSharing from '@/component-image-upload/imageSharing.vue'
import answerSharing from '@/component-answers/answerSharing.vue'

export default {
  name: 'home',
  components: {
    answerSharing,
    imageSharing
  }
}
</script>
<style scoped>
.col-sm-6 {
  border-left: solid rgb(0, 0, 0) 1px;
}

.col-sm-6:nth-child(2) {
  border-left: none;
}
</style>

