<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
      <h1 class="text-3xl font-bold text-center text-blue-600">To-Do List</h1>

      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 space-y-4 sm:space-y-0">
        <input
          type="text"
          class="w-full sm:w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
          v-model="newTask"
          @keyup.enter="isEditing ? updateTask() : addTask()"
          :disabled="tasks.length > 4 && !isEditing"
        />
        <div class="sm:ml-4">
          <button
            v-if="!isEditing && tasks.length <= 4"
            @click="addTask()"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
          >
            Add
          </button>
          <button
            v-else-if="isEditing"
            @click="updateTask()"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition duration-200"
          >
            Update
          </button>
          <p v-else class="text-red-500 font-medium">List completed</p>
        </div>
      </div>

      <ul class="mt-6 space-y-3">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
        >
          <span class="text-gray-800">{{ task }}</span>
          <div class="space-x-2">
            <button
              @click="editTask(index)"
              class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm transition duration-200"
            >
              Edit
            </button>
            <button
              @click="deleteTask(index)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
      isEditing: false,
      editingIndex: null
    };
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
};
</script>

<style scoped>


.card-body h1 { 
  color: #a813ff; 
} 

.btn-primary { 
  background-color: #a813ff; 
  border: transparent; 
} 

.btn-danger { 
  background-color: #5f8dba; 
  border: transparent; 
} 

.btn-warning { 
  background-color: #952b95; 
  color: #fff; 
  border: transparent; 
} 

.message { 
  color: green; 
  font-weight: bold; 
} 

.item-card { 
  height: 60px; 
  background-color: #440c7e; 
  color: #fff; 
} 
</style> 

