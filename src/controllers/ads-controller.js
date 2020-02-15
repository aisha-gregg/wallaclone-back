const express = require("express");
const {
  findAll,
  createAd,
  findOne
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
  res.send(await findAll({ tags, minPrice, maxPrice }));
}
/**
 * @param {string|undefine} price
 */
function getPrice(price) {
  if (price === undefined) {
    return undefined;
  }

  return Number(price);
}

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function postAds(req, res) {
  const body = req.body;
  res.send(await createAd(body));
}

module.exports = {
  getAds,
  postAds,
  getAd
};
