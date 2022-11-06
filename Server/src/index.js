import app from "./server.js"
import {MongoClient} from 'mongodb'
import ConceptsDao from './DAO/Concepts.js'
import CoursesDao from './DAO/Courses.js'
import LessonsDao from "./DAO/Lessons.js";
import LessonsPartsDao from "./DAO/LessonsParts.js";
import UsersDao from "./DAO/Users.js";
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000


/*
Math.random().toString(36).substr(-8)
use this line to generate more random IDs
*/

MongoClient.connect(
  process.env.CONN_URI,
  { useNewUrlParser: true,wtimeout: 2500 }
)
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {

    await ConceptsDao.injectDB(client)
    await CoursesDao.injectDB(client);
    await LessonsDao.injectDB(client);
    await LessonsPartsDao.injectDB(client);
    await UsersDao.injectDB(client);

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
