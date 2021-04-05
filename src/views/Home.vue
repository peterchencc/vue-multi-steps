<template>
  <div class="home">
    <UserDetail v-if="this.showUserDetail">
      <button @click="toRestart()" type="button">
        restart
      </button>
    </UserDetail>

    <Form v-else v-slot="{ handleSubmit, values, errors }">
      <component :is="this.stepsList[this.currentStep]"></component>
      <div class="">
        <button @click="toPrevious" v-show="!isFirstStep" type="button">
          Back
        </button>

        <button
          :disabled="!validateBeforeSubmit(values, errors)"
          @click="isLastStep ? onSubmit() : handleSubmit($event, toNext)"
          type="button"
        >
          {{ isLastStep ? `Submit` : `Next` }}
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Form } from 'vee-validate'
import Intro from '../components/steps/Intro.vue'
import FormOne from '../components/steps/FormOne.vue'
import FormTwo from '../components/steps/FormTwo.vue'
import UserDetail from '../components/UserDetail.vue'

export default {
  name: 'Home',
  components: { Form, Intro, FormOne, FormTwo, UserDetail },
  data() {
    return {
      currentStep: 0,
      stepsList: ['Intro', 'FormOne', 'FormTwo'],
      showUserDetail: false,
    }
  },

  computed: {
    isFirstStep() {
      return this.currentStep === 0
    },
    isLastStep() {
      return this.currentStep === this.stepsList.length - 1
    },
  },
  methods: {
    validateBeforeSubmit(values, errors) {
      // check if validation's errors object is empty
      const noErrors = Object.keys(errors).length === 0
      // check each of the validation's values has value
      const valuesAreNotEmpty = (obj) => {
        if (Object.keys(obj).length === 0) return true
        return Object.values(obj).every(
          (x) => !(!x || x === undefined || x.length === 0)
        )
      }

      return noErrors && valuesAreNotEmpty(values)
    },
    onSubmit() {
      this.showUserDetail = true
    },
    toRestart() {
      this.currentStep = 0
      this.showUserDetail = false
      this.resetUserState()
    },
    toPrevious() {
      this.currentStep--
    },
    toNext() {
      this.currentStep++
    },
    ...mapActions(['resetUserState']),
  },
}
</script>
