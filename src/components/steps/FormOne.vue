<template>
  <div class="step-title">Personal Info</div>

  <div class="form-input">
    <label for="frist-name">First Name</label>
    <Field
      :class="inputClassObject('firstName')"
      type="text"
      id="frist-name"
      name="firstName"
      :rules="firstNameRules"
      v-model.trim="firstName"
      autofocus
    />
    <ErrorMessage class="input-error-msg" name="firstName" />
  </div>

  <div class="form-input">
    <label for="last-name">Last Name</label>
    <Field
      :class="inputClassObject('lastName')"
      type="text"
      id="last-name"
      name="lastName"
      :rules="lastNameRules"
      v-model.trim="lastName"
    />
    <ErrorMessage class="input-error-msg" name="lastName" />
  </div>

  <div class="form-input">
    <label for="github-username">GitHub Username</label>
    <Field
      :class="inputClassObject('username')"
      type="text"
      id="username"
      name="username"
      :rules="usernameRules"
      v-model.trim="username"
    />
    <ErrorMessage class="input-error-msg" name="username" />
  </div>
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
  props: {
    errors: {
      type: Object,
    },
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
  methods: {
    inputClassObject(name) {
      return {
        'input-control': true,
        'has-error': this.errors.hasOwnProperty(name),
      }
    },
  },
}
</script>
