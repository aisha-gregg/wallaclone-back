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
app.use(express.json({ limit: "10mb" }));
require("./routes")(app);

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("listening on " + listener.address().port);
});
