<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
    <input
      type="text"
      class="flex-1 p-3 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-purple-400 transition duration-200"
      placeholder="Type a task..."
      :value="$store.state.newTask"
      @input="$store.dispatch('setNewTask', $event.target.value)"
      @keyup.enter="submit"
      :disabled="$store.getters.taskLimitReached"
    />
    <div>
      <button
        v-if="!$store.getters.taskLimitReached"
        @click="submit"
        :class="buttonClass"
        class="text-white font-bold px-6 py-2 rounded-lg shadow-md transition duration-300"
      >
        {{ $store.getters.isEditing ? 'Update' : 'Add' }}
      </button>
      <p v-else class="text-red-500 font-semibold text-sm mt-1">
        Task limit reached
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      if (this.$store.getters.isEditing) {
        this.$store.dispatch('updateTask');
      } else {
        this.$store.dispatch('addTask');
      }
    }
  },
  computed: {
    buttonClass() {
      return this.$store.getters.isEditing
        ? 'bg-green-500 hover:bg-green-600'
        : 'bg-purple-600 hover:bg-purple-700';
    }
  }
}
</script>

<style scoped>
</style>
