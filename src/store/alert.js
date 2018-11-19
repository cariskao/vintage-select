export default {
  namespaced: true,
  state: {
    messages: []
  },
  mutations: {
    pushMessage(state, message){
      state.messages.push(message)
    },
    removeMessage(state, index) {
      state.messages.splice(index, 1);
    }
  },
  actions: {
    updateMessage({commit, dispatch}, {message, status}) {
      const timestamp = Math.floor(new Date() / 1000);
      commit('pushMessage', {
        message,
        status,
        timestamp
      })
      dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessageWithTiming({state, commit}, timestamp) {
      setTimeout(() => {
        state.messages.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            commit('removeMessage', index)
          }
        })
      }, 3000);
    },
  }
}