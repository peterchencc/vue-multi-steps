<template>
  <div class="user-detail">
    <div class="header">
      <div class="welcome">Welcome</div>
      <div class="desc">
        You are part of our connection in the Berlin GitHub Community.
      </div>
    </div>

    <div class="user-info">
      <div>Name: {{ user.firstName }} {{ user.lastName }}</div>
      <div>Email: {{ user.email }}</div>
      <div>Username: {{ user.username }}</div>
    </div>

    <div class="github">
      <div v-if="userHasData">
        <div>
          <img
            class="avatar-image"
            :src="responseData.avatar_url"
            alt="Github avatar image"
          />
        </div>
        <div class="">
          <a v-bind:href="responseData.html_url" target="_blank">
            {{ responseData.html_url }}
          </a>
          <ul>
            <li>followers: {{ responseData.followers }}</li>
            <li>following: {{ responseData.following }}</li>
          </ul>
        </div>
      </div>
      <div v-else class="github-error">
        Can't find your username in GitHub.
      </div>
    </div>

    <div class="footer">
      <button
        @click="this.$emit('toRestart')"
        type="button"
        class="btn-secondary"
      >
        Back to Home
      </button>
    </div>
  </div>
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

<style>
.header {
  border: 1 solid #dddddd;
  margin: 30px 0;
}
.header .welcome {
  margin: 10px 0;
  font-size: 1.75rem;
  font-weight: bold;
}
.user-info {
  margin-bottom: 50px;
}
.avatar-image {
  max-width: 200px;
}
.footer {
  display: flex;
  margin: 50px auto;
}
@media (min-width: 768px) {
  .user-detail {
    display: grid;
  }
  .header {
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .footer {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .user-info {
    padding: 10px;
    margin: auto;
  }
  .github {
    border: 1px solid #ddd;
    padding: 10px;
    margin: auto;
  }
}
</style>
