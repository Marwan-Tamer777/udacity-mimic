/* eslint-disable no-sequences */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { ROUTE_GENERAL_COURSE_PAGE } from '../../Utils/routes'


class SearchBar extends Component {
    state = {
        filtered: []
    }

    update(){
         this.setState({ filtered: 
            document.getElementById('myInput').value=== '' ? []:
                Object.keys(this.props.Courses).filter((keyName)=>(
                    ((this.props.Courses[keyName].about).toUpperCase()).search((document.getElementById('myInput').value.toUpperCase())) >=0 ?
                    true : false
                ))
            })
    }

    componentDidMount(){
        document.getElementById("myInput").addEventListener("keyup", ()=>(this.update()))
    }

    render() {
        return (
          <div className="flex flex-col mt-4 w-1/6 mx-auto">
            <div id="Search">
              <div className="bg-gray-900 rounded-lg shadow-md p-2 z-20">
                <div className="flex flex-row justify-center">
                <i class="fa-solid fa-magnifying-glass text-white my-auto ml-auto"></i>
                  <p className="text-center text-xl my-auto mr-auto text-white font-lg uppercase">
                    search
                  </p>
                </div>
                <form className="rounded-lg">
                  <input
                    autoComplete="off"
                    type="text"
                    id="myInput"
                    placeholder="Search for courses.."
                    className="rounded-lg hover:bg-gray-300"
                  ></input>
                </form>
              </div>
            </div>
            <div className=" flex flex-col fixed space-between top-top-nav right-0 z-20">
              {this.state.filtered.map((item) => (
                <Link
                  className=" m-2 p-4 bg-blue-600 w-52 rounded-xl shadow-2xl text-center text-md font-semibold
                        hover:bg-blue-400"
                  to={ROUTE_GENERAL_COURSE_PAGE + item}
                >
                  {this.props.Courses[item].about}
                </Link>
              ))}
            </div>
            <img
              className={
                (this.state.filtered.length > 0 ? "block" : "hidden") +
                " fixed w-10 h-10 top-0 right-0 z-50 mr-5 mt-1"
              }
              src="https://cdn-icons-png.flaticon.com/128/0/39.png"
              alt="Exit"
              onClick={() => (
                (document.getElementById("myInput").value = ""),
                this.setState({ filtered: [] })
              )}
            />
            <div
              className={
                (this.state.filtered.length > 0 ? "block" : "hidden") +
                " fixed w-screen h-screen top-top-nav right-0 z-10 backdrop-filter backdrop-brightness-50"
              }
            ></div>
          </div>
        ); 
    }
}

 function mapStateToProps ({Courses}) {
  return {
      Courses
  }
}

export default connect(mapStateToProps)(SearchBar)