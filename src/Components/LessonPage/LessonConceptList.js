import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Component} from 'react'
import {connect} from 'react-redux'

class LessonConceptList extends Component {

  //toggles wether the it will show to the user or not depending if the Title Tab Div 
  //of that list have the "expand_list" or not.
  toggleList(e) {
    
    e.target.classList.toggle("expand_list")
  }

  render(){
        
      let lesson = this.props.LessonParts[(window.location.pathname).substring(8,30)]

      return (
        <div className="basis-[25%] flex flex-col h-screen bg-udacity-emerald">
          <div
            className="flex flex-row group p-5"
            onClick={() => window.history.back()}
          >
            <div className="basis-[20%] flex justify-center items-center">
              <FontAwesomeIcon
                icon="fa-solid fa-caret-left"
                className="text-udacity-interactive-click group-hover:text-udacity-white
                 group-hover:scale-125 transition-all"
              />
            </div>
            <h4 className=" text-udacity-text-white text-lg">{lesson.title}</h4>
          </div>

          <div className="lesson_list flex-auto">
            <div
              className="lesson_list_tab expand_list flex flex-row justify-between item-center
              p-5 bg-[rgba(31,41,50,.5)] shadow-[inset_0_-1px_0_0_rgb(0_0_0_/_50%),inset_0_1px_0_0_rgb(0_0_0_/_50%)]
              text-udacity-text-gray hover:text-udacity-text-white cursor-pointer"
              onClick={this.toggleList}
            >
              <span>CONCEPTS</span>
              <FontAwesomeIcon
                icon="fa-solid fa-caret-up"
                className="transition-all"
              />
            </div>

            <ol className="flex flex-col bg-blue-udacity overflow-y-auto flex-auto">
              {lesson.conceptsID.map((ID, index) => (
                <li
                  className="p-6 bg-blue-udacity hover:text-white hover:bg-blue-900 text-lg font-semibold text-gray-400
                  text-center transform transition hover:-translate-y-2"
                  key={ID}
                  to={window.location.pathname.substring(0, 30) + "/" + ID}
                  onClick={() => this.props.callback(ID)}
                >
                  {index + 1 + ". " + this.props.Concepts[ID].description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
  }


}

function mapStateToProps ({Courses,Lessons,LessonParts,Concepts}) {
  return {
      Courses,
      Lessons,
      LessonParts,
      Concepts
  }
}
export default connect(mapStateToProps)(LessonConceptList);

/*{lesson.conceptsID.map((ID)=>(<NavLink key={ID} className="Lesson_list_item" 
                to={window.location.pathname.substring(0,30)+'/'+ID} onClick={()=>(this.props.callback(ID))}>
                    <li>
                        {this.props.Concepts[ID].description}
                    </li>
                </NavLink>))}
                 */