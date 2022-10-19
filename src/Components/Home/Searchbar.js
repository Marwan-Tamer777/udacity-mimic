/* eslint-disable no-sequences */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTE_GENERAL_COURSE_PAGE } from '../../Utils/routes'


class SearchBar extends Component {
    state = {
        filtered: []
    }

    update(){
         this.setState({ filtered: 
            document.getElementById('searchInput').value=== '' ? (0):
                Object.keys(this.props.Courses).filter((keyName)=>(
                    ((this.props.Courses[keyName].about).toUpperCase()).search((document.getElementById('searchInput').value.toUpperCase())) >=0 ?
                    true : false
                ))
            })
    }

    componentDidMount(){
        document.getElementById("searchInput").addEventListener("keyup", ()=>(this.update()))
    }

    render() {
        return (

          <div className="mt-4 mx-auto ">

            <div id="search" className="bg-udacity-interactive-click rounded-lg p-2 w-fit h-fit">
              <div className="flex flex-row justify-center ">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='my-auto ml-auto mr-3' />
                <p className="text-center my-auto mr-auto text-white font-lg uppercase">
                  search
                </p>
              </div>

                <input type="text" id="searchInput"
                  placeholder="Search for courses.."
                  className="rounded-lg transition-all text-udacity-text-black"
                ></input>
            </div>

            <div id="searchResults" className={
              (this.state.filtered.length > 0 ? "block" : "hidden") +
              " flex flex-col fixed space-between top-top-nav right-0 z-20"}>
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

            <FontAwesomeIcon icon="fa-solid fa-x" className={ " text-udacity-text-black " +
                (this.state.filtered.length > 0 ? "block" : "hidden") +
                " fixed w-10 h-10 top-0 right-0 z-50 mr-5 mt-1"
              }
              alt="Exit"
              onClick={() => (
                (document.getElementById("searchInput").value = ""),
                this.setState({ filtered: [] })
              )}/>
            {/* <img
              className={
                (this.state.filtered.length > 0 ? "block" : "hidden") +
                " fixed w-10 h-10 top-0 right-0 z-50 mr-5 mt-1"
              }
              src="https://cdn-icons-png.flaticon.com/128/0/39.png"
              alt="Exit"
              onClick={() => (
                (document.getElementById("searchInput").value = ""),
                this.setState({ filtered: [] })
              )}
            /> */}

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