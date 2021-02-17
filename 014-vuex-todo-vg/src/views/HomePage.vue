<template>
  <div class="home-page">
    <h1>Ursäkter för att skolka från skolan</h1>
    <h3>Tryck på en toDo för att markera den som klar</h3>
    <toDoList />
  </div>
</template>

<script>
import toDo from "../components/toDo";
import toDoList from "../components/toDoListItem";

export default {
  components: {
    toDo,
    toDoList,
  },

  data() {
    return {};
  },
};
</script>

<style>
.home-page {
  background: rgba(128, 127, 126, 0.6);
  color: white;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  margin: auto;
  text-align: center;
  margin-top: 2%;
  width: 60%;
}
body {
  background: url("https://www.dresscoderanchi.com/wp-content/uploads/2019/12/A-Brief-Guide-to-purchasing-School-Uniforms.jpg");
}
h1 {
  font-size: 4em;
  color: white;
}
</style>
