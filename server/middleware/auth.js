// middleware/auth.js
const jwt = require('jsonwebtoken');

const adminAuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Access Denied: No Token Provided!');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach the decoded user data to request

    if (req.user.role !== 'admin') {
      return res.status(403).send('Access Denied: You do not have admin rights!');
    }

    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = adminAuthMiddleware;
