const jwt =require ('jsonwebtoken');
const wrapAsync =require ('./errorHandling');
const User =require ('../models/user');

// User must be authenticated
const protect = wrapAsync(async (req, res, next) => {
  

  // Read JWT from the 'jwt' cookie
 let token = req.cookies.jwt;

  if (token) {
    try {
      const verify = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(verify.userId); // trying to find a user on the basis of this token

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



module.exports={protect};