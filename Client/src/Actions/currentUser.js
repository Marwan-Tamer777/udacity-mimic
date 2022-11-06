export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const LOGOUT = "LOGOUT"
export const UPDATE_CURRENT_USER_Q = 'UPDATE_CURRENT_USER_Q'

export function receiveCurrentUser (user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
}

export function updateCurrentUser(qid,answer){
  return{
    type: UPDATE_CURRENT_USER,
    qid,
    answer
  }
}

export function currentUserAddQ (question){
  return{
    type: UPDATE_CURRENT_USER_Q,
    question
  }
}
export function logOut (){
  return{
    type: LOGOUT,
    user: null,
  }
}