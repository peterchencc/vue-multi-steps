<template>
  <h2>step 2</h2>
  <label for="frist-name">First Name</label>
  <input type="text" id="frist-name" v-model="firstName" />
  <label for="last-name">Last Name</label>
  <input type="text" id="last-name" v-model="lastName" />
  <label for="github-username">GitHub Username</label>
  <input type="text" id="github-username" v-model="githubUsername" />
</template>

<script>
export default {
  name: 'FormOne',
  computed: {
    firstName: {
      get() {
        return this.$store.state.user.firstName
      },
      set(value) {
        this.$store.commit('updateFirstName', value)
      },
    },
    lastName: {
      get() {
        return this.$store.state.user.lastName
      },
      set(value) {
        this.$store.commit('updateLastName', value)
      },
    },
    githubUsername: {
      get() {
        return this.$store.state.user.username
      },
      set(value) {
        this.$store.commit('updateUsername', value)
      },
    },
  },
}
</script>

<style></style>
