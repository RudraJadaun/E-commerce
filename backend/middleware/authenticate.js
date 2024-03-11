const jwt =require ('jsonwebtoken');
const wrapAsync =require ('./errorHandling');
const User =require ('../models/user');

// User must be authenticated
const protect = wrapAsync(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId); // trying to find a user on the basis of this token

      next();

    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token invalid');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// User must be an admin
// this for admin page related to check for admin or not
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not  an admin');
  }
};

module.exports={protect,admin};