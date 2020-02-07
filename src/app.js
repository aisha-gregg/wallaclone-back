const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.ENVIRONMENT}`),
  debug: true
});
require("./models");
require("./db/mongodb");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("./routes")(app);

app.listen(process.env.PORT || 5000);
