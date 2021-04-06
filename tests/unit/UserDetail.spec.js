import { mount } from '@vue/test-utils'
import UserDetail from '@/components/UserDetail.vue'

const $store = {
  state: {
    user: {
      firstName: 'Peter',
      lastName: 'Chen',
      username: 'peterchencc',
      email: 'peterchencc@gmail.com',
      isAgreeToTerms: true,
    },
  },
  commit: jest.fn(),
}

const wrapper = mount(UserDetail, {
  global: {
    mocks: {
      $store,
    },
  },
  data() {
    return {
      responseData: {},
    }
  },
})

describe('UserDetail component', () => {
  test('renders user info', () => {
    expect(wrapper.find('.user-info').html()).toContain('Peter')
    expect(wrapper.find('.user-info').html()).toContain('Chen')
    expect(wrapper.find('.user-info').html()).toContain('peterchencc@gmail.com')
  })
})
