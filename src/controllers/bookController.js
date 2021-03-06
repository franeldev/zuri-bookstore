const Book = require('../models/book');

exports.createNewBook = (req, res) => {
  // retieve new book details from req.body
  Book.create({
    ...req.body
  }, (err, newBook) => {
    if(err) {
      return res.status(500).json({ message: err })
    } else {
      return res.status(200).json({ message: "new book created", newBook })
    }
  })
  // create a new book and save to db
  // send response to client
}

exports.fetchBooks = (req, res) =>{
  console.log({ user: req.user });
  let conditions = {};
  if (req.query.category) {
      conditions.category = req.query.category
  }
  if (req.query.author) {
      conditions.author = req.query.author
  }
  // create search queries to have field from which one can filter the data to be return by the API so;
  // check req.query for filters,
  // and if there are filters, use them in Model.find query
  // fetch all books
  Book.find(conditions, (err, books) => {
    if (err) {
        return res.status(500).json({ message: err })
    } else {
        return res.status(200).json({ books })
    }
  })
  // send response tom client
}

exports.fetchSingleBook = (req, res) =>{
  Book.findById( req.params.id, (err, book) =>{
    if (err) {
        return res.status(500).json({ message: err })
    }
    else if (!book) {
        return res.status(404).json({ message: "book not found" })
    }
     else {
        return res.status(200).json({ book })
    }
  })
}

exports.updateSingleBook = (req, res) =>{
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
}

exports.deleteSingleBook = (req, res) =>{
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
}