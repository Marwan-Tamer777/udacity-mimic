import {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import AccountDetailsView from '../AccountDetailsView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as UdacityLogo } from '../../Images/udacity-logo.svg'
import { ROUTE_HOME, ROUTE_SIGN_UP, ROUTE_SIGN_IN} from '../../Utils/routes'


class nav extends Component{

  /*
  Old li
  <li className=" p-1 m-1 rounded-lg hover:text-gray-400 bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 tracking-wider">
      <NavLink to={ROUTE_HOME}  activeClassName="active">
        Home
      </NavLink>
  </li>

  New li
  <li className='p-2 rounded-xl focus:shadow-udacity-focused transition-all flex flex-row items-center'>
      <FontAwesomeIcon icon="fa-solid fa-house" className='mx-2' />
      <NavLink to={ROUTE_HOME}  activeClassName="active">
            Home
      </NavLink>
  </li>
  */

  toggleNav(){
    
    let nav = document.getElementById("navMain");
    //nav.style.transform = nav.style.transform === "translateX(-100%)" ? "" : "translateX(-100%)";
    nav.style.marginLeft = nav.style.marginLeft === `-${nav.offsetWidth}px` ? "0px": `-${nav.offsetWidth}px`;
    //document.getElementById("navMain").style.marginLeft = `-${document.getElementById("navMain").offsetWidth}px`
    //document.getElementById("content").classList.toggle("ml-[-12%]")
  }

  componentDidMount(){
    document.getElementById("navIcon").addEventListener("click", this.toggleNav)
    if (window.screen.width < 768) {
      let nav = document.getElementById("navMain");
      nav.style.marginLeft = `-${nav.offsetWidth}px`;
    }
  }

    render() {
        return (
          <nav id="navMain" className="relative bg-udacity-nav basis-[20%] flex flex-col items-center
           transition-all duration-500">

            <button id="navIcon" className=' text-udacity-main block absolute top-3 -right-14 z-10
            transition duration-300 rounded-full focus:shadow-udacity-focused py-[0.5rem] px-[0.65rem]'>
            <FontAwesomeIcon icon="fa-solid fa-bars" className=' h-8 w-8'/>
          </button>

            <div className='p-4'>
              <UdacityLogo/>
            </div>
            
            <ul className="flex flex-col w-full p-2 gap-1 justify-center items-start  text-lg text-udacity-text-white capitalize">

              <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
               flex flex-row items-center'>
                <NavLink to={ROUTE_HOME} >
                 <FontAwesomeIcon icon="fa-solid fa-house" className='mx-3' />
                    Home
                  </NavLink>
              </li>

              <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
               flex flex-row items-center'>
                <NavLink to={ROUTE_HOME} >
                  <FontAwesomeIcon icon="fa-solid fa-life-ring" className='mx-3' />
                 
                    Help
                  </NavLink>
              </li>

              <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
               flex flex-row items-center'>
                <NavLink to={ROUTE_HOME} >
                 <FontAwesomeIcon icon="fa-regular fa-compass" className='mx-3'/>
                 
                    Catalog
                  </NavLink>
              </li>

              <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
               flex flex-row items-center'>
                 <NavLink to={ROUTE_HOME} >
                 <FontAwesomeIcon icon="fa-solid fa-gear" className='mx-3'/>
                    Setting
                  </NavLink>
              </li>

              
              
              {
                this.props.currentUser === null? (
                  <>
                  <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
                  flex flex-row items-center'>
                    <NavLink to={ROUTE_SIGN_UP} >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" className='mx-3' />
                    
                      Sign Up
                    </NavLink>
                  </li>
                  <li className='p-2 rounded-xl hover:shadow-udacity-focused transition-all
                  flex flex-row items-center'>
                    <NavLink to={ROUTE_SIGN_IN}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className='mx-3' />
                    
                        Sign in
                      </NavLink>
                  </li>
                  </>
                ) : (
                  <AccountDetailsView/>
                )
              }

            </ul>
          </nav>
          
          );
        }
}

function mapStateToProps ({currentUser = null}) {
  return {
    currentUser,
  }
}


export default connect(mapStateToProps)(nav)