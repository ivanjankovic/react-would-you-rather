import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const SAVE_ANSWER  = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_VOTE = 'SAVE_VOTE'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function saveAnswer ({ qid, authedUser, answer}) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}
function saveVote ({ qid, authedUser, answer}) {
  return {
    type: SAVE_VOTE,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer (info) {
  return (dispatch) => {
    dispatch(saveAnswer(info))
    dispatch(saveVote(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleSaveAnswer: ', e)
        dispatch(saveAnswer(info))
        dispatch(saveVote(info))
        alert('There was an error in saving answer. Try again.')
      })
  }
}
