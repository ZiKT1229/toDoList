<template>
  <article>
    <section class="row" v-for="(task, index) in taskList" :key="index">
      <div v-if="task.done" class="col-1 text-center d-flex justify-content-center align-items-center">
        <input type="checkbox" v-model="task.done">
      </div>
      <div v-if="task.done" class="col font-weight-bold border border-dark" :class="{ del: task.done }">{{ task.title }}</div>
      <div v-if="task.done" class="col-1 text-center" @click="removeTodo(index)">&#10005;</div>
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const { removeTodo } = mapActions(['removeTodo']);

export default {
  name: 'done',
  props: {
    taskList: Array
  },
  methods: {
    removeTodo
  }
}
</script>

<style scoped>
article {
  padding: 10px;
}
.del {
  text-decoration: line-through;
}
</style>
