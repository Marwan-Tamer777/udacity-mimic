import {Component} from 'react'
import {connect} from 'react-redux'
import Nav from './Util/Nav'
import Welcome from './Home/WelcomeM'
import {handleInitialData} from '../Actions/handleInital'
import { Route ,Routes} from 'react-router'
import Homepage from './Home/Home'
import SignUpView from './SignUpView'
import SignInView from './SignInView'
import {ROUTE_GENERAL_COURSE_PAGE, ROUTE_SIGN_UP, ROUTE_SIGN_IN, ROUTE_GENERAL_LESSON_PAGE} from '../Utils/routes'
import CourseHomePage from './CoursePage/CourseHomePage'
import LessonMainPage from './LessonPage/LessonMainPage'

class App extends Component {

  state ={
    dataloaded: 0
  }

  async dataLoad(){
    this.props.dispatch(handleInitialData()).then(()=>(this.setState(()=>({dataloaded:1}))))
  }
  componentDidMount(){
      const script = document.createElement("script");
      script.src = "https://kit.fontawesome.com/46a96426bb.js";
      script.crossOrigin = "anonymous"
      script.async = true;

    
      document.body.appendChild(script);
    
        this.dataLoad()
  }

    render() {

        if(this.state.dataloaded===0){
          return<div className="w-screen h-screen text-8xl bg-gray-700 font-extrabold text-blue-400
         uppercase flex  flex-row justify-center content-center"><p>loading...</p></div>}


      return (
        <div className="App flex flex-row h-[100vh] overflow-y-hidden text-udacity-text-white">
          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage/>}
            ></Route>

            <Route path={ROUTE_SIGN_UP} element={<SignUpView />}></Route>

            <Route path={ROUTE_SIGN_IN} element={<SignInView />}></Route>

            <Route
              path={ROUTE_GENERAL_COURSE_PAGE + "*"}
              element={<CourseHomePage />}
            ></Route>

            <Route
              path={ROUTE_GENERAL_LESSON_PAGE + "*"}
              element={<LessonMainPage />}
            ></Route>
          </Routes>
        </div>
      );
  }
}

function mapStateToProps ({Courses,Concepts}) {
  return {
    Courses,
    Concepts
  }
}

export default connect(mapStateToProps)(App);
