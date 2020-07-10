import { RECEIVE_USERS } from '../actions/users'
import { SAVE_VOTE, ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_VOTE :
      const { qid, authedUser, answer } = action
      return {
        ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        }
    case ADD_QUESTION :
      const { question } = action
      console.log(action)
      const { author, id} =  question
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default :
      return state
  }
}