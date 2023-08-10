const AppErrors = require("./error-handlers");

class ClientError extends AppErrors {
  constructor(name, message, explanation, statusCodes) {
    super(name, message, explanation, statusCodes);
  }
}

module.exports = ClientError;
