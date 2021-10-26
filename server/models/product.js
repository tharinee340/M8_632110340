// const db = require("../configs/database");
// const Schema = db.Schema;

// const Books = require("../json/book.json");

// const book = new Schema({
//     name: String,
//     description: String,
//     price: Number,
//     quantity: Number,
//     imageUrl: String,
//     type: String,
//     author: String,
//     status: String
// });

// const Book = db.model("books", book); //สร้างตาราง book จาก schema

// const saveBook = async () => {  //ให้table book หาข้อมูล
//     if (0 == (await Book.find())) await Book.insertMany(Books);

// };
// saveBook();

// module.exports = Book;