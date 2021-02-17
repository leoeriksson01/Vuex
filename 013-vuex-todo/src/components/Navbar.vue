<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/AddToDo">Add Todo</router-link>
    <router-link to="/About">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background: black;
  top: 0;
  height: 5vh;
  padding: 0.6rem 0 0.6rem;
  opacity: 0.6;
}
a {
  /* 1 rem = 16px */
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0.5rem;
  transition: 0.2s;
}
a:hover {
  color: gray;
}
</style>