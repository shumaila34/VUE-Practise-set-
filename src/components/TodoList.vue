<template>
  <ul class="space-y-4">
    <li
      v-for="(task, index) in tasks"
      :key="index"
      class="flex justify-between items-center bg-white/70 hover:bg-white border border-purple-100 p-4 rounded-xl shadow-lg transition duration-300 group"
    >
      <span class="text-purple-900 text-lg font-medium group-hover:translate-x-1 transition duration-200">
        {{ task }}
      </span>
      <div class="flex gap-2">
        <button
          @click="$emit('edit', index)"
          class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm font-semibold transition duration-200"
        >
          Edit
        </button>
        <button
          @click="$emit('delete', index)"
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold transition duration-200"
        >
          Delete
        </button>
      </div>
    </li>
    <div v-if="tasks.length === 0" class="text-center mt-10 text-gray-500 animate-fade-in-down">
      <p class="text-lg">No tasks yet! Add your first task above.</p>
    </div>
  </ul>
</template>

<script>
export default {
  props: ['tasks']
}
</script>
