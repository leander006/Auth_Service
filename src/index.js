const express = require("express");

const bodyParser = require("body-parser");

const apiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  
  app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
  });
};

prepareAndStartServer();
