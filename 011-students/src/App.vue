<template>
  <div id="app">
<StudentForm/>

   <StudentList1/>
   <hr>
   <StudentList2/>
  </div>
</template>

<script>

import StudentList1 from './components/StudentList1.vue';
import StudentList2 from './components/StudentList2.vue';
import StudentForm from './components/StudentForm'

export default {
  name: 'App',
  components: {
    StudentList1,
    StudentList2,
    StudentForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
