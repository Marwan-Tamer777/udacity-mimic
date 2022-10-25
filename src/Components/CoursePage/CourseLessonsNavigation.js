import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'




class CourseLessonsNavigation extends Component {

    render(){

        let course = this.props.Courses[(window.location.pathname).substring(8,30)]
        if(course.lessonsID.length === 1){return<div></div>}
        return (
          <div className="overflow-y-auto shadow-lg transition-all duration-500">
            <h4
              className="bg-gradient-to-br from-udacity-interactive-click to-udacity-greenDark
    p-10 text-udacity-text-white font-bold text-center"
            >
              {course.about}
            </h4>
            <div>
              {course.lessonsID.map((ID, index) => (
                <NavLink
                  className="flex flex-row items-center gap-4 bg-udacity-emerald text-udacity-text-gray 
                  px-4 py-10 border-udacity-text-header border-b-[0.1rem] border-solid"
                  key={ID}
                  to={window.location.pathname.substring(0, 30) + "/" + ID}
                  onClick={() => this.props.callback(ID)}
                >
                  <p className=" ">{index + 1 + "."}</p>
                  <p>{this.props.Lessons[ID].title}</p>
                  <FontAwesomeIcon icon="fa-solid fa-check" className='ml-auto text-udacity-greenLight' />
                </NavLink>
              ))}
            </div>
          </div>
        );
    }


}

function mapStateToProps ({Courses,Lessons}) {
  return {
      Courses,
      Lessons
  }
}
export default connect(mapStateToProps)(CourseLessonsNavigation);