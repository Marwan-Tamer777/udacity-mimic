/* eslint-disable no-sequences */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTE_GENERAL_COURSE_PAGE } from '../../Utils/routes'
import FocusableButton from '../Util/FocusableButton'

/*
    The search functionality is split into 3 parts.
    1. the actual search bar.
    2. the search results list
    3. the close button
*/

class SearchBar extends Component {
  //the filtered state is an array of the course objects that fit the search query.
    state = {
        filtered: []
    }

    //this function simply takes the available courses provided by the redux store
    //and filters them depending if any of their "titles" contains the current search term in it
    update(){
      console.group("Rotation")
      console.log(this.state.filtered)
         this.setState({ filtered: 
            document.getElementById('searchInput').value === '' ? ([]):
                Object.keys(this.props.Courses).filter((keyName)=>(
                    ((this.props.Courses[keyName].about).toUpperCase()).search(
                      (document.getElementById('searchInput').value.toUpperCase())) 
                      >=0 ? true : false))
            })
      console.log(this.state.filtered)
      console.groupEnd()
    }

    componentDidMount(){
        document.getElementById("searchInput").addEventListener("keyup", ()=>(this.update()))
    }

    render() {
        return (

          <div className="mt-4 relative">

            <div id="search" className="bg-udacity-interactive-click flex flex-col justify-center rounded-lg p-2 mx-auto w-[40%] h-fit">
              <div className="flex flex-row justify-center items-center ">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='mr-3' />
                <p className="text-center text-white font-lg uppercase">
                  search
                </p>
              </div>

              <input type="text" id="searchInput"
                placeholder="Search for courses.."
                className="rounded-lg transition-all text-udacity-text-black m-auto">
              </input>
            </div>

              {/*
                Thg search results iterates over the filtered state and output course cards
              */}
            <div id="searchResults" className={
              (this.state.filtered.length > 0 ? "block" : "hidden") +
              " flex flex-col transition-all gap-11 p-6 justify-center"}>
              {this.state.filtered.map((item) => (
                <Link to={ROUTE_GENERAL_COURSE_PAGE + item} className=" course-search-card group relative w-full rounded-xl overflow-hidden 
                 flex flex-row transition-all duration-500 shadow-udacity-standard hover:shadow-hovered ">
                   
                  <div className=' basis-[80%] p-8 flex flex-col items-start gap-2 text-udacity-text-black'>
                    <p className=' uppercase font-thin text-sm'>free course</p>
                    <p className=' font-semibold'>{this.props.Courses[item].about}</p>
                    <p className=' text-sm'>{this.props.Courses[item].description}</p>
                  </div>

                  <FocusableButton text="Program Home"/>

                {/**
                 * this div works as the gradient background image for the above button
                 */}
                  <div className=' absolute bg-black transition-all duration-500 w-[20%] 
                  h-full right-0 top-0  bg-courseCard opacity-30 group-hover:opacity-50 -z-10
                  before:absolute before:-left-[20%] before:-bottom-[10%] before:rotate-[20deg]  before:bg-udacity-white before:h-[150%] before:w-[50%]'>
                  </div>
                </Link>
              ))}
            </div>

            {/**
             * This button resets the filtered state when pressed
             */}
            <FontAwesomeIcon icon="fa-solid fa-x" tabIndex="0" className={ " text-udacity-text-black " +
                (this.state.filtered.length > 0 ? "block" : "hidden") +
                " absolute w-10 h-10 top-0 right-0 z-50 mr-5 mt-1"
              }
              alt="Exit"
              onClick={() => (
                (document.getElementById("searchInput").value = ""),
                this.setState({ filtered: [] })
              )}/>

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