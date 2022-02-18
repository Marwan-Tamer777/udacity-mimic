import { ObjectId } from "bson";

let lessonParts;

export default class LessonPartsDao {
  static async injectDB(conn) {
    if (lessonParts) {
      return;
    }
    try {
      lessonParts = await conn.db(process.env.MFLIX_NS).collection("lesson_parts");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
      );
    }
  }

  static async getLessonParts() {
    try {
      let data = await lessonParts.find();
      return data.toArray();
    } catch (e) {
      console.log(e);
    }
  }
}
