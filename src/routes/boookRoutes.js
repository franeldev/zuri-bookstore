const express = require('express');
const router = express.Router();
const BookCtlr = require('../controllers/bookController');

// POST request to /books to create a new book
router.post('/books', BookCtlr.createNewBook)
// GET reuest to /books to fetch all books
router.get('/books', BookCtlr.fetchBooks)
// GET request to /books:id to fetch a single book
router.get('/books/:id', BookCtlr.fetchSingleBook)
// PUT request to /books:id to update a single book
router.put('/books/:id', BookCtlr.updateSingleBook)
// DELETE request to /books:id too delete a single 
router.delete('/books/:id', BookCtlr.deleteSingleBook)


module.exports = router;


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