import {Component} from 'react'
import {connect} from 'react-redux'
import LessonConceptList from './LessonConceptList'
import ConceptPage from './ConceptPage'

class LeessonMainPage extends Component {

    state={
        currentConceptID: ''
    }

    updateCurrentConcept = (ID)=> (this.setState(()=>({currentConceptID: ID})))
    
    

    render(){
        return (
          <div className="flex flex-row">
            <LessonConceptList callback={this.updateCurrentConcept} />
            {<ConceptPage currentConceptID={this.state.currentConceptID} />}
          </div>
        );
    }


}

function mapStateToProps ({Courses,Lessons,LessonParts}) {
  return {
      Courses,
      Lessons,
      LessonParts
  }
}
export default connect(mapStateToProps)(LeessonMainPage);

