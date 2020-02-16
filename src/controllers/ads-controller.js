const express = require("express");
const {
  findAll,
  createAd,
  findOne,
  updateAd
} = require("../repositories/ads-repository");

/**
 * @param {express.Request} req
 * @param {Express.Response} res
 */
async function getAd(req, res) {
  const { params } = req;
  res.send(await findOne(params.id));
}

/**
 * @param {express.Request} req
 * @param {Express.Response} res
 */
async function getAds(req, res) {
  const { query } = req;
  const tags = query.tags?.split(",");
  const minPrice = getPrice(query.minPrice);
  const maxPrice = getPrice(query.maxPrice);
  const name = query.name;
  res.send(await findAll({ tags, minPrice, maxPrice, name }));
}
/**
 * @param {string|undefined} price
 */
function getPrice(price) {
  if (price === undefined) {
    return undefined;
  }

  return Number(price);
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function postAd(req, res) {
  const body = req.body;
  const userId = req.user._id;
  res.send(await createAd({ ...body, userId }));
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function putAd(req, res) {
  const body = req.body;
  const adId = req.params.id;
  await updateAd(adId, body);
  res.send({ id: adId });
}

module.exports = {
  getAds,
  postAd,
  getAd,
  putAd
};
