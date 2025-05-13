<template>
  <div class="max-w-2xl mx-auto py-12 px-6">
    <TodoHeader />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: { TodoHeader, TodoInput, TodoList },
};
</script>
