/* eslint-disable no-sequences */
import {Component} from 'react'
import {connect} from 'react-redux'
import CourseInfoCard from './CourseInfoCard'

class CourseList extends Component {

  state = {
    page: 0,
  };

  componentDidMount() {
    document.getElementById("dots").insertAdjacentHTML("beforeend", this.dots());
  }

  componentDidUpdate(){
    document.getElementById('dots').innerHTML="";
    document.getElementById("dots").insertAdjacentHTML("beforeend", this.dots());
  }

  fadeOutAnimate(diffrence){
    if(diffrence>0){
      document.getElementById("CoursesCards").classList.toggle("animate-fadeOutLeft");
      setTimeout(function () {document.getElementById("CoursesCards").classList.toggle("animate-fadeOutLeft");}, 1000)
  }
    else{
      document.getElementById("CoursesCards").classList.toggle("animate-fadeOutRight");
      setTimeout(function () {document.getElementById("CoursesCards").classList.toggle("animate-fadeOutRight");}, 1000);
    }
  }

  fadeInAnimate(diffrence){
    if (diffrence< 0) {
      document.getElementById("CoursesCards").classList.toggle("animate-fadeInLeft");
      setTimeout(function () {document.getElementById("CoursesCards").classList.toggle("animate-fadeInLeft");
      }, 1000);
    } else {
      document.getElementById("CoursesCards").classList.toggle("animate-fadeInRight");
      setTimeout(function () {document.getElementById("CoursesCards").classList.toggle("animate-fadeInRight");}, 1000);
    }
  }

  dots(){

    var div = "<div>";
    for(var i = 0; i<Math.round(Object.keys(this.props.Courses).length / 6);i++){
      div = div + (i === this.state.page ?("<span class=\"text-9xl text-gray-700 \">.</span>")
      :
      ("<span class=\"text-9xl text-gray-500\">.</span>"))
    }

    div = div +"</div>"
    return(div)
  }

  updatePage(diffrence){

    if (
      this.state.page + diffrence >=
      Math.round(Object.keys(this.props.Courses).length / 6) 
    ) {
      this.setState(() => ({ page: 0 }));
    } else if (this.state.page + diffrence < 0) {
      this.setState(() => ({
        page: Math.round(Object.keys(this.props.Courses).length / 6) - 1,
      }));
    } else {
      this.setState(() => ({ page: this.state.page + diffrence }));
    }
  }

  render() {
    return (
      <div className=" flex items-center">
        <div className="m-5 p-10 bg-gray-700 text-center text-lg font-bold text-blue-400 w-1/6 rounded-2xl flex flex-row">
          <h3 className="">FAMOUS COURSES</h3>
          <span className=" font-black text-4xl">:</span>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <img
              src="https://www.udacity.com/assets/iridium/images/home-in/arrow-left-blue-solid.svg"
              alt="left arrow"
              className="h-full bg-transparent object-none self-center"
              onClick={() => (
                this.fadeOutAnimate(-1),
                setTimeout(
                  () => (this.updatePage(-1), this.fadeInAnimate(-1)),
                  900
                )
              )}
            />
            <div className="flex flex-row flex-wrap relative" id="CoursesCards">
              {
              Object.keys(this.props.Courses).length === 0 ? (
                <div className="flex flex-col content-center justify-center">
                  <img src="https://image.shutterstock.com/image-vector/web-page-error-500-broken-600w-1161990517.jpg"
                  alt="server problem" 
                  className=" object-cover"/>
                  <p className="text-xl font-extrabold text-blue-500">
                    There has been an error sadly and we couldn't retrieve the data from the server.
                  </p>
                </div>
              ) : (
                ""
              )
              }
              {Object.keys(this.props.Courses)
                .slice(this.state.page * 6, this.state.page * 6 + 6)
                .map((keyName) => (
                  <CourseInfoCard
                    course={this.props.Courses[keyName]}
                    key={this.props.Courses[keyName].ID}
                  />
                ))}
            </div>
            <img
              src="https://www.udacity.com/assets/iridium/images/home-in/arrow-right-blue-solid.svg"
              alt="right arrow"
              className="h-full bg-transparent object-none self-center mr-3"
              onClick={() => (
                this.fadeOutAnimate(1),
                setTimeout(
                  () => (this.updatePage(1), this.fadeInAnimate(1)),
                  900
                )
              )}
            />
          </div>
          <div id="dots"></div>
        </div>
      </div>
    );
  }
}

 function mapStateToProps ({Courses}) {
  return {
      Courses
  }
}

export default connect(mapStateToProps)(CourseList);
