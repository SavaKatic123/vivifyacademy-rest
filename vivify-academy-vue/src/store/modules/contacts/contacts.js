import { contactsService } from '../../../services/Contacts';

const CONTACTS_ALL = 'CONTACTS_ALL';
const CONTACTS_DELETE = 'CONTACTS_DELETE';
const CONTACTS_ADD = 'CONTACTS_ADD';
const CONTACTS_GET = 'CONTACTS_GET';
const CONTACTS_EDIT = 'CONTACTS_EDIT';

const state = {
  contacts: [],
  editContact: {
    first_name: '',
    last_name: '',
    email: '',
    number: ''
  }
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
  },
  [CONTACTS_GET](state, data) {
    state.editContact = data;
  },
  [CONTACTS_EDIT](state, contact) {
    const index = state.contacts.findIndex(contact => contact.id == contact.id);
    state.contacts[index] = contact;
    if (state.editContact) {
      state.editContact = contact;
    }
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
  },
  getOne({ commit }, id) {
    contactsService.get(id).then(response => {
      commit(CONTACTS_GET, response.data);
    });
  },
  edit({ commit }, contact) {
    contactsService.edit(contact).then(response => {
      commit(CONTACTS_EDIT, response.data);
    });
  }
};

const getters = {
  getAll() {
    return state.contacts;
  },
  getEditContact() {
    return state.editContact;
  }
};

export const contacts = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
