<template>
  <h2>step 3</h2>
  <label for="email">User Email</label>
  <input type="email" id="email" v-model="email" />

  <input type="checkbox" id="checkbox" v-model="isAgreeToTerms" />
  <label for="checkbox">Agree to Terms and Services</label>
</template>

<script>
export default {
  name: 'FormTwo',
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
