import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './modules/auth/auth.js';
import { contacts } from './modules/contacts/contacts.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    contacts
  }
});

export default store;
