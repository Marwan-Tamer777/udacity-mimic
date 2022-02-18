import { RECEIVE_USERS, USER_ADD_ANSWER,USER_ADD_QUESTION } from '../Actions/users'


export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case USER_ADD_ANSWER:
      return {
        ...state,
         [action.authedUser]:{
          ...state[action.authedUser],
           answers: {
            ...state[action.authedUser].answers,
            [action.qid]:action.answer
             }
         }
      }
    case USER_ADD_QUESTION:
      return {
        ...state,
        [action.userID]: {
          ...state[action.userID],
          questions: state[action.userID].questions.concat([action.question.id])
        }
      }
    default :
      return state
  }
}
