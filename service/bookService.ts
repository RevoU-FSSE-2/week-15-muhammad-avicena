import StandardError from "../constants/standardError";
import { BookDaoInterface } from "../types";

class BookService {
  private bookDao: BookDaoInterface;

  constructor(bookDao: BookDaoInterface) {
    this.bookDao = bookDao;
  }

  async getAllBooks() {
    try {
      const books = await this.bookDao.findAllBooks();
      return { success: true, message: books };
    } catch (error: any) {
      console.log(error);
      throw new StandardError({
        status: error.status,
        message: error.message,
        success: false,
      });
    }
  }

  async createBook(name: string, author: string) {
    try {
      const books = await this.bookDao.createBook(name, author);
      if (!books) {
        throw new StandardError({
          status: 404,
          message: "Book list not found",
          success: false,
        });
      }
      return { success: true, message: books.insertedId };
    } catch (error: any) {
      console.log(error);
      throw new StandardError({
        status: error.status,
        message: error.message,
        success: false,
      });
    }
  }
}

export default BookService;
