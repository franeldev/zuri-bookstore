const express = require('express');
const app = express();
const port = 4000;

// SETUP MONGOOSE
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/zuribook';

app.use(express.json());

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
  tags: Array,
  color: String
})
const Book = mongoose.model('Book', bookSchema)

// POST request to /books to create a new book
app.post('/books', (req, res) => {
  // retieve new book details from req.body
  Book.create({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category,
    purchaseCount: req.body.purchaseCount,
    imageUrl: req.body.imageUrl,
    tags: req.body.tags,
    color: req.body.color
  }, (err, newBook) => {
    if(err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({ message: "new book created", newBook })
    }
  })
  // create a new book and save to db
  // send response to client
})
// GET reuest to /books to fetch all books
app.get('/books', (req, res) =>{
  // fetch all books
  Book.find({}, (err, books) => {
    if (err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({ books })
    }
  })
  // send response tom client
})
// GET request to /books:id to fetch a single book
app.get('/books/:mid', (req, res) =>{
  Book.findById( req.params.id, (err, book) =>{
    if (err) {
      return res.status(500).json({ message: err })
    }
    else if (!book) {
      return res.status(404).json({ message: err })
    }
     else {
      return res.status(200).json({ book })
    }
  })
})
// PUT request to /books:id to update a single book
app.put('/books/:id', (req, res) =>{
  Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    category: req.body.category
  }, (err, book) => {
    if (err) {
      return res.status(500).json({ message: err })
    } else if (!book) {
      return res.status(404).json({ message: "book not found" })
    } else {
      book.save((err, savedBook) =>{
        if (err) {
          return res.status(400).json({ message:err })
        } else {
          return res.status(200).json({ message: "bookk updated successfully" })
        }
      })
    }
  })
})
// DELETE request to /books:id too delete a single 
app.delete('/books/:id', (req, res) =>{
  Book.findByIdAndDelete(req.params.id, (err, book) =>{
    if (err) {
      return res.status(500).json({ message: err })
    }
    else if (!book) {
      res.status(404).json({ message: "book was not found" })
    }
    else {
      return res.status(200).json({ message: "book deleted successfully" })
    }
  })
})


/* 
  Model find => fetch multiple documents
  Model findOne => fetch single document
  Model findById => fetch single document by ID

  Model findOneAndUpdate
  Model findByIdAndUpdate

  Model.findOneAndDelete
  Model.findByIdAndDelete
  Model.findOneAndRemove
  Model.findByIdAndRemove
*/




app.listen(port, ()=>console.log(`app listening on port ${port}`));