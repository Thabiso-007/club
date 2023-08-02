<template>
  <router-view/>
</template>

<style>
#app {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/soccer.jpg");
  background-repeat: repeat;
  background-size: cover;
}

@media only screen and (max-width: 865px) {
  body {
    height: 150vh;
  }
}
</style>
