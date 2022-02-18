import './css/CourseLessonOverview.css'
import {Component} from 'react'
import {connect} from 'react-redux'
import { ROUTE_GENERAL_COURSE_PAGE } from '../Utils/routes'
import { NavLink } from 'react-router-dom'
import "./css/main.css";


class CourseLessonOverview extends Component {

    render(){

        
        let course = this.props.Courses[(window.location.pathname).substring(8,30)]
        let lesson = this.props.currentLessonID;
        let lessonParts = lesson.length ===0 ? ('') : (this.props.Lessons[lesson].lessonPartsID.map((ID)=>(
            this.props.LessonParts[ID]
        )))

        if(lesson==='' && course.lessonsID.length!==1){return <div>{/*add a homepage for the course here */}</div>}
        
        else if(lesson==='' && course.lessonsID.length ===1){
            lesson= course.lessonsID[0]
            lessonParts = (this.props.Lessons[lesson].lessonPartsID.map((ID)=>(
            this.props.LessonParts[ID]
        )))
        window.history.pushState({},'',new URL(window.location.origin+ ROUTE_GENERAL_COURSE_PAGE + course.ID+ '/'+lesson))
        }

        return(<div className="w-4/5 flex flex-col justify-start content-center absolute right-0 top-top-nav">
            <div>
                <h1 className="text-4xl bg-gray-700 text-blue-400 p-10 font-bold">{(course.lessonsID.indexOf(lesson)+1)+ '. '+  this.props.Lessons[lesson].title}</h1>
            </div>
            <div>
                <ul>
                    {lessonParts.map((lessonPart,index)=>(<NavLink to={'/Lesson/'+lessonPart.ID}>
                    <li className=" border-solid border-2 border-black shadow-2xl hover:shadow-none
                    m-10 pl-10 flex flex-row rounded-2xl justify-start content-center bg-white">
                        <h3 className="my-auto text-gray-500 font-medium text-xl">Lesson {index+1}:</h3>
                        <div className=" mx-auto flex flex-col justify-evenly content-evenly">
                        <p className="text-2xl text-blue-400 font-semibold">{lessonPart.title}</p>
                        <p className=" font-medium p-4">{lessonPart.description}</p>
                        </div>
                        <img src={lessonPart.imgURL} alt="pic" className=" right-0 object-cover w-1/3 h-1/2 rounded-r-2xl"/>
                    </li>
                    </NavLink>))}
                </ul>
            </div>
        </div>)
    }


}

function mapStateToProps ({Courses,Lessons, LessonParts}) {
  return {
      Courses,
      Lessons,
      LessonParts
  }
}
export default connect(mapStateToProps)(CourseLessonOverview);