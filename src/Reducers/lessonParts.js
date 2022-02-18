import { RECEIVE_LESSONS_PARTS } from '../Actions/lessonParts'

export default function lessonParts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_LESSONS_PARTS :
      let MlessonParts = {};
      action.lessonParts.map((lessonPart) => (MlessonParts[lessonPart.ID] = lessonPart));
      return {
        ...state,
        ...MlessonParts
      }
      default :
      return state
  }
}