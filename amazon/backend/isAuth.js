const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authorization.slice(7, authorization.length);

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      } else if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' });
      } else {
        return res.status(401).json({ message: 'Authentication failed' });
      }
    } else {
      req.user = decode;
      next();
    }
  });
};

module.exports = isAuth;
