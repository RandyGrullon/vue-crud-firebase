import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      categoria: [],
      estado: "",
      numero: 0,
    },
  },
  getters: {},
  mutations: {

    set(state, payload) {
      state.tareas.push(payload);
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
    show(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },
    update(state, payload) {
      state.tareas = state.tareas.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push("/");
    },
    cargar(state, payload) {
      state.tareas = payload;
    }
  },
  actions: {
    async cargarLocalStorage({commit}, tarea) {
      // const res = await
    },
    setTareas({ commit }, tarea) {
      commit("set", tarea);
    },
    deleteTareas({ commit }, id) {
      commit("delete", id);
    },
    showTareas({ commit }, id) {
      commit("show", id);
    },
    updateTarea({ commit }, tarea) {
      commit("update", tarea);
    },
  },
  modules: {},
});