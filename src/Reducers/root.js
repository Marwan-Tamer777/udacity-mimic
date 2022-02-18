import { combineReducers } from 'redux'
import users from './users'

import currentUser from './currentUser'
import Courses from './courses'
import Lessons from './lessons'
import LessonParts from './lessonParts'
import Concepts from './concepts'

export default combineReducers({
  users,
  currentUser,
  Courses,
  Lessons,
  LessonParts,
  Concepts
})