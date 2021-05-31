const User = require('../models/users');

exports.registerNewUser = (req, res) {
  // fetch user details from req body
  // check if a user with this username exists
  User.findOne({ username: req.body.username }, (err, existingUser) => {
    if(err) {
      return res.status(500).json({ err })
    }
  })
  // create a new user
  // hash user passsword
  // save password to db
  // create jwt for user
  // send the token to user
}