const mongoose = require("mongoose");
const ad = mongoose.model("ad");

async function findAll() {
  return ad.find({});
}

module.exports = {
  findAll
};
