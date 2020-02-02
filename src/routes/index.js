const adsRoute = require("./ads-route");
const usersRoute = require("./users-route");

module.exports = function(app) {
  app.use("/api", adsRoute);
  app.use("/api", usersRoute);
};
