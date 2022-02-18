import { ObjectId } from "bson"

let courses

export default class CoursesDao {
  static async injectDB(conn) {
    if (courses) {
      return
    }
    try {
      courses = await conn.db(process.env.MFLIX_NS).collection("courses")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`,
      )
    }
  }

  static async getCourses (){
      try{
          let data = await courses.find();
          return data.toArray()
      } catch(e){
          console.log(e)
      }
  }
}