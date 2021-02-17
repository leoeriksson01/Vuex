<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
// @ Står för src mappen
// ./ betyder i samma mapp
// ../ betyder en mapp upp
import Navbar from "./components/Navbar.vue";

export default {
  // På detta sätt importerar vi externa komponenter
  components: {
    Navbar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap");
* {
  box-sizing: border-box;
  font-family: "font-family: 'Cinzel', serif;";
}
body {
  margin: 0;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
}
</style>
