import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import LessonConceptList from "./LessonConceptList";

const LessonNav = (props) => {
  useEffect(() => {
    document.getElementById("navIcon").addEventListener("click", toggleNav);
    if (window.screen.width < 768) {
      let nav = document.getElementById("navMain");
      nav.style.marginLeft = `-${nav.offsetWidth}px`;
    }
  }, []);

  let toggleNav = () => {
    let nav = document.getElementById("navMain");
    nav.style.marginLeft =
      nav.style.marginLeft === `-${nav.offsetWidth}px`
        ? "0px"
        : `-${nav.offsetWidth}px`;
  };

  return (
    <div
      id="navMain"
      className="basis-[25%] flex flex-row relative transition-all duration-500"
    >
      <button
        id="navIcon"
        className=" text-udacity-main block absolute top-3 -right-14 z-10
            transition duration-300 rounded-full focus:shadow-udacity-focused
            hover:bg-[rgb(255_255_255_/_16%)] focus:bg-[rgb(255_255_255_/_16%)] py-[0.5rem] px-[0.65rem]"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" className=" h-8 w-8" />
      </button>

      <LessonConceptList callback={props.callback} />
    </div>
  );
};

export default LessonNav;
