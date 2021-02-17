<template>
  <div class="about">
    <h1 class="header">{{ header }}</h1>
    <p class="desc">{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Harry Potter",
      description:
        "Harry Potter has been spending another unhappy summer with the Dursleys. When Aunt Marge Dursley insults his parents, he loses his temper and accidentally causes her to inflate like a balloon and float away. Fed up, Harry then flees the Dursleys with his luggage. The Knight Bus arrives and takes Harry to the Leaky Cauldron, where he is pardoned by Minister of Magic Cornelius Fudge for using magic outside of Hogwarts. After reuniting with his best friends Ron Weasley and Hermione Granger, Harry learns that Sirius Black, a convicted supporter of the dark wizard Lord Voldemort, has escaped Azkaban prison and intends to kill him.",
    };
  },
};
</script>

<style>
.about {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-top: 10%;
  padding: 1rem;
  transition: 0.5s;
  width: 60%;
}

body {
  background: url("https://images4.alphacoders.com/106/thumb-1920-1066106.jpg");
  background-size: cover;
  margin: 0;
  min-height: 100vh;
}

.header {
  text-align: center;
}

.desc {
  font-size: 1.5rem;
}
</style>
