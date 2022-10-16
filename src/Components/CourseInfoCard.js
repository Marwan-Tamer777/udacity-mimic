import { useHistory } from 'react-router-dom'
import { ROUTE_GENERAL_COURSE_PAGE } from '../Utils/routes';
import React from 'react';



export default function CourseInfoCArd({course}){
      const history = useHistory();

      return (
        <div
          className="flex-row flex flex-third border-2 m-2 rounded-2xl shadow-xl border-blue-400
           hover:bg-gray-600 transform transition hover:-translate-y-2"
          onClick={() => history.push(ROUTE_GENERAL_COURSE_PAGE + course.ID)}
        >
          <div className="flex flex-col content-evenly justify-evenly p-2">
            <div>
              <h4 className=" uppercase text-lg text-blue-400 font-bold">
                Price:
              </h4>
              <p>{course.cost + "$"}</p>
            </div>
            <div>
              <h4 className=" uppercase text-lg text-blue-400 font-bold">
                Duration:
              </h4>
              <p>{course.duration + " hours"}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between content-between m-3">
            
            <div className="my-2">
              <h4 className=" uppercase text-base text-blue-400 font-semibold">
                About this course:
              </h4>
              <p className="mt-2">{course.about}</p>
            </div>

            <div className="my-2">
              <h4 className=" uppercase text-base text-blue-400 font-semibold">
                Authors:
              </h4>
              <p className="mt-2">
                {course.authors.map((name, index) =>
                  index === course.authors.length - 1 ? name + "." : name + ","
                )}
              </p>
            </div>

            <div className=" my-2">
              <h4 className=" uppercase text-base text-blue-400 font-semibold">
                Description:
              </h4>
              <p className="mt-2">{course.description}</p>
            </div>
          </div>
        </div>
      );
}


