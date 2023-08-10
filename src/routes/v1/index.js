const express = require("express");

const UserController = require("../../controllers/user-controller");
const {
  AuthRequestValidator,
  AuthRequestIsAdmin,
} = require("../../middlewares/index");
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

router.get(
  "/isAdmin",
  AuthRequestIsAdmin.validateIsAdminRequest,
  UserController.isAdmin
);
module.exports = router;
