<template>
  <div>
    <h1 class="text-4xl font-extrabold text-center text-purple-800 mb-1 animate-pulse">📝 To-Do List</h1>
    <p class="text-center text-gray-600 mb-6 text-lg">
      You have 
      <span class="font-bold text-purple-700">{{ remaining }}</span>
      {{ remaining === 1 ? 'task' : 'tasks' }} to complete.
    </p>
  </div>
</template>

<script>
export default {
  props: ['remaining']
}
</script>
s