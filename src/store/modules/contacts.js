const state = {
  contactList: [],
};
const getters = {
  getContactList: (state) => state.contactList,
};
const mutations = {
  addContact: (state, data) => {
    state.contactList.push(data);
  },
};
const actions = {
  addContactAction(vuexContext, data) {
    console.log(data);
    vuexContext.commit("addContact", data);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
