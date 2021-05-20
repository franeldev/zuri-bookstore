const express = require('express');
const app = express();
const port = 4000;

// SETUP MONGOOSE
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/zuribook';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('database connection successful')
  }
})


// CREATE SCHEMA
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  purchaseCount: Number,
  imageUrl: String,
  tag: Array
})
const Book = mongoose.model('Book', bookSchema)


Book.create({
  title: "New Book",
  author: "Authur Mike",
  description: "A very new book",
  category: "finance",
  purchaseCount: 40,
  imageUrl: "random.url.com",
  tags: ["tag1", "another tag"]
}, (err, book) => {
  if (err) {
    console.log(err);
  } else {
    console.log(book);
  }
})


app.listen(port, ()=>console.log(`app listening on port ${port}`));