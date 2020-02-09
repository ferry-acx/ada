function incrementStageIndex (state) {
  state.currentStageIndex++
}

function setCurrentQuestionSet (state, payload) {
  state.currentQuestionSet = payload
}

function setCurrentQuestion (state, payload) {
  state.currentQuestion = payload
}

function incrementQuestionIndex (state) {
  state.currentQuestionIndex++
}

function resetQuestionIndex (state) {
  state.currentQuestionIndex = 0
}

export default {
  incrementStageIndex,
  setCurrentQuestionSet,
  setCurrentQuestion,
  incrementQuestionIndex,
  resetQuestionIndex
}
