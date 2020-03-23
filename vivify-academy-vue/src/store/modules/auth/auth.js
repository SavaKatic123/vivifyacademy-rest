import { authService } from '../../../services/Auth';

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const state = {
  token: null
};

const mutations = {
  [USER_LOGIN](state, data) {
    state.token = data.token;
  },
  [USER_LOGOUT](state) {
    state.token = null;
  }
};

const actions = {
  login({ commit }, { email, password }) {
    return authService.login(email, password).then(response => {
      window.localStorage.setItem('loginToken', response.data.token);
      authService.setAxiosDefaultAuthorizationHeader();
      commit(USER_LOGIN, response.data);
    });
  },
  logout({ commit }) {
    commit(USER_LOGOUT);
  }
};

const getters = {
  getToken() {
    return state.token;
  }
};

export const auth = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
