const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_KEY } = require("../config/serverConfig");
const AppErrors = require("../utils/error-handlers");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw error;
      }
      throw error;
    }
  }

  async singin(email, password) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const passwordMatch = this.checkPassword(password, user.password);
      if (!passwordMatch) {
        throw { error: "Enter valid password" };
      }

      const newJwt = this.createToken({ email: user.email, id: user.id });
      return newJwt;
    } catch (error) {
      throw { error };
    }
  }

  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "Invalid token passed!" };
      }

      const user = await this.userRepository.getById(response.id);
      if (!user) {
        throw { erorr: "No user with the corresponding token!" };
      }
      return user.id;
    } catch (error) {
      throw { error };
    }
  }
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  checkPassword(userPassword, inputPassword) {
    try {
      console.log(userPassword, inputPassword);
      const res = bcrypt.compareSync(userPassword, inputPassword);
      console.log("res ", res);
      return res;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  isAdmin(userId) {
    try {
      return this.userRepository.isAdmin(userId);
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = UserService;
