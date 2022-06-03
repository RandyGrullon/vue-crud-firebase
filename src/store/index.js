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
    user: null

  },
  getters: {},
  mutations: {

    setUser({state}, payload){
      state.user = payload
    },

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
    },
  },
  actions: {
           
    async registrarUsuario({commit}, usuario){
     try {
       const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPaIESuZANpmPDgBqrVkqo5GAM7-9sdDs", {
          method: "POST",
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true,
          }),       
       })
        const data = await res.json()
        console.log(data)
      }catch (error) {
       console.log(error)
     }
    
    },

    async CargarLocalStorage({ commit }) {
      try {
        const res = await fetch(
          "https://rest-vue-d1b79-default-rtdb.firebaseio.com/task.json"
        );
        const data = await res.json();

        const arrayTask = [];

        for (let id in data) {
          arrayTask.push(data[id]);
        }

        commit("cargar", arrayTask);
      } catch (error) {
        console.log(error);
      }
    },

    async setTareas({ commit }, tarea) {
      try {
        const res = await fetch(
          `https://rest-vue-d1b79-default-rtdb.firebaseio.com/task/${tarea.id}.json`,
          {
            method: "PUT",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
          }
        );
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
      commit("set", tarea);
    },
    async deleteTareas({ commit }, id) {
      try{
        const res = await fetch(
          `https://rest-vue-d1b79-default-rtdb.firebaseio.com/task/${id}.json`,
          {
            method: "DELETE",
          }
        );
        commit("delete", id);
      } catch (e) {
        console.log(e);
      }
    
    },
    showTareas({ commit }, id) {
      commit("show", id);
    },
    async updateTarea({ commit }, tarea) {
      try{
      const res = await fetch(
        `https://rest-vue-d1b79-default-rtdb.firebaseio.com/task/${tarea.id}.json`,
        {
          method: "PATCH",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tarea),
        }
      );
      const data = await res.json();
      
    } catch (e) {
      console.log(e);
    }
      commit("update", tarea);
    },
  },
  modules: {},
});
