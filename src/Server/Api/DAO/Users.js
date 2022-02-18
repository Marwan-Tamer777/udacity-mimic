import { ObjectId } from "bson";

let users;

export default class UsersDao {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.MFLIX_NS).collection("users");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
      );
    }
  }

  static async getByName(userName) {
    try {
      let data = await users.findOne({ user_name: userName });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getByEmail(userEmail) {
    try {
      let data = await users.findOne({ email: userEmail });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
