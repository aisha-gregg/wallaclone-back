require('./db/mongodb')
require('./models/ad')

const bodyParser = require('body-parser')
const routes = require('./routes/ads-route')
const express = require('express')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)

app.listen(process.env.PORT || 3000)

module.exports = {
    app
}