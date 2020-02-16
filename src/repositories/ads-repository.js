const mongoose = require("mongoose");
const ad = mongoose.model("ad");

async function findAll({ tags, minPrice, maxPrice, name }) {
  const query = ad.find().limit(25);

  if (name !== undefined) {
    query.where("name").find({ $text: { $search: name } });
  }

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

async function updateAd(id, updatedAd) {
  ad.updateOne({ _id: id }, updatedAd).exec();
}

module.exports = {
  findAll,
  findOne,
  createAd,
  updateAd
};
