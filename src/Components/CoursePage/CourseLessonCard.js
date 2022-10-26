import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseLessonCard = ({lessonPart,index}) => {

    const [shrink, setShrink] = useState(1);

    function randomNum(){
        return Math.floor(Math.random() * 100);
    }
  return (
    <div className="text-udacity-text-header">
      {shrink === 0 ? (
        <Link to={"/Lesson/" + lessonPart.ID}>
          <li
            className=" border-solid border-2 border-black shadow-2xl hover:shadow-none
                    m-10 pl-10 flex flex-row rounded-2xl justify-start content-center bg-white"
          >
            <h3 className="my-auto text-gray-500 font-medium text-xl">
              Lesson {index + 1}:
            </h3>
            <div className=" mx-auto flex flex-col justify-evenly content-evenly">
              <p className="text-2xl text-blue-400 font-semibold">
                {lessonPart.title}
              </p>
              <p className=" font-medium p-4">{lessonPart.description}</p>
            </div>
            <img
              src={lessonPart.imgURL}
              alt="pic"
              className=" right-0 object-cover w-1/3 h-1/2 rounded-r-2xl"
            />
          </li>
        </Link>
      ) : (
        <div
          className="flex flex-ro p-5 justify-between items-center shadow-udacity-standard "
          onClick={() => (console.log("AFAFfa"), setShrink(1))}
        >
          <p>{lessonPart.title}</p>
          <p className="text-udacity-greenLight">
            <FontAwesomeIcon icon="fa-solid fa-check" />
            Completed
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseLessonCard;
