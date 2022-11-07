//import { _getUsers ,_getCourses,_getLessons,_getLessonParts,_getConcepts } from "../Utils/_DATA"
import { receiveUsers } from "./users"
import {receiveCourses} from './courses'
import {receiveLessons} from './lessons'
import {receiveLessonParts} from './lessonParts'
import {receiveConcepts} from './concepts'
let serverURL = "https://udacityclone.herokuapp.com";
async function inital(dispatch){
  let res;
  let data=[]
/*to access on phone, replace the localhost with the netwok IP */
  // try{
  // res = await fetch("${serverURL}/getUsers");
  // data = await res.json();
  // } catch(e){console.log(e)}
  // dispatch(receiveUsers(data))
  // data = [];

  try{
  res = await fetch(`${serverURL}/getCourses`);
  data = await res.json();
  } catch(e){console.log(e)}
  dispatch(receiveCourses(data));
  data = [];

  try{
  res = await fetch(`${serverURL}/getLessons`);
  data = await res.json();
  } catch(e){console.log(e)}
  dispatch(receiveLessons(data));
  data = [];

  try{
  res = await fetch(`${serverURL}/getLessonParts`);
  data = await res.json();
  } catch(e){console.log(e)}
  dispatch(receiveLessonParts(data));
  data = [];

  try{
  res = await fetch(`${serverURL}/getConcepts`);
  data = await res.json();
  } catch(e){console.log(e)}
  dispatch(receiveConcepts(data));

  /*_getUsers().then((users)=> (dispatch(receiveUsers(users))))
    _getCourses().then((courses)=> (dispatch(receiveCourses(courses))))
    _getLessons().then((lessons)=> (dispatch(receiveLessons(lessons))))
    _getLessonParts().then((lessonParts)=> (dispatch(receiveLessonParts(lessonParts))))
    _getConcepts().then((concepts)=> (dispatch(receiveConcepts(concepts)))) */
}

export function handleInitialData(){
  return (dispatch)=>(inital(dispatch))
}

/* for async action dispatches, the action
 should return a function not a plain action objet. this below example works too

export function handleInitialData () {
  return async (dispatch) => {
    let res;
    let data = [];
    //to access on phone, replace the localhost with the netwok IP 
    try {
      res = await fetch("${serverURL}/getUsers");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    dispatch(receiveUsers(data));
    data = [];

    try {
      res = await fetch("${serverURL}/getCourses");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    dispatch(receiveCourses(data));
    data = [];

    try {
      res = await fetch("${serverURL}/getLessons");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    dispatch(receiveLessons(data));
    data = [];

    try {
      res = await fetch("${serverURL}/getLessonParts");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    dispatch(receiveLessonParts(data));
    data = [];

    try {
      res = await fetch("${serverURL}/getConcepts");
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    dispatch(receiveConcepts(data));
  }
}
*/