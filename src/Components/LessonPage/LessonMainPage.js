import {Component} from 'react'
import {connect} from 'react-redux'
import LessonConceptList from './LessonConceptList'
import ConceptPage from './ConceptPage'

class LeessonMainPage extends Component {
  state = {
    currentConceptID:
      this.props.LessonParts[window.location.pathname.substring(8, 30)].conceptsID[0]
  };

  updateCurrentConcept = (ID) =>
    this.setState(() => ({ currentConceptID: ID }));

  render() {
    return (
      <div className="flex flex-row w-screen text-udacity-text-header">
        <LessonConceptList callback={this.updateCurrentConcept} />
        <ConceptPage currentConceptID={this.state.currentConceptID} />
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

