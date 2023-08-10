const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      data: user,
      message: "Successfully created a new user",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const user = await userService.singin(req.body.email, req.body.password);
    return res.status(201).json({
      success: true,
      data: user,
      message: "Successfully signed in",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(201).json({
      success: true,
      data: response,
      message: "User is authenticated",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Something went wrong in authentication",
      err: error,
    });
  }
};
module.exports = {
  create,
  signin,
  isAuthenticated,
};
