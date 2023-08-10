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

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went worng",
      err: "User id not given",
    });
  }
  next();
};

module.exports = {
  validateUserSignup,
  validateIsAdminRequest,
};
