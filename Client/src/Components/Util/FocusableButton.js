import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const FocusableButton = (props)=>{
    return (
      <div className=" rounded-xl flex flex-row justify-center items-center">
        <button
          className="p-3 bg-udacity-white text-udacity-text-header text-sm rounded-lg tracking-wider opacity-100 transition-all 
        shadow-udacity-standard hover:shadow-udacity-hovered focus:shadow-udacity-focused"
        >
          {props.text}
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="mx-2 my-auto" />
        </button>
      </div>
    );
}

export default FocusableButton