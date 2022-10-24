import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ROUTE_HOME } from "../../Utils/routes";
import { ReactComponent as UdacityLogo } from "../../Images/udacity-logo-cut.svg";
import CourseLessonsNavigation from "./CourseLessonsNavigation";
import { useEffect } from "react";


const CoruseNav = (props) => {

    useEffect(() => {
	document.getElementById("navIcon").addEventListener("click", toggleNav)
}, []);

    let toggleNav =()=>{
        let nav= document.getElementById("navMain")
        nav.style.left = nav.style.left === ("0px") ? `-${nav.offsetWidth}px` :("0px")
  }


  return (
    <div
      id="navMain"
      className="flex flex-row relative transition-all duration-500"
    >
      <button
        id="navIcon"
        className=" text-udacity-main block absolute top-3 -right-14 z-10
            transition duration-300 rounded-full focus:shadow-udacity-focused py-[0.5rem] px-[0.65rem]"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" className=" h-8 w-8" />
      </button>
      <nav
        className="relative bg-udacity-nav flex flex-col items-center w-fit"
      >
        <div className="p-2 mx-auto">
          <UdacityLogo />
        </div>

        <ul className="flex flex-col w-full p-2 justify-start items-center text-lg text-udacity-text-white capitalize">
          <li className="p-2 rounded-xl hover:shadow-udacity-focused transition-all">
            <NavLink
              to={ROUTE_HOME}
              exact
              activeClassName="active"
              className="flex flex-col justify-center items-center"
            >
              <FontAwesomeIcon icon="fa-solid fa-house" className="mx-3" />
              Home
            </NavLink>
          </li>

          <li className="p-2 rounded-xl hover:shadow-udacity-focused transition-all">
            <NavLink
              to={ROUTE_HOME}
              exact
              activeClassName="active"
              className="flex flex-col justify-center items-center"
            >
              <FontAwesomeIcon icon="fa-solid fa-life-ring" className="mx-3" />
              Help
            </NavLink>
          </li>

          <li className="p-2 rounded-xl hover:shadow-udacity-focused transition-all">
            <NavLink
              to={ROUTE_HOME}
              exact
              activeClassName="active"
              className="flex flex-col justify-center items-center"
            >
              <FontAwesomeIcon icon="fa-regular fa-compass" className="mx-3" />
              Catalog
            </NavLink>
          </li>

          <li className="p-2 rounded-xl hover:shadow-udacity-focused transition-all">
            <NavLink
              to={ROUTE_HOME}
              exact
              activeClassName="active"
              className="flex flex-col justify-center items-center"
            >
              <FontAwesomeIcon icon="fa-solid fa-gear" className="mx-3" />
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>

      <CourseLessonsNavigation callback={props.callback} />
    </div>
  );
};

export default CoruseNav;
