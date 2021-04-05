import { createStore } from 'vuex'

const getDefaultUser = () => {
  return {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    isAgreeToTerms: false,
  }
}

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: getDefaultUser(),
    users: [],
  },
  mutations: {
    resetUserState(state) {
      Object.assign(state.user, getDefaultUser())
    },
    updateFirstName(state, payload) {
      state.user.firstName = payload
    },
    updateLastName(state, payload) {
      state.user.lastName = payload
    },
    updateUsername(state, payload) {
      state.user.username = payload
    },
    updateEmail(state, payload) {
      state.user.email = payload
    },
    updateIsAgreeToTerms(state, payload) {
      state.user.isAgreeToTerms = payload
    },
    addUser(state, payload) {
      // state.users.push(payload)
      state.users = [...state.users, payload]
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit('resetUserState')
    },
    // addUser({ commit }, userObject) {
    //   commit('addUser', userObject)
    //   commit('resetUserState')
    // },
  },
  modules: {},
})
