import {Component} from 'react'
import {connect} from 'react-redux'
import Nav from '../Util/Nav'
import Welcome from './WelcomeM'
import {handleInitialData} from '../../Actions/handleInital'
import { Route } from 'react-router'
import SearchBar from './Search'
import CourseList from './CourseList'
import SponsorsAndSpecials from './SponsorsAndSpecials'
import Footer from '../Util/Footer'
import SignUpView from '../SignUpView'
import SignInView from '../SignInView'
import {ROUTE_GENERAL_COURSE_PAGE, ROUTE_SIGN_UP, ROUTE_SIGN_IN, ROUTE_GENERAL_LESSON_PAGE} from '../../Utils/routes'
import CourseHomePage from '../CoursePage/CourseHomePage'
import LessonMainPage from '../LessonPage/LessonMainPage'

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
          
          <Route exact path="/">
            <div className='flex flex-row '>
            <Nav />
            <div className='flex flex-col overflow-y-auto transition-all duration-500'>
              <Welcome />
              <SearchBar />
              <CourseList />
              <SponsorsAndSpecials />
              <Footer />
            </div>
            </div>
          </Route>

          <Route path={ROUTE_SIGN_UP}>
            <SignUpView/>
          </Route>

          <Route path={ROUTE_SIGN_IN}>
            <SignInView />
          </Route>

          <Route path={ROUTE_GENERAL_COURSE_PAGE}>
            <CourseHomePage />
          </Route>

          <Route path={ROUTE_GENERAL_LESSON_PAGE}>
            <LessonMainPage />
          </Route>


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
