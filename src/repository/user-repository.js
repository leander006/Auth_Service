const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
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
}

module.exports = UserRepository;
