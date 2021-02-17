<template>
  <form @submit.prevent="addStudent">
      <input v-model="studentName" type="text" placeholder="Student Name">
      <h3>  {{ studentName }} </h3>
      <button> Add </button>
      </form>
      
      
</template>

<script>
export default {
 data() {
return {
    studentName: '456',
    studentAge: '15'
    }
},
methods: {
    addStudent() {
        let student = {
            
        }
        this.$store.commit('addStudent', this.studentName)
    }
}
}
</script>

<style>

</style>