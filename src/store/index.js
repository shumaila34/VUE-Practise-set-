import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    newTask: "",
    isEditing: false,
    editIndex: null,
  },
  mutations: {
    SET_NEW_TASK(state, payload) {
      state.newTask = payload;
    },
    ADD_TASK(state) {
      if (!state.newTask.trim()) return;
      state.tasks.push({
        id: Date.now(),
        name: state.newTask.trim(),
      });
      state.newTask = "";
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
    EDIT_TASK(state, index) {
      state.newTask = state.tasks[index].name;
      state.isEditing = true;
      state.editIndex = index;
    },
    UPDATE_TASK(state) {
      if (!state.newTask.trim()) return;
      state.tasks[state.editIndex].name = state.newTask.trim();
      state.isEditing = false;
      state.editIndex = null;
      state.newTask = "";
    },
  },
  actions: {
    addTask({ commit }) {
      commit("ADD_TASK");
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },
    editTask({ commit }, index) {
      commit("EDIT_TASK", index);
    },
    updateTask({ commit }) {
      commit("UPDATE_TASK");
    },
    setNewTask({ commit }, val) {
      commit("SET_NEW_TASK", val);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    newTask: (state) => state.newTask,
    isEditing: (state) => state.isEditing,
    taskLimitReached: (state) => state.tasks.length >= 10,
    remainingTasks: (state) => state.tasks.length,
  },
});
