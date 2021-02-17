<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
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
</style>
