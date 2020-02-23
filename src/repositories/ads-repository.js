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
  const sortedResult = result.sort((current, previous) => {
    const currentDate = current._id.getTimestamp();
    const previousDate = previous._id.getTimestamp();
    return previousDate - currentDate;
  });

  const resultsWithDate = sortedResult
    .map(ad => ad.toJSON())
    .map(ad => ({
      ...ad,
      date: ad._id.getTimestamp()
    }));
  return resultsWithDate;
}

async function findOne(id) {
  const foundAd = await ad.findById(id).exec();
  const parsedAd = foundAd.toJSON();
  return {
    ...parsedAd,
    date: parsedAd._id.getTimestamp()
  };
}

async function createAd(newAd) {
  ad.create(newAd);
}

async function updateAd(id, updatedAd) {
  ad.updateOne({ _id: id }, updatedAd).exec();
}

async function deleteOne(id) {
  ad.deleteOne({ _id: id }).exec();
}

module.exports = {
  findAll,
  findOne,
  createAd,
  updateAd,
  deleteOne
};
