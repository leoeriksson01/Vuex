import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDos: [
      {
          author: "Harry",
          description: "Ska till tandläkaren",
          date: "1/30/2009, 3:36:59 PM",
        },
        {
          author: "Terry",
          description: "Min katt dog igår",
          date: "4/10/2111, 3:36:59 PM",
        },
        {
          author: "Larry",
          description: "Har corona viruset",
          date: "1/27/2002, 3:36:59 PM",
        },
        {
          author: "Perry",
          description: "Hunden åt mitt busskort",
          date: "6/13/2021, 3:36:59 PM",
        },
    ],
  },
  mutations: {

    addToDo(state, newToDo)
    {
      state.toDos.unshift(newToDo)
    },
    
    removeToDo(state, toDoToRemove) {
      state.toDos = state.toDos.filter((toDo) => toDoToRemove !== toDo);
    },

    moveToDo(state, toDo) {
      state.toDos.pop(toDo)
    },
    
    
  }
})
