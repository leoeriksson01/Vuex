<template>
  <div> 
<div v-for="student in students" :key="student">
    <h3> {{ student }} </h3>
    </div>
      
  </div>
</template>

<script>
export default {
 computed: {
     students(){
         return this.$store.state.students;
     },
     getJohn() {
         return this.$store.getters.getAllJohn
     }
 }
}
</script>

<style scoped>

</style>