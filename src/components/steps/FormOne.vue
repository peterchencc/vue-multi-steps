<template>
  <h2>step 2</h2>

  <label for="frist-name">First Name</label>
  <Field
    type="text"
    id="frist-name"
    name="firstName"
    :rules="firstNameRules"
    v-model.trim="firstName"
  />
  <ErrorMessage name="firstName" />

  <label for="last-name">Last Name</label>
  <Field
    type="text"
    id="last-name"
    name="lastName"
    :rules="lastNameRules"
    v-model.trim="lastName"
  />
  <ErrorMessage name="lastName" />

  <label for="github-username">GitHub Username</label>
  <Field
    type="text"
    id="username"
    name="username"
    :rules="usernameRules"
    v-model.trim="username"
  />
  <ErrorMessage name="username" />
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'FormOne',
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      firstNameRules: yup
        .string()
        .trim()
        .required(),
      lastNameRules: yup
        .string()
        .trim()
        .required(),
      usernameRules: yup
        .string()
        .trim()
        .required(),
    }
  },
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
    username: {
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
