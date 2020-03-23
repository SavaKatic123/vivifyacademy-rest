import { authService } from '../../../services/Auth';

const USER_LOGIN = 'USER_LOGIN';

const state = {
  user: null
};

const mutations = {
  [USER_LOGIN](state, data) {
    state.user = data;
  }
};

const actions = {
  login({ commit }, { email, password }) {
    return authService.login(email, password).then(response => {
      commit(USER_LOGIN, response.data);
    });
  }
};

const getters = {
  getUser() {
    return state.user;
  }
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
