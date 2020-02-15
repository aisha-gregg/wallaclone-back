const mongoose = require("mongoose");
const ad = mongoose.model("ad");

async function findAll({ tags, minPrice, maxPrice }) {
  const query = ad.find().limit(25);

  if (tags !== undefined) {
    query.where("tags").find({ tags });
  }

  if (minPrice !== undefined) {
    query.where("price").gte(minPrice);
  }

  if (maxPrice !== undefined) {
    query.where("price").lte(maxPrice);
  }

  return query.exec();
}

async function createAd(newAd) {
  ad.create(newAd);
}

module.exports = {
  findAll,
  createAd
};
