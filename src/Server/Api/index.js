import app from "./server"
import {MongoClient} from 'mongodb'
import ConceptsDao from './DAO/Concepts'
import CoursesDao from './DAO/Courses'
import LessonsDao from "./DAO/Lessons";
import LessonsPartsDao from "./DAO/LessonsParts";
import UsersDao from "./DAO/Users";

const port = process.env.PORT || 8000


/*
Math.random().toString(36).substr(-8)
use this line to generate more random IDs
*/
MongoClient.connect(
  process.env.MFLIX_DB_URI,
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
