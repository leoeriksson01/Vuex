<template>
  <div class="toDoList">
    <toDo v-for="(toDoItem, i) in toDoList" :key="i" :toDo="toDoItem" />
  </div>
</template>

<script>
import toDo from "../components/toDo";

export default {
  components: {
    toDo,
  },

  computed: {
    toDoList() {
      return this.$store.state.toDos;
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>

 