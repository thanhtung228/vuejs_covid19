const state = {
  countries: [],
};

const mutations = {
  setCountries: (state, payload) => {
    state.countries = payload.countries;
  },
};

const actions = {
  setCountries({ commit }, params) {
    commit('setCountries', params);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};