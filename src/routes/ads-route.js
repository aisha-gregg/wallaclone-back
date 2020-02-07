const express = require("express");
const router = express.Router();
const { getAds, postAds } = require("../controllers/ads-controller");

router.get("/ads", getAds);
router.post("/ads", postAds);

module.exports = router;
