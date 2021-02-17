import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: ['Molly', 'Anna', 'John', 'John'],
  },
  mutations: {
    addStudent(state, studentName) {
      /* student.studentName
      student.studentAge */
      state.students.push(studentName)

    },
    removeStudent(state, studentName) {
      state.students = state.students.filter(student => student !== studentName)
    }
  },

  getters: {
    getAllJohn: state =>{
      return state.students.filter(student => student === 'John')
    }
  }
})
