const validateUserSignup = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went worng",
      err: "Email or password missing in request",
    });
  }
  next();
};

module.exports = {
  validateUserSignup,
};
