import { RECEIVE_LESSONS } from '../Actions/lessons'

export default function lessons (state = {}, action) {
  switch(action.type) {
    case RECEIVE_LESSONS :
      let Mlessons = {};
      action.lessons.map((lesson) => (Mlessons[lesson.ID] = lesson));
      return {
        ...state,
        ...Mlessons
      }
      default :
      return state
  }
}