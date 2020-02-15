const express = require("express");
const router = express.Router();
const { getAds, getAd, postAds } = require("../controllers/ads-controller");

router.get("/ads", getAds);
router.get("/ads/:id", getAd);
router.post("/ads", postAds);

module.exports = router;
