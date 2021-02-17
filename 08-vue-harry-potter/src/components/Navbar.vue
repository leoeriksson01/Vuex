<template>
  <div class="navbar">
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/contactUs">CONTACT US</router-link>
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
  color: white;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: gray;
}
</style>
