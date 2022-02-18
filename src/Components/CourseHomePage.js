import {Component} from 'react'
import CourseLessonsNavigation from './CourseLessonsNavigation'
import CourseLessonOverview from './CourseLessonOverview'
import "./css/main.css";

class CourseHomePage extends Component {

    state={
        currentLessonID: ''
    }

    updateCurrentLesson= (ID)=> (this.setState(()=>({currentLessonID: ID})))
    
    

    render(){

        return(<div className="flex flex-row ">
            <CourseLessonsNavigation callback={this.updateCurrentLesson}/>
            <CourseLessonOverview currentLessonID={this.state.currentLessonID}/>
        </div>)
    }


}


export default CourseHomePage;