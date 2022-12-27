export const state = () => {
  return {
    endpoint: "",
    domain: "",
    recaptchaKey: null,
    lastMessage: null
  };
};

export const mutations = {
  setEndpoint(state, val) {
    state.endpoint = val;
  },
  setDomain(state, val) {
    state.domain = val;
  },
  setRecaptchaKey(state, val) {
    state.recaptchaKey = val;
  },
  setLastMessage(state, val) {
    state.lastMessage = val;
  }
};

export const getters = {
  api: state => path => {
    return `${state.endpoint}${path}`;
  }
  // post: (state, getters) => data => {
  //   return fetch(getters.api("/post"), {
  //     method: "POST",
  //     body: JSON.stringify(data)
  //   });
  // }
};

export const actions = {
  async nuxtServerInit({ commit }, { env }) {
    commit("setEndpoint", env.endpoint);
    commit("setDomain", env.PROJECT_DOMAIN);
    commit("setRecaptchaKey", env.recaptcha);
  }
};
