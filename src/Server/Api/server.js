import express from "express"
import { Router } from "express";
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import ConceptsDao from "./DAO/Concepts";
import CoursesDao from "./DAO/Courses";
import LessonsDao from "./DAO/Lessons";
import LessonPartsDao from "./DAO/LessonsParts";
import UsersDao from "./DAO/Users";

const router = new Router();
const app = express()
app.use(express.static("website"));
app.use(cors())
process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




app.get("/getConcepts", getConcepts);
app.get("/getCourses", getCourses);
app.get("/getLessons", getLessons);
app.get("/getLessonParts", getLessonParts);
app.get("/getUser", getUser);
app.get("/validateUser", validateUser);

async function getConcepts(req, res) {
  let data = await ConceptsDao.getConcepts();
  console.log(data);
  res.send(data);
}

async function getCourses(req, res){
  let data = await CoursesDao.getCourses();
  console.log(data)
  res.send(data);
}

async function getLessons(req, res) {
  let data = await LessonsDao.getLessons();
  console.log(data);
  res.send(data);
}

async function getLessonParts(req, res) {
  let data = await LessonPartsDao.getLessonParts();
  console.log(data);
  res.send(data);
}

async function getUser(req, res) {
  let data = await UsersDao.getUser(req.body.use_name);
  console.log(data);
  res.send(data);
}

async function validateUser(req, res) {
  console.log("GETE",req.body)
  let data = await UsersDao.getByName(req.body.name);
  let validName= data === null ? true : false
  console.log(data);

  data = await UsersDao.getByEmail(req.body.email);
  let validEmail = data === null ? true : false;
  console.log(data);


  res.send(validEmail === true ? (validName === true ? true : false ) : false );
}

export default app
