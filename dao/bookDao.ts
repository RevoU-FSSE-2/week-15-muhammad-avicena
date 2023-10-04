import { Collection, Db } from "mongodb";
import StandardError from "../constants/standardError";

interface Database {
  collection: (name: string) => Collection;
}

class BookDao {
  private db: Database;

  constructor(db: Db) {
    this.db = db as Database;
  }

  async findAllBooks() {
    const books = await this.db.collection("books").find({}).toArray();
    if (!books) {
      throw new StandardError({
        status: 404,
        message: "Book list not found",
        success: false,
      });
    }
    return books;
  }

  async createBook(name: string, author: string) {
    const books = await this.db.collection("books").insertOne({ name, author });
    return books;
  }
}

export default BookDao;
