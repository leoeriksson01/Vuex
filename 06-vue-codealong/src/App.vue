<template>
  <div id="app">
<Navbar/>
    <router-view />
  </div>
</template>

<script>
// @ Står för src mappen
// ./ betyder i samma mapp
// ../ betyder en mapp upp
  import Navbar from "./components/Navbar.vue"
  
  export default {
    // På detta sätt importerar vi externa komponenter
    components: {
      Navbar

    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
* {
  box-sizing: border-box;
  font-family: "Press Start 2P"
  }
  body {
    margin: 0;
    background: url("https://cdn.wallpapersafari.com/75/45/pzY3tD.jpg");
    background-size: cover;
    margin: 0;
    min-height: 100vh;
    }
</style>
