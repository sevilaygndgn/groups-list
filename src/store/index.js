import Vue from "vue";
import Vuex from "vuex";
import contacts from "./modules/contacts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isVertical: false,
  },
  getters: {
    getTabStatus: (state) => state.isVertical,
  },
  mutations: {
    setTabStatus: (state, status) => {
      state.isVertical = status;
    },
  },
  actions: {},
  modules: {
    contacts,
  },
});
