import { contactsService } from '../../../services/Contacts';

const CONTACTS_ALL = 'CONTACTS_ALL';
const CONTACTS_DELETE = 'CONTACTS_DELETE';
const CONTACTS_ADD = 'CONTACTS_ADD';

const state = {
  contacts: []
};

const mutations = {
  [CONTACTS_ALL](state, data) {
    state.contacts = data;
  },
  [CONTACTS_DELETE](state, id) {
    let index = state.contacts.findIndex(contact => contact.id === id);
    state.contacts.splice(index, 1);
  },
  [CONTACTS_ADD](state, contact) {
    state.contacts.push(contact);
  }
};

const actions = {
  getAll({ commit }) {
    contactsService.getAll().then(response => {
      commit(CONTACTS_ALL, response.data);
    });
  },
  delete({ commit }, id) {
    contactsService.remove(id).then(() => {
      commit(CONTACTS_DELETE, id);
    });
  },
  add({ commit }, contact) {
    contactsService.add(contact).then(() => {
      commit(CONTACTS_ADD, contact);
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
