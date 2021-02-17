<template>
  <div class="addToDo">
    <h1>Lägg till en ursäkt i listan!</h1>

    <textarea
      rows="1"
      cols="30"
      v-model="newToDoName"
      placeholder="Skriv ditt namn här"
    />
    <br />
    <textarea
      rows="1"
      cols="30"
      v-model="newToDoExcuse"
      placeholder="Skriv din bästa ursäkt här"
    />
    <br />
    <br />
    <button v-on:click="add">Lägg till</button>
  </div>
</template>

<script>
import router from "../router/index.js";
export default {
  data() {
    return {
      newToDoName: null,
      newToDoExcuse: null,
    };
  },

  methods: {
    add() {
      const today = new Date().toLocaleString();
      let newToDo = {
        author: this.newToDoName,
        description: this.newToDoExcuse,
        date: today,
      };
      console.log(newToDo);
      this.$store.commit("addToDo", newToDo);
      router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 4em;
  color: white;
}
textarea {
  margin: 5px;
  font-size: 1.5em;
}
button {
  width: 15vh;
  height: 3vh;
  background: rgb(0, 0, 0);
  color: white;
  font-size: 1.2em;
}
button:hover {
  background: rgb(82, 81, 81);
  color: white;
}
.addToDo {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-top: 10%;
  padding: 1rem;
  transition: 0.5s;
  text-align: center;
  width: 60%;
}
</style>

