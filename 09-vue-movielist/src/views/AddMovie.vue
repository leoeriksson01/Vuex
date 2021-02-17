<template>
  <div class="home">
    <div class="title"> 
   <p> Title {{ title }}</p> <input v-model="title" placeholder="Title">
</div>

<div>
    <VueSlideBar
      v-model="rating"
      :min="0"
      :max="5"
      :processStyle="slider.processStyle"
      :lineHeight="slider.lineHeight"
      :tooltipStyles="{ backgroundColor: 'black', borderColor: 'black' }">
    </VueSlideBar>
    <h2>Rating: {{ rating }} / 5</h2>
  </div>

<div>
<span>Genre </span>
<select v-model="genre">
  <option>Horror</option>
  <option>Romantic</option>
  <option>Action</option>
  <option>Fantasy</option>
  <option>Comedy</option>
</select>
</div>
<br>
<br>


<span> Description: </span>
<br> <br>
<div class="description">
<textarea v-model="description" placeholder="add multiple lines"></textarea>
<br>
<button v-on:click="clear">> Clear </button>
<button v-on:click="add">> Add </button>
</div>

<!-- 
<div class="movieCard">
  <span> <h2 class="movieTitle"> {{ title }} </h2> 
  <h3 class="movieRating"> {{ value2 }} / 5 </h3> </span>
  <h3 class="movieGenre"> {{ selected }} </h3>
    <p class="movieDescription"> {{ description }} </p>
     
        
  </div> -->

  </div>

</template>

<script>
import VueSlideBar from 'vue-slide-bar'



export default {
  components: {
    VueSlideBar
  },
  data() {
    return {
      rating: 0,
      description: null,
      title: null,
      genre: null,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: 'black',
           }
      },
    
    }
  },

  methods: {
    clear() {
      this.input.clear();
      
    },
add() {
     
      let newMovie =  {
      title: this.title,
      rating: this.rating,
      genre: this.genre,
      description: this.description, 
      }    
      console.log(newMovie)
}

      
      
    }
    
  }


</script>

<style scoped>
.home {
  border: 2px solid black;
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 10px;
  margin-top: 20px;
}
.color {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
}
button {
  margin-top: 30px;
  border: 1 px solid blue;
  border-radius: 20px;
  background-color: #1e95ea;
  color: white;
  height: 30px;
  width: 80px;
  font-size: 14px;
}

.movieCard {
  width: 300px;
  height: 180px;
  border: 2px solid black;
  margin-top: 50px;
}

.movieCard h3 {
  text-align: end;
}

</style>
