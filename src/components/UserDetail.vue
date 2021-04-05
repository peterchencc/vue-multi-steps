<template>
  <div>Username: {{ user.username }}</div>
  <div>Name: {{ user.firstName }} {{ user.lastName }}</div>
  <div>Email: {{ user.email }}</div>

  <div v-if="userHasData">
    <div>
      <img :src="responseData.avatar_url" alt="icon thank you envelope" />
    </div>
    <div class="">
      <a v-bind:href="responseData.html_url">{{ responseData.html_url }}</a>
    </div>
  </div>
  <div v-else>
    I'm sorry. Username not found in GitHub
  </div>

  <slot></slot>
</template>

<script>
import GitHubApi from '../services/GitHubApi'

export default {
  data() {
    return {
      user: this.$store.state.user,
      responseData: {},
    }
  },
  created() {
    GitHubApi()
      .get('/users/' + this.user.username)
      .then((response) => {
        this.responseData = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  computed: {
    userHasData() {
      return !(Object.keys(this.responseData).length === 0)
    },
  },
}
</script>

<style></style>
