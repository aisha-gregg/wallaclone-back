const express = require("express");
const {
  findAll,
  createAd,
  findOne,
  updateAd,
  deleteOne
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
  const userId = req.user._id;
  const ad = await findOne(adId);

  if (ad.userId !== userId) {
    return res.sendStatus(401);
  }

  await updateAd(adId, body);
  return res.send({ id: adId });
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function deleteAd(req, res) {
  const adId = req.params.id;
  const userId = req.user._id;
  const ad = await findOne(adId);

  if (ad.userId !== userId) {
    return res.status(401).send();
  }

  await deleteOne(adId);
  return res.send(204);
}

module.exports = {
  getAds,
  postAd,
  getAd,
  putAd,
  deleteAd
};
