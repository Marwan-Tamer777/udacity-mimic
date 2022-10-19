import { ObjectId } from "bson";

let lessons;

export default class LessonsDao {
  static async injectDB(conn) {
    if (lessons) {
      return;
    }
    try {
      lessons = await conn.db(process.env.DB_NAME).collection("lessons");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
      );
    }
  }

  static async getLessons() {
    try {
      let data = await lessons.find();
      return data.toArray();
    } catch (e) {
      console.log(e);
    }
  }
}
