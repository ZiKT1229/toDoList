<template>
  <div id="app" class="container d-flex flex-column">
    <header class="d-flex justify-content-center">
      <h1>Todo-list</h1>
    </header>
    <main class="container border border-primary d-flex flex-column" @submit.prevent="addTodo(task)">
      <form class="row w-75 m-auto">
        <input class="col" type="text" placeholder="請輸入待辦事項..." required v-model="task">
        <button class="col-2" type="submit">Add</button>
      </form>
      <router-view v-bind:taskList="taskList"/>
    </main>
    <nav class="btn-group">
      <router-link class="btn" :class="{ 'btn-success': isActive[0], 'btn-outline-success': !isActive[0] }" @click.native="switchRouter(0)" to="/">All</router-link>
      <router-link class="btn" :class="{ 'btn-success': isActive[1], 'btn-outline-success': !isActive[1] }" @click.native="switchRouter(1)" to="/todo">Todo</router-link>
      <router-link class="btn" :class="{ 'btn-success': isActive[2], 'btn-outline-success': !isActive[2] }" @click.native="switchRouter(2)" to="/done">Done</router-link>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const { taskList } = mapGetters(['task', 'taskList']);
const { addTodo } = mapActions(['addTodo']);

export default {
  name: 'app',
  data() {
    return {
      isActive: [
        true,
        false,
        false
      ]
    }
  },
  methods: {
    addTodo,
    switchRouter(index) {
      this.isActive = this.isActive.map(active => active = false);
      this.isActive[index] = true;
    }
  },
  computed: {
    task: {
      get() {
        return this.$store.state.task;
      },
      set(value) {
        this.$store.commit('updateTask', value)
      }
    },
    taskList
  }
}
</script>


<style>
form {
  padding: 10px;
}
</style>
