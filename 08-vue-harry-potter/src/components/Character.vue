<template>
  <div class="character card">
    <img v-bind:src="character.picture" alt="Mario-Character" />
    <div class="container">
      <h5 class="name">
        {{ character.name }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style scoped>
.card {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  width: 80%;
  display: grid;
  grid-template-rows: 80% 20%;
  padding: 0.5rem;
  transition: 0.5s;
  font-size: 2em;
  color: lightgray;
}

.card img {
  width: 100%;
  height: 80%;
}

.container {
  padding: 2px 16px;
}

.card:hover {
  color: gray;
}

.name {
  text-align: center;
}
</style>
