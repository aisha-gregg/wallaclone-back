const express = require('express')
const router = express.Router()
const { getAds } = require('../controllers/ads-controller')

router.get('/ads', getAds)

module.exports = router