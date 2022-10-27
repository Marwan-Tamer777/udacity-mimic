import {Component} from 'react'
import {connect} from 'react-redux'
import { ROUTE_GENERAL_COURSE_PAGE } from '../../Utils/routes'
import CourseLessonCard from './CourseLessonCard';



class CourseLessonOverview extends Component {


  toggleStickyHeader(){

    let list = document.getElementById("courseLessonsList");
    let header = document.getElementById("courseHeader");

    let scrollLength = list.scrollHeight - list.offsetHeight
    if((list.scrollTop/scrollLength)>0.25){
      header.classList.add("course-header-sticky");
    } else {
      header.classList.remove("course-header-sticky");
    }
  }

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


        return (
          <div className="grow flex flex-col justify-start content-center relative transition-all duration-500">
            <div
              id="courseHeader"
              className=" text-udacity-text-black sticky top-0"
            >
              <h1
                className=" border-[#dbe2e8] border-b-[0.1rem] border-solid
               text-4xl p-10 font-thin transition-all duration-300"
              >
                {course.lessonsID.indexOf(lesson) +
                  1 +
                  ". " +
                  this.props.Lessons[lesson].title}
              </h1>

              <div className="flex flex-row p-4 justify-between items-center">
                <p>
                  {course.lessonsID.indexOf(lesson) ===
                  course.lessonsID.length - 1
                    ? `Proceed to Part ${
                        course.lessonsID.indexOf(lesson) + 1
                      } to continue learning`
                    : `You have completed all requirements for Part ${course.lessonsID.length}`}
                </p>
                <p>100% VIEWED</p>
              </div>
            </div>

            <div
              id="courseLessonsList"
              onScroll={this.toggleStickyHeader}
              className="overflow-y-auto"
            >
              <ul className="flex flex-col gap-6">
                {lessonParts.map((lessonPart, index) => (
                  <CourseLessonCard lessonPart={lessonPart} index={index} />
                ))}
              </ul>
            </div>
          </div>
        );
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