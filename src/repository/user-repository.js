const ValidationError = require("../utils/validation-error");
const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getById(modelId) {
    try {
      const user = await User.findByPk(modelId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      throw { error };
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "Admin",
        },
      });
      return user.hasRole(adminRole);
      return user;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserRepository;
