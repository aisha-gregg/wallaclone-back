require("./db/mongodb");
require("./models");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("./routes")(app);

app.listen(process.env.PORT || 5000);

module.exports = {
  app
};
