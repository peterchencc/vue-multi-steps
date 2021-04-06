<template>
  <Header />
  <main>
    <router-view />
  </main>
  <footer>
    <p>Vue Mutli-Step Form - Peter Chen</p>
  </footer>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header,
  },
}
</script>

<style>
/* Reset Global selectors */
html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

* {
  padding: 0;
  margin: 0;
}

button,
input {
  background-color: transparent;
  border-style: none;
}

a:focus,
button:focus,
input:focus {
  outline-width: 0;
}
/* Reset Global selectors */

main {
  min-height: 90vh;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
