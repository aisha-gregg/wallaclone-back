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
  const result = await query.exec();
  return result.sort((current, previous) => {
    const currentDate = current._id.getTimestamp();
    const previousDate = previous._id.getTimestamp();
    return previousDate - currentDate;
  });
}

async function findOne(id) {
  return ad.findById(id).exec();
}

async function createAd(newAd) {
  ad.create(newAd);
}

module.exports = {
  findAll,
  findOne,
  createAd
};
