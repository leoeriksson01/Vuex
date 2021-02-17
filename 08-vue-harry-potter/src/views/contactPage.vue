<template>
  <div class="form-container">
    <h1 class="header">{{ header }}</h1>
    <p class="desc">{{ mail }}</p>
    <p class="desc">{{ phone }}</p>
    <p class="desc">{{ adress }}</p>
    <p class="desc">{{ zipCode }}</p>
    <p class="desc">{{ city }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "CONTACT US",
      mail: "Mail: harry.potter@hotmail.com",
      phone: "Phone: +46840275849",
      adress: "Adress: HarryPotterGatan 27B",
      zipCode: "Zip Code: 24189",
      city: "City: Eslöv",
    };
  },
};
</script>

<style>
.form-container {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-top: 10%;
  padding: 1rem;
  transition: 0.5s;
  width: 40%;
  text-align: center;
}

.header {
  text-align: center;
}

.desc {
  font-size: 1.5rem;
}
</style>
