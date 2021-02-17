<template>
  <div class="home">
    <div class="footballer">
      <h1 class="pic-desc"> Bild på en grym fotbollsspelare </h1>
      <div class="image-container">
        <img v-bind:src="zlatan" alt="A great footballer">
         </div>
       </div>
       <div class="colers">
         <h1> These are the colors </h1>
         <div class="color-wrapper">
           <span class="color" v-for="(col, i) in colors" v-bind:key="i" v-bind:style="{color: col}"> {{ col }} </span></div>
           </div>

           <div class="events">
             <button v-on:click="changeColor"> Klicka för att byta färg  </button>
             <p v-bind:style="{color: newColor}"> Texten vars färg ska bytas </p>
             <p v-on:mouseover="changeText" v-on:mouseout="changeTextBack"> {{ text }} </p>
             
      </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      text: "Hoovra över mig för att ändra denna texten",
      newColor: "red",
      colors:["black", "green", "blue", "yellow", "orange", "brown", "pink",],
      zlatan: "https://pbs.twimg.com/profile_images/740904409769512962/q4g_w-eJ_400x400.jpg",
      ronaldo: "https://i.pinimg.com/originals/9a/c1/69/9ac1690ac4dae5e8809ccef6bd5cf5c6.jpg",
      neymar:"https://pbs.twimg.com/profile_images/597024719318044672/RmVFDCyq.jpg",
    }
  },
  methods: {
    changeColor() {
      if(this.color ==="blue") {
        this.newColor = "red";

      }
      else {
        this.newColor = "blue";
      }
    },
    changeText() {
      this.text = "Du lyckades ändra mig"
    },
    changeTextBack(){
      this.text ="Hoovra över mig för att ändra denna text";
    }
  }


}
</script>

<style scoped>
.color {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
}

</style>
