// объект который хранит сосотояние

export const state = () => ({
  users: [],
  auth: true,
});

// Мутации, которые могутизменять это состояние
// data - второй аргумент - данные, которые мы сюда передаем
export const mutations = {
  setUsers(state, data) {
    state.users = data;
  },
};

// Геттер, который используется в компоненте, чтобы получить state

export const getters = {
  getUsers(state) {
    return state.users;
  },
};

// Экшены, которые вызываются в компоненте, который в свою очередь уже тут вызывают мутации
// commit вызывает мутацию

export const actions = {
  async nuxtServerInit({ commit }) {
    const users = await this.$axios.$get(
      "https://randomuser.me/api/?results=6"
    );
    commit("setUsers", users.results);
  },
};
