const mongoose = require("mongoose");
const ad = mongoose.model("ad");

async function findAll() {
  return ad.find({});
}

async function createAd(newAd) {
  ad.create(newAd);
}

module.exports = {
  findAll,
  createAd
};
