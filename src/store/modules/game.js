import { make } from 'vuex-pathify'

const GAME_CONTENT = require('../constants/questions.json')
const state = {
  active: {
    stage: GAME_CONTENT[0],
    question: GAME_CONTENT[0].questions[0]
  },
  list: GAME_CONTENT
}

export default {
  namespaced: true,
  state,
  getters: make.getters(state),
  mutations: make.mutations(state),
  actions: {
    ...make.actions(state),
    setupGame ({ commit, state }) {
      const active = {
        stage: state.list[0],
        question: state.list[0].questions[0]
      }

      commit('SET_ACTIVE', active)
    },
    nextQuestion ({ commit, state, dispatch }) {
      try {
        const nextIndex = state.active.stage.questions.indexOf(state.active.question) + 1
        if (nextIndex < state.active.stage.questions.length) {
          const active = {
            stage: state.active.stage,
            question: state.active.stage.questions[nextIndex]
          }

          commit('SET_ACTIVE', active)
        } else {
          dispatch('nextStage')
        }
      } catch (e) {
        console.error(e)
        dispatch('setupGame')
      }
    },
    nextStage ({ commit, state, dispatch }) {
      try {
        const nextIndex = state.list.indexOf(state.active.stage) + 1
        console.log('next stage:', nextIndex)
        if (nextIndex < state.list.length) {
          const active = {
            stage: state.list[nextIndex],
            question: state.list[nextIndex].questions[0]
          }

          commit('SET_ACTIVE', active)
        } else {
          dispatch('setupGame')
        }
      } catch (e) {
        console.error(e)
        dispatch('setupGame')
      }
    },
    setAnswer ({ commit, state }, answer) {
      const stageIndex = GAME_CONTENT.indexOf(state.currentStage)

      if (stageIndex < GAME_CONTENT.length) {
        const questionIndex = state.currentQuestionSet.indexOf(state.currentQuestion)
        if (questionIndex < GAME_CONTENT[stageIndex].questions.length) {
          GAME_CONTENT[stageIndex].questions[questionIndex].answer = answer
          console.log(GAME_CONTENT[stageIndex].questions[questionIndex])
        }
      }
    }
  }
}
