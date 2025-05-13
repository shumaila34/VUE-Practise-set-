<template>
  <div>
    <ul v-if="$store.getters.tasks.length > 0" class="space-y-4">
      <li
        v-for="(task, index) in $store.getters.tasks"
        :key="task.id"
        class="flex justify-between items-center bg-white border border-purple-100 p-4 rounded-xl shadow-lg transition duration-300 group"
      >
        <span class="text-purple-900 text-lg font-medium group-hover:translate-x-1 transition duration-200">
          {{ task.name }}
        </span>
        <div class="flex gap-2">
          <button
            @click="$store.dispatch('editTask', index)"
            class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm font-semibold transition duration-200"
          >
            Edit
          </button>
          <button
            @click="$store.dispatch('deleteTask', index)"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold transition duration-200"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
    <div v-else class="text-center mt-10 text-gray-500 animate-fade-in-down">
      <p class="text-lg">No tasks yet! Add your first task above.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
