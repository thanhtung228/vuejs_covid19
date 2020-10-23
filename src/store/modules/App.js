const state = {
  loading: false,
};

const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload.loading;
  },
};

const actions = {
  setLoading({ commit }, params) {
    commit('setLoading', params);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};