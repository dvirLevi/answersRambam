<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Assistant:400,700&display=swap');

html, body{
  direction: rtl;
  font-family: 'Assistant', sans-serif;
  background-color: #ffffca !important;
  /* text-align: center; */
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
}
.center-all {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
