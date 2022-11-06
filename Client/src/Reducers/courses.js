import { RECEIVE_COURSES } from '../Actions/courses'

export default function Courses (state = {}, action) {
  switch(action.type) {
    case RECEIVE_COURSES :

      let Mcourses = {}
      action.courses.map((course)=>(Mcourses[course.ID]= course))
      return {
        ...state,
        ...Mcourses
      }
      default :
      return state
  }
}