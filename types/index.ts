export interface BookDaoInterface {
  findAllBooks(): Promise<any[]>;
  createBook(name: string, author: string): Promise<any>;
}
