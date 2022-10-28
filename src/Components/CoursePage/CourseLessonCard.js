import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FocusableButton from "../Util/FocusableButton";

const CourseLessonCard = ({lessonPart,index}) => {

    const [shrink, setShrink] = useState(1);
    const progress = randomNum()
    function randomNum(){
        return Math.floor(Math.random() * 100);
    }

  return (
    <div className="text-udacity-text-header">
      {shrink === 0 ? (
        <li
          className="shadow-[0_2px_4px_0_rgb(17_22_26_/_16%),_0_0_4px_0_rgb(17_22_26_/_8%),_0_4px_8px_0_rgb(17_22_26_/_4%)]
             hover:shadow-[2px_4px_8px_0_rgb(46_61_73_/_20%)]
              m-10 pl-10 flex flex-col rounded-2xl justify-start items-start bg-udacity-white relative"
          style={{
            backgroundImage: `url(${lessonPart.imgURL})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <Link
            to={"/Lesson/" + lessonPart.ID}
            className="absolute top-0 right-0 w-full h-full"
          ></Link>
          <h3 className="text-udacity-text-header font-semi-bold text-sm my-2">
            Lesson {index + 1}:
          </h3>
          <p className="text-udacity-text-metal font-semibold text-lg my-4">
            {lessonPart.title}
          </p>
          <p className="text-udacity-text-black my-2">
            {lessonPart.description}
          </p>
          <div className="my-4">
            <FocusableButton text="View Lesson" />
          </div>

          <div className="flex flex-row flex-wrap justify-between items-center w-full pb-2 w-[70%]">
            <div className=" w-[20%] h-1 rounded-xl bg-udacity-text-gray mr-4">
              <div
                className="bg-udacity-greenLight h-full rounded-[inherit]"
                style={{ width: progress + "%" }}
              ></div>
            </div>
            <p className="mr-auto text-sm text-udacity-text-black tracking-wider">{`${progress}% Viewed`}</p>
            <div
              className="text-[0.75rem] text-udacity-interactive-click relative cursor-pointer"
              onClick={() => setShrink(1)}
            >
              SHRINK CARD
            </div>
          </div>

        </li>
      ) : (
        <div
          className="flex flex-row w-[90%] mx-auto px-5 py-8 justify-between items-center rounded-lg shadow-udacity-standard "
          onClick={() => setShrink(0)}
        >
          <p className=" text-lg  text-udacity-text-black">
            {lessonPart.title}
          </p>
          <p className="text-udacity-greenLight">
            <FontAwesomeIcon icon="fa-solid fa-check" className="mx-2" />
            Completed
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseLessonCard;
