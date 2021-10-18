import Vue from 'vue'
import Vuex from 'vuex'

import { nowplayingAPI } from '@/api/nowplayingdata'
import { comingsoonAPI } from '@/api/comingsoondata'
import { filmswipeAPI } from '@/api/filmswipedata'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowplayingIsShow: true,
    comingsoonIsShow: true,
    nowplayingList: [],
    comingsoonList: [],
    filmswipeList: []
  },
  mutations: {
    nowplayingMutation (state, data) {
      state.nowplayingList = data
    },
    comingsoonMutation (state, data) {
      state.comingsoonList = data
    },
    nowplayingisshowMutation (state, data) {
      state.nowplayingIsShow = data
    },
    comingsoonisshowMutation (state, data) {
      state.comingsoonIsShow = data
    },
    filmswiperMutation (state, data) {
      state.filmswipeList = data
    }
  },
  actions: {
    getNowplayingListAction (store) {
      nowplayingAPI().then(res => {
        store.commit('nowplayingMutation', res.data.data.films)
        store.commit('nowplayingisshowMutation', false)
      })
    },
    getComingsoonListAction (store) {
      comingsoonAPI().then(res => {
        store.commit('comingsoonMutation', res.data.data.films)
        store.commit('comingsoonisshowMutation', false)
      })
    },
    getFilmswipeListAction (store) {
      filmswipeAPI().then(res => {
        store.commit('filmswiperMutation', res.data.data)
      })
    }
  },
  modules: {
  }
})
