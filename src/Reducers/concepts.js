import { RECEIVE_CONCEPTS } from '../Actions/concepts'

export default function Concepts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CONCEPTS :
      let Mconcepts = {};
      action.concepts.map((concept) => (Mconcepts[concept.ID] = concept));
      return {
        ...state,
        ...Mconcepts
      }
      default :
      return state
  }
}