import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    newTask: "",
    isEditing: false,
    editingIndex: null,
  },
  mutations: {
    SET_NEW_TASK(state, payload) {
      state.newTask = payload;
    },
    ADD_TASK(state) {
      state.tasks.push(state.newTask.trim());
      state.newTask = "";
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    START_EDIT(state, index) {
      state.newTask = state.tasks[index];
      state.isEditing = true;
      state.editingIndex = index;
    },
    UPDATE_TASK(state) {
      if (state.editingIndex !== null) {
        state.tasks[state.editingIndex] = state.newTask.trim();
        state.newTask = "";
        state.isEditing = false;
        state.editingIndex = null;
      }
    },
  },
  actions: {
    addTask({ commit, state }) {
      if (state.newTask.trim()) {
        commit("ADD_TASK");
      }
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },
    editTask({ commit }, index) {
      commit("START_EDIT", index);
    },
    updateTask({ commit, state }) {
      if (state.newTask.trim()) {
        commit("UPDATE_TASK");
      }
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    newTask: (state) => state.newTask,
    isEditing: (state) => state.isEditing,
    editingIndex: (state) => state.editingIndex,
    taskLimitReached: (state) => state.tasks.length > 4 && !state.isEditing,
    remainingTasks: (state) => state.tasks.length,
  },
});
