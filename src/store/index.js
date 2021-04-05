import { createStore } from 'vuex'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    currentStep: 1,
    user: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      isAgreeToTerms: false,
    },
  },
  mutations: {
    increment: (state) => state.currentStep++,
    decrement: (state) => state.currentStep--,
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
  },
  actions: {},
  modules: {},
})
