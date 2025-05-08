<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
    <input
      type="text"
      class="flex-1 p-3 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-purple-400 transition duration-200"
      placeholder="Type a task..."
      v-model="input"
      @keyup.enter="submit"
      :disabled="disabled"
    />
    <div>
      <button
        v-if="!isEditing && !disabled"
        @click="submit"
        class="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-6 py-2 rounded-lg shadow-md transition duration-300"
      >
        Add
      </button>
      <button
        v-else-if="isEditing"
        @click="submit"
        class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold px-6 py-2 rounded-lg shadow-md transition duration-300"
      >
        Update
      </button>
      <p v-else class="text-red-500 font-semibold text-sm mt-1">🚫 Task limit reached</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'isEditing', 'disabled'],
  emits: ['update:modelValue', 'submit'],
  computed: {
    input: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    }
  }
}
</script>
