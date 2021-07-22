<template>
  <div id="app">
    <h1>My Todo App!</h1>
        <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name:'App',
  components: {
    TodoList
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

h1{
  text-align: center;
}
</style>
