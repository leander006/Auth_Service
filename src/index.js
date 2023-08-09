const express = require("express");

const { PORT } = require("./config/serverConfig");

const app = express();

app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
