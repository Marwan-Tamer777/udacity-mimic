import {Component} from 'react'
import CourseNav from "./CourseNav"
import CourseLessonOverview from './CourseLessonOverview'


class CourseHomePage extends Component {

    state={
        currentLessonID: ''
    }

    updateCurrentLesson= (ID)=> (
        this.setState(()=>({currentLessonID: ID})))
    
    

    render(){

        return (
          <div className="flex flex-row relative w-screen">
            <CourseNav callback={this.updateCurrentLesson} />
            <CourseLessonOverview currentLessonID={this.state.currentLessonID}/>
          </div>
        );
    }


}


export default CourseHomePage;