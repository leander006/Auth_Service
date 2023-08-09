const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
  });
};

prepareAndStartServer();
