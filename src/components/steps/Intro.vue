<template>
  <div class="step-title">Register Now!</div>

  <p>Build up your engineering connection!</p>
  <br />
  <p>Just your name, GitHub's username and Email.</p>
  <p>After submitted your personal information, you will join the biggest engineering community in Berlin.</p>
  <br />
  <p>What we offer:</p>
  <p>
    <ul>
      <li>Daily email newsletter</li>
      <li>Regular team events (online)</li>
      <li>Mentorship Program</li>
    </ul>
  </p>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    errors: {
      type: Object,
    },
  },
}
</script>

<style>
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
</style>
