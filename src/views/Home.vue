<template>
  <div class="home">
    <keep-alive>
      <component :is="currentStepComponent"></component>
    </keep-alive>

    <div class="">
      <button @click="toPrevious" v-show="!isFirstStep()">Back</button>
      <button @click="toNext" v-show="!isLastStep()">
        Next
      </button>
      <button @click="handleSubmit" v-show="isLastStep()">Submit</button>
    </div>
  </div>
</template>

<script>
import Intro from '../components/steps/Intro.vue'
import FormOne from '../components/steps/FormOne.vue'
import FormTwo from '../components/steps/FormTwo.vue'

export default {
  name: 'Home',
  components: { Intro, FormOne, FormTwo },
  data() {
    return {
      currentStep: 0,
      steps: ['Intro', 'FormOne', 'FormTwo'],
    }
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep]
    },
  },
  methods: {
    isFirstStep() {
      return this.currentStep === 0
    },
    isLastStep() {
      return this.currentStep === this.steps.length - 1
    },
    toPrevious() {
      this.currentStep--
    },
    toNext() {
      this.currentStep++
    },
  },
}
</script>
