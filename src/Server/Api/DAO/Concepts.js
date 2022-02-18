import { ObjectId } from "bson";

let concepts;

export default class ConceptsDao {
  static async injectDB(conn) {
    if (concepts) {
      return;
    }
    try {
      concepts = await conn.db(process.env.MFLIX_NS).collection("concepts");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in moviesDAO: ${e}`
      );
    }
  }

  static async getConcepts() {
    try {
      let data = await concepts.find();
      return data.toArray();
    } catch (e) {
      console.log(e);
    }
  }
}
