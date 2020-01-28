const express = require('express')
const { getAds } = require('../controllers/ads-controller')
const router = express.Router()

router.get('/ads', getAds)

module.exports = router