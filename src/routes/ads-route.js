const express = require("express");
const router = express.Router();
const {
  getAds,
  getAd,
  postAd,
  putAd
} = require("../controllers/ads-controller");

router.get("/ads", getAds);
router.get("/ads/:id", getAd);
router.post("/ads", postAd);
router.put("/ads/:id", putAd);

module.exports = router;
