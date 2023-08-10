const express = require("express");

const UserController = require("../../controllers/user-controller");
const { AuthRequestValidator } = require("../../middlewares/index");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidator.validateUserSignup,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidator.validateUserSignup,
  UserController.signin
);

router.get("/isAuthenticated", UserController.isAuthenticated);
module.exports = router;
