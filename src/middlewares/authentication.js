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
  
  let token = splittedHeader[1];

  // decode token & check if valid

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) return res.status(500).json({ err });
    if (!decodedToken) {
      return res.status(401).json({ message: "invallid authorization token, please login" });
    }
    // and if valid, allow user to continue with request
    next();

  })

}