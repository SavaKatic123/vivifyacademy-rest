import { contactsService } from '../../../services/Contacts';

const CONTACTS_ALL = 'CONTACTS_ALL';

const state = {
  contacts: []
};

const mutations = {
  [CONTACTS_ALL](state, data) {
    state.contacts = data;
  }
};

const actions = {
  getAll({ commit }) {
    contactsService.getAll().then(response => {
      commit(CONTACTS_ALL, response.data);
    });
  }
};

const getters = {
  getAll() {
    return state.contacts;
  }
};

export const contacts = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
