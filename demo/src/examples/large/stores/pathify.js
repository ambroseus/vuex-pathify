import { make } from 'vuex-pathify'

const state = {
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joe@bloggs.com',
  website: 'www.bloggs.com',
  phone: '0123 456 789',
  address: {
    line1: '123 Some Street',
    line2: 'Somewhere',
    town: 'Sometown',
    zipcode: '12345',
  }
}

const mutations = make.mutations(state)

const getters = {
  name: state => `${state.firstName} ${state.lastName}`
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}