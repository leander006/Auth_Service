const express = require("express");

const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");
const { User, Role } = require("./models/index");

const prepareAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async (req, res) => {
    // const u1 = await User.findByPk(3);
    // console.log(u1);
    // const r1 = await Role.findByPk(2);
    // await u1.addRole(r1);
    console.log(`Server started on port ${PORT}`);
  });
};

prepareAndStartServer();
