<template>
  <div class="home-page">
    <div class="logo-container">
      <img v-bind:src="logo" alt="" />
    </div>
    <div class="character-wrapper">
      <Character v-for="(char, i) in characters" :key="i" :character="char" />
    </div>
  </div>
</template>

<script>
import marioLogo from "../assets/harry-potter-logo-png-1.png";
import Character from "../components/Character";

export default {
  components: {
    Character,
  },

  data() {
    return {
      logo: marioLogo,
      characters: [
        {
          name: "HARRY",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw5txBhQBBbOQaIRnVLAsd11L05huXs0zrw&usqp=CAU",
        },
        {
          name: "RON",
          picture:
            "https://i.pinimg.com/originals/8a/20/5b/8a205bf5344e7a8c2d2b967de1c0d928.jpg",
        },
        {
          name: "HERMIONE",
          picture:
            "https://i.pinimg.com/originals/32/f2/b0/32f2b04bfa517b929aeea0d72c646e69.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.logo-container {
  margin: 1rem auto;
  width: 40%;
}
.logo-container img {
  width: 100%;
}
.character-wrapper {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 250px);
  justify-content: center;
}
</style>
