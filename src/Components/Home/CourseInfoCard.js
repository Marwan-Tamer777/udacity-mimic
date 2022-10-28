import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTE_GENERAL_COURSE_PAGE } from '../../Utils/routes';
import React from 'react';



export default function CourseInfoCArd({course}){

  function randomBorders(){
    let num = Math.floor(Math.random()*100)
    let tailwind = "rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-md"
    if(num >=0 && num<25){tailwind+= " rounded-tl-3xl"}
    if(num >=25 && num<50){tailwind+= " rounded-tr-3xl"}
    if(num >=50 && num<75){tailwind+= " rounded-br-3xl"}
    if(num >=75 && num<=100){tailwind+= " rounded-bl-3xl"}
    return tailwind
  }

      return (
        <Link to={ROUTE_GENERAL_COURSE_PAGE + course.ID} className="flex flex-row gap-4 basis-[45%] my-2">
          <div className='flex flex-col gap-4 justify-center items-center basis-[30%]'>
            <img src={course.img} alt="Course" className={`w-full rounded h-[40%] object-cover ${randomBorders()}`}/>
            <div className='p-4 w-full rounded-md bg-udacity-main text-udacity-text-white text-center font-bold text-sm'>
              Program Details
            </div>
            <div className='p-4 w-full rounded-md bg-udacity-white text-udacity-main text-center border-4 border-solid
            border-udacity-main font-bold text-sm'>
              Download Syllabus
            </div>
          </div>

          <div className='flex flex-col justify-between items-start'>

            <h2 className=' font-bold text-2xl text-udacity-text-header capitalize'>
              {course.about}
            </h2>
            <p className=' font-thin text-sm text-udacity-text-black capitalize'>
              {course.description}
            </p>

            <div className='flex flex-row justify-start text-udacity-text-black'>
              <div className='flex flex-row justify-center items-center gap-1 mx-2'>
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                <span className=' font-thin text-sm text-udacity-text-black capitalize'>{course.cost}</span>
              </div>
              <div className='mr-auto flex flex-row justify-center items-center gap-1 mx-2'>
                <FontAwesomeIcon icon="fa-solid fa-clock" />
                <span className=' font-thin text-sm text-udacity-text-black capitalize'>{course.duration + " Hours"}</span>
              </div>
            </div>

{/**
 *  Adds the rating by overlapping a blank div which width depends on the rating of the course
 */}
            <div className='flex flex-row justify-center items-center gap-2'>
              <p className=' font-thin text-sm text-udacity-text-black capitalize'>Rating: </p>
              <div className='flex flex-row relative gap-1 text-udacity-star'>
                <div className='absolute top-0 right-0 h-full bg-udacity-white' 
                style={{width: ((1-(course.rating/5))*100)+"%"}}></div>
                <FontAwesomeIcon icon="fa-solid fa-star"/>
                <FontAwesomeIcon icon="fa-solid fa-star"/>
                <FontAwesomeIcon icon="fa-solid fa-star"/>
                <FontAwesomeIcon icon="fa-solid fa-star"/>
                <FontAwesomeIcon icon="fa-solid fa-star"/>
              </div>
            </div>

            <div>
              <p className=' text-udacity-text-header font-bold text-lg'>Authors:</p>
              <p className=' text-udacity-text-black font-thin text-sm'>{
                course.authors.map((name,index)=>(<span key={name}>
                  {name + (index===course.authors.length-1? ('.'):(', '))}</span>))
              }</p>
            </div>
          </div>

        </Link>
      );
}


