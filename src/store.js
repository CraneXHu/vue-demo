/**
 * Created by pkhope on 2016/10/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user:{
    nickname: 'pkhope',
    avatar: '../assets/logo.png'
  },
  sessions:[
    {
      id: 1,
      user: {
        nickname: 'pkhope',
        avatar: '../assets/logo.png'
      },
      messages: [
        {
          msg: 'Hello world',
          time: '00:00',
          self: false
        }
      ]
    },
  ],
  currentSessionId: 1
}

const mutations = {
  INIT_DATA(state){
    let data = localStorage.getItem('chat_session');
    if (data) {
      state.sessions = JSON.parse(data);
    }
  },
  SEND_MESSAGE (state, content){
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    var session = state.sessions.find(item => item.id === state.currentSessionId)
    session.messages.push({
      msg: content,
      time: time,
      self: true
    })
  }
}

const getters = {
  user: ({ user }) => user,
  session: ({ sessions, currentSessionId}) => sessions.find(session => session.id === currentSessionId),
  sessions: ({ sessions }) => sessions,
}

const actions = {
  initData: ({ commit }) => commit('INIT_DATA'),
  sendMessage: ({ commit }, content) => commit('SEND_MESSAGE', content)
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

store.watch(
  (state) => state.sessions,
  (val) => {
    console.log('CHANGE: ', val)
    localStorage.setItem('chat_session', JSON.stringify(val))
  },
  {
    deep: true
  }
)

export default store
