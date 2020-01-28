const { findAll } = require('../repositories/ads-repository')

async function getAds(req, res, next) {
    res.send(await findAll())
}

module.exports = {
    getAds
}