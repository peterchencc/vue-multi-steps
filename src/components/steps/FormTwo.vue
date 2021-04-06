<template>
  <div class="step-title">Almost there!</div>

  <div class="form-input">
    <label for="email">User Email</label>
    <Field
      :class="inputClassObject('email')"
      type="email"
      id="email"
      name="email"
      :rules="emailRules"
      v-model="email"
      autofocus
    />
    <ErrorMessage class="input-error-msg" name="email" />
  </div>

  <div class="form-input">
    <Field
      :class="inputClassObject('terms')"
      type="checkbox"
      id="terms"
      name="terms"
      :rules="termsRules"
      :value="true"
      v-model="isAgreeToTerms"
    />
    <label for="terms">Agree to Terms and Services</label>
    <ErrorMessage class="input-error-msg" name="terms" />
  </div>
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
  props: {
    errors: {
      type: Object,
    },
  },
  data() {
    return {
      emailRules: yup
        .string()
        .required()
        .email(),
      termsRules: yup
        .boolean()
        .required('You must agree to terms and services'),
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

<style></style>
