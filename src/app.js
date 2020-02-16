const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.ENVIRONMENT}`),
  debug: true
});
require("./models");
require("./db/mongodb");

const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use(
  jwt({ secret: process.env.JWT_KEY }).unless(req => {
    return (
      (req.originalUrl.startsWith("/api/ads") && req.method === "GET") ||
      req.originalUrl.startsWith("/api/users")
    );
  })
);

require("./routes")(app);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send();
  }

  console.error(err);

  res.status(500).send();
});

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("listening on " + listener.address().port);
});
