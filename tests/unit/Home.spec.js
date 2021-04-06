import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Home from '@/views/Home.vue'

const store = createStore({
  state() {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        isAgreeToTerms: false,
      },
    }
  },
  mutations: {},
})

const wrapper = mount(Home, {
  global: {
    plugins: [store],
  },
  data() {
    return {
      currentStep: 0,
    }
  },
})

describe('Home component', () => {
  test('renders first step', () => {
    expect(wrapper.vm.currentStep).toBe(0)
    expect(wrapper.text()).toContain('Register Now!')
  })

  test('renders first step with next button', () => {
    const button = wrapper.find('button.btn-next')
    expect(button.text()).toContain('Next')
  })

  test('renders second step', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store],
      },
      data() {
        return {
          currentStep: 1,
        }
      },
    })
    expect(wrapper.text()).toContain('Personal Info')
  })

  test('renders third step', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [store],
      },
      data() {
        return {
          currentStep: 2,
        }
      },
    })
    expect(wrapper.text()).toContain('Almost there')
  })
})
