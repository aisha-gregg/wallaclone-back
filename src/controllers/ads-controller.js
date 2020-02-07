const { findAll, createAd } = require("../repositories/ads-repository");

async function getAds(req, res, next) {
  res.send(await findAll());
}

async function postAds(req, res, next) {
  const body = req.body;
  res.send(await createAd(body));
}

module.exports = {
  getAds,
  postAds
};
