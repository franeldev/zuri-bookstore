const User = require('../models/users');
const bcrypt =  require('bcryptjs');

exports.seedAdmin = () => {
  // check if there is an admin account
  User.findOne({ role: "admin" }, (err, admin) => {
    if(err) throw err;
    if(admin) {
      return "admi account already exists"
    }
    // if there is none, create an admin account
    User.create({
      firstName: "Book",
      lastName: "Goblin",
      username: "bookgoblin",
      role: "admin"
    }, (err, user) => {
      if(err) throw err;
    })
  })
}