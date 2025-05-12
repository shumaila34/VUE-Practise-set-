<template>
  <div>
    <TodoHeader :remaining="remaining" />
    <TodoInput
      v-model="newTask"
      :isEditing="isEditing"
      :disabled="tasks.length > 4 && !isEditing"
      @submit="isEditing ? updateTask() : addTask()"
    />
    <TodoList
      :tasks="tasks"
      @edit="editTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  data() {
    return {
      newTask: '',
      tasks: [],
      isEditing: false,
      editingIndex: null
    };
  },
  computed: {
    remaining() {
      return this.tasks.length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask.trim());
        this.newTask = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.newTask = this.tasks[index];
      this.isEditing = true;
      this.editingIndex = index;
    },
    updateTask() {
      if (this.newTask.trim() && this.editingIndex !== null) {
        this.tasks[this.editingIndex] = this.newTask.trim();
        this.newTask = '';
        this.isEditing = false;
        this.editingIndex = null;
      }
    }
  }
}
</script>
