const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerNewUser = (req, res) => {
  // fetch user details from req body
  // check if a user with this username exists
  User.findOne({ username: req.body.username }, (err, existingUser) => {
    if(err) {
      return res.status(500).json({ err })
    }
    if(existingUser) {
      return res.status(400).json({ message: "a user with this username already exists" })
    }
    // create a new user
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.lastname
    }, (err, newUser) => {
      if(err) {
        return res.status(500).json({ err })
      }
    })
  })
  // hash user passsword
  // save password to db
  // create jwt for user
  // send the token to user
}