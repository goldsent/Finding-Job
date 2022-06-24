import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postjopinfo:[],
    loginInfo:[
      {username:"",password:""}
    ],
    isLogged:false,
  },
  
  mutations: {
    addlogin(state, payload) {
      state.loginInfo.push(payload)
    },
    addpost(state, payload) {
      state.postjopinfo.push(payload)
    },

    editpost(state, payload) {
      return state.postjopinfo[payload.index] = payload.data
    },
    deletepost(state, payload) {
      return state.postjopinfo.splice(payload, 1)
    }
  },
  actions: {
    addpost({ commit }, payload) {
      commit("addpost", payload)
    },
    editpost({ commit }, payload) {
      commit("editpost", payload)
    },
    deletepost({ commit }, payload) {
      commit("deletepost", payload)
    },
    addlogin({ commit }, payload) {

      commit("addlogin", payload)
    }

  },
  modules: {
  }
})
