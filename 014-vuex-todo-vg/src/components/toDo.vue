<template>
  <div class="createToDo">
    <div class="directions">
      <div class="moveUp" @click="moveUp"></div>
      <div class="moveDown" @click="moveDown"></div>
    </div>
    <div
      class="listitem"
      @click="completed"
      v-bind:class="[toDo.completed ? 'completed' : 'notcompleted']"
    >
      {{ toDo.author }}: "{{ toDo.description }}" Datum: {{ toDo.date }}
    </div>
    <button @click="removeToDo">Ta bort</button>
  </div>
</template>

<script>
export default {
  props: ["toDo"],

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    removeToDo() {
      this.$store.commit("removeToDo", this.toDo);
    },
    moveUp() {
      this.$store.commit("moveUp", this.toDo);
    },
    moveDown() {
      this.$store.commit("moveDown", this.toDo);
    },
    completed() {
      this.$store.commit("completed", this.toDo);
      this.isActive = true;
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
  display: flex;
  justify-content: center;
}
.moveUp {
  height: 18px;
  width: 18px;
  border: 1px solid black;
  background: url("https://www.vhv.rs/dpng/d/237-2376586_go-up-arrow-bold-up-arrow-symbol-hd.png");
  margin: 0;
  background-size: cover;
}
.moveDown {
  height: 18px;
  width: 18px;
  border: 1px solid black;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAAClpaV0dHRxcXH7+/sqKiouLi75+fkrKyuhoaGrq6t3d3e1tbVJSUn09PQUFBQcHBxSUlLxHKkVAAACkElEQVR4nO3WCU4DQQxEUfYlLAHuf1jSKEIKQzLTi1126/8TzFMlcl9dERERERERhenueny3atRJCBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9twbCV5MvfdvdtPTybiB8f2n6lt3bReH+w+BTffvcXx7x/kH9hZ093q/9TpMT14HJiY/rvkNPeYlbFky94rYFExO3LpiWWAM8EJ/V31tdHTDhirXAdMR6YDJiCzAVsQ2Y6PS3AtOsuP3QJ12xfcEkK/YsmILYt2ACYj8w+ANuBDD0imOAgYmjgGGJ44BBib1n4rSAp3/kgqVwK45dMCBx9ILhiBbAUKffBhhoRStgGKIdMAjREhiCaAsMcPqtgfIVxx/6ZdIV7RcsCVf0AQqJXkAZ0Q8oesB5AiUr+gIFRG+gO9Ef6Ez0OPTLHE+/YsGS24qaBR2JqgXdiEqgy+nXAh1WVAPNiXqgMTEC0JSoOxOnmZ3+GAuWjFaMsmDJhBhnwZIBMRbQ4PRHAw5fMR5wMDEicCgxJnAgMSpw2OmPCxy0YqRDv2zAipEXLHWvGB3YTYwP7CRmAHY94HIAO1bMAmwm5gE2EjMBm4ixD/2y6tOfa8FS5YrZFixVEfMtWKog5gRWnP6swM0r5gVuJGYGbiLmBm4gZgeunv78wJUVMx76ZReIMyxYOkucBXiWOA/wDHEm4L8PuLmA/6w4G3BBnA/4hzgj8IQ4x6Ff9vuAm3PB0nHFeYFH4szAH+LcwMN/8WtyIBERERERTdo3RvlRtXkjwL4AAAAASUVORK5CYII=");
  margin: 0;
  background-size: cover;
}
.directions {
  display: flex;
}
.completed {
  text-decoration: line-through;
}
</style>


