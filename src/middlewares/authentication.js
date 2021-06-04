const {decodeToken} = require('../services/jwtServices');

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
  let decodedToken = decodeToken(token);
    if (!decodedToken) {
        return res.status(401).json({ message: "invallid authorization token, please login" });
    } else {
        // and if valid, allow user to continue with request
        console.log(decodedToken);
        req.user = decodedToken;
        next();
    }

}

exports.checkIfAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
      return res.status(401).json({ message: "this route is restricted to the admin only" });
  }
  return next();
}