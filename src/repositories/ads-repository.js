const mongoose = require("mongoose");
const ad = mongoose.model("ad");

async function findAll({ tags } = { tags: [] }) {
  return ad.find({ tags }).limit(25);
}

async function createAd(newAd) {
  ad.create(newAd);
}

module.exports = {
  findAll,
  createAd
};
