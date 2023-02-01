import { createStore } from "vuex";

export default createStore({
  state: {
    currentPostId: null
  },
  getters: {},
  mutations: {
    SET_CURRENT_POST_ID(state, id) {
      state.currentPostId = id;
    }
  },
  actions: {},
  modules: {},
});
