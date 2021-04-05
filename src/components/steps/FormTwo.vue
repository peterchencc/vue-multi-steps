<template>
  <h2>step 3</h2>
  <label for="email">User Email</label>
  <Field
    type="email"
    id="email"
    name="email"
    :rules="emailRules"
    v-model="email"
  />
  <ErrorMessage name="email" />

  <Field
    type="checkbox"
    id="terms"
    name="terms"
    :rules="termsRules"
    :value="true"
    v-model="isAgreeToTerms"
  />
  <label for="terms">Agree to Terms and Services</label>
  <ErrorMessage name="terms" />
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'FormTwo',
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    return {
      emailRules: yup
        .string()
        .required()
        .email(),
      termsRules: yup
        .boolean()
        .required('You must agree to terms and conditions'),
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.state.user.email
      },
      set(value) {
        this.$store.commit('updateEmail', value)
      },
    },
    isAgreeToTerms: {
      get() {
        return this.$store.state.user.isAgreeToTerms
      },
      set(value) {
        this.$store.commit('updateIsAgreeToTerms', value)
      },
    },
  },
}
</script>

<style></style>
