import {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import AccountDetailsView from './AccountDetailsView'
import { ROUTE_HOME, ROUTE_SIGN_UP, ROUTE_SIGN_IN} from '../Utils/routes'


class nav extends Component{

    render() {
        return (
          <nav className=" top-0 z-50 fixed w-full h-nav bg-blue-dark">
            <ul className="flex flex-row justify-center content-center text-lg font-semibold uppercase">
              <li className=" p-1 m-1 rounded-lg hover:text-gray-400 bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 tracking-wider">
                <NavLink to={ROUTE_HOME} exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              {
                this.props.currentUser === null? (
                  <li className="flex flex-row">
                  <div className=" p-1 m-1 rounded-lg hover:text-gray-400 bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 tracking-wider">
                <NavLink to={ROUTE_SIGN_UP} exact activeClassName="active">
                  Sign UP
                </NavLink>
              </div>
              <div className=" p-1 m-1 rounded-lg hover:text-gray-400 bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 tracking-wider">
                <NavLink to={ROUTE_SIGN_IN} exact activeClassName="active">
                  Sign In
                </NavLink>
              </div>
                  </li>
                ) : (
                  <AccountDetailsView/>
                )}
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