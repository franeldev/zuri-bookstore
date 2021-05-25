const mongoose = require('mongoose');

// CREATE SCHEMA
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  purchaseCount: Number,
  imageUrl: String,
  tags: Array,
  color: String
})
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;