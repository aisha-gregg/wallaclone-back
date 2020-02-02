const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.Promise = global.Promise;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const url = `mongodb://localhost/wallaclone`;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
};

mongoose.connect(url, options);
module.exports = db;
