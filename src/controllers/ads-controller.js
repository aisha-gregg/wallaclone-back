const express = require("express");
const { findAll, createAd } = require("../repositories/ads-repository");

/**
 * @param {express.Request} req
 * @param {Express.Response} res
 */
async function getAds(req, res) {
  const { query } = req;
  const tags = query.tags?.split(",") ?? [];
  res.send(await findAll({ tags }));
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
  postAds
};
