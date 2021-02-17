<template>
  <div class="createToDo">
    <span>
      {{ toDo.author }}: "{{ toDo.description }}" Datum: {{ toDo.date }}
      <button @click="removeToDo">Ta bort</button>
    </span>
  </div>
</template>

<script>
export default {
  props: ["toDo"],
  methods: {
    removeToDo() {
      this.$store.commit("removeToDo", this.toDo);
    },
  },
};
</script>

<style scoped>
button {
  width: 10vh;
  height: 2vh;
  background: rgb(255, 255, 255);
  color: black;
  font-size: 0.7em;
}
button:hover {
  background: rgb(82, 81, 81);
  color: white;
}
.createToDo {
  font-size: 1.3em;
  margin: 2px;
}
</style>


