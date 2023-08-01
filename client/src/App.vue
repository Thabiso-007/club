<template>
  <router-view/>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
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
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}

@media only screen and (max-width: 865px) {
  body {
    height: 150vh;
  }
}
</style>
