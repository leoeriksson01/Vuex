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
          date: "1/30/2009, 3:10:29 PM",
          completed: false,
        },
        {
          author: "Terry",
          description: "Min katt dog igår",
          date: "4/10/2111, 3:36:59 PM",
          completed: false,
        },
        {
          author: "Larry",
          description: "Har corona viruset",
          date: "1/27/2002, 3:25:22 PM",
          completed: false,
        },
        {
          author: "Perry",
          description: "Hunden åt mitt busskort",
          date: "6/13/2021, 3:36:59 PM",
          completed: false,
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
    
    completed(state, todo) {
      const i = state.toDos.findIndex((t) => t.description === todo.description);
      state.toDos.splice(i, 1);
      state.toDos.push(todo)
      todo.completed = true;
    },
    
    moveUp(state, todo) {
      const i = state.toDos.findIndex((t) => t.description === todo.description);
      if (i > 0)
      {
        state.toDos.splice(i, 1);
      state.toDos.splice(i - 1, 0, todo);
      }
    },

    moveDown(state, todo) {
      const i = state.toDos.findIndex((t) => t.description === todo.description);
      if (i>-1 && i< state.toDos.length)
      {
      state.toDos.splice(i, 1);
      state.toDos.splice(i + 1, 0, todo);
    }
    }


    
  }
})
