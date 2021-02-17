<template>
  <div> 
<Student v-for="(student, index) in students" 
:key="index"
:student="student"
/>

  </div>
</template>

<script>
import Student from './Student.vue'
export default {
    components: {
        Student
    },
computed: {
    students() {
        return this.$store.state.students
    }
}
}
</script>

<style scoped>

</style>