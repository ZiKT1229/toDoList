import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    task: '',
    taskList: []
  },
  mutations: {
    addTodo(state) {
      state.taskList.push({
        title: state.task,
        done: false
      });
      state.task = '';
    },
    removeTodo(state, targetIndex) {
      state.taskList = state.taskList.filter((tast, index) => index !== targetIndex);
    },
    updateTask(state, value) {
      state.task = value;
    }
  },
  actions: {
    addTodo({ commit }, task) {
      commit('addTodo', task);
    },
    removeTodo({ commit }, targetIndex) {
      commit('removeTodo', targetIndex);
    }
  },
  getters: {
    taskList(state) {
      return state.taskList;
    }
  },
});
