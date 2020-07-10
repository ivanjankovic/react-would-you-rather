export const RECEIVE_USERS  = 'RECEIVE_USERSS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}