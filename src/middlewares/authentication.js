const jwt = require('jsonwebtoken');
const secret = "verySecureSECRET";

exports.authenticateUser = (req, res, next) => {
  // check if there is an authorization login
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "authorization header required" })
  }
  let splittedHeader = req.headers.authorization.split(' ');
  console.log(splittedHeader);
  if (splittedHeader[0] !== "Bearer") {
    return res.status(401).json({ message: "authorization format is Bearer <token>" });
  }
  let token


  next()
  // decode token
  // check if valid
  // allow user to continue with request
}