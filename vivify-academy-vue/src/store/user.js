export default {
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      return (state.count = state.count + payload.amount);
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload);
    }
  }
};
