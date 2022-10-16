import {Component} from 'react'
import {connect} from 'react-redux'


class LessonConceptList extends Component {

    render(){
        
        let lesson = this.props.LessonParts[(window.location.pathname).substring(8,30)]

        return (
          <div className=" w-1/5  border-2  border-black shadow-lg h-list fixed left-0 top-top-nav z-10">
            <h4 className="p-3 bg-gray-700 text-blue-400 font-semibold text-xl">
              {lesson.title}
            </h4>
            <div>
              <ol className="flex flex-col overflow-y-auto h-smallerList bg-blue-udacity">
                {lesson.conceptsID.map((ID, index) => (
                  <li
                    className="w-full p-6 bg-blue-udacity hover:text-white hover:bg-blue-900 text-lg font-semibold text-gray-400
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