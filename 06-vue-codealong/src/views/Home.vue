<template>
  <div class="home">
    <div class="logo-container">
      <img v-bind:src="logo" alt="Mario Logo" />
    </div>
    <div class="character-wrapper">
      <Character v-for="(char, i) in characters" v-bind:key="i"
       v-bind:character="char"/>
    </div>
  </div>
</template>

<script>
import marioLogo from "@/assets/MarioLogo.png";
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
          name: "Mario",
          picture:
            "https://images.discordapp.net/avatars/714550524829106296/dbca0456a7c8ffb479ce9c3c4780b5c6.png?size=512",
        },
        {
          name: "Luigi",
          picture:
            "https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-05c448849430556645c6c268e9aa086e.png",
        },
        {
          name: "Wario",
          picture:
            "https://screenshots.gamebanana.com/img/ico/sprays/wariogold.png",
        },
        {
          name: "Waluigi",
          picture:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e49ccc2-069c-49fc-95fe-4629161f02a6/d9vey09-82aafe3d-4c5d-4431-8756-181b974bd009.png/v1/fill/w_256,h_256,strp/waluigi_by_supersmasher1_d9vey09-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNTYiLCJwYXRoIjoiXC9mXC8yZTQ5Y2NjMi0wNjljLTQ5ZmMtOTVmZS00NjI5MTYxZjAyYTZcL2Q5dmV5MDktODJhYWZlM2QtNGM1ZC00NDMxLTg3NTYtMTgxYjk3NGJkMDA5LnBuZyIsIndpZHRoIjoiPD0yNTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1U4dYghU7POFHg22fOJM4OaBfhPxLROuduK17ZY9ZWk",
        },
        {
          name: "Yoshi",
          picture:
            "https://images6.fanpop.com/image/photos/35200000/Yoshi-yoshis-home-35255623-256-256.png",
        },
        {
          name: "Bowser",
          picture:
            "https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-86fdf162700c62d824dabfdd373eef07.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logo-container {
  margin: 1rem auto;
  width: 30%;
}

.logo-container img {
  width: 100%;
}

.character-wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  justify-content: center;
  margin-top: 2rem;
  grid-gap: 1rem;
  }
</style>