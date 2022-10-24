import {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'




class CourseLessonsNavigation extends Component {

    render(){

        let course = this.props.Courses[(window.location.pathname).substring(8,30)]
        if(course.lessonsID.length === 1){return<div></div>}
        return (
          <div className="overflow-y-auto border-2 border-black shadow-lg transition-all duration-500">
            <h4 className="p-3 bg-gray-700 text-blue-400 font-semibold text-xl">
              {course.about}
            </h4>
            <ol className="flex flex-col h-full bg-white">
              {course.lessonsID.map((ID, index) => (
                <NavLink
                  className="bg-white"
                  key={ID}
                  to={window.location.pathname.substring(0, 30) + "/" + ID}
                  onClick={() => this.props.callback(ID)}
                >
                  <li
                    className="p-5 bg-gray-300 hover:bg-gray-200 no-underline text-lg font-semibold text-blue-400
                   rounded-xl shadow-xl m-5 transform transition hover:-translate-y-2"
                  >
                    {index + 1 + ". " + this.props.Lessons[ID].title}
                  </li>
                </NavLink>
              ))}
            </ol>
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